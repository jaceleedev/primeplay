import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { inquiryType, customerName, isBusiness, email, contact, content } =
      await req.json();

    // 필수 필드 유효성 검사
    if (!inquiryType || !customerName || !contact || !content) {
      return NextResponse.json(
        { message: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();
    try {
      const query = `
        INSERT INTO contacts (inquiry_type, customer_name, is_business, email, contact, content)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      // const query = `
      //   INSERT INTO contacts_test (inquiry_type, customer_name, is_business, email, contact, content)
      //   VALUES (?, ?, ?, ?, ?, ?)
      // `;
      await connection.execute(query, [
        inquiryType,
        customerName,
        isBusiness,
        email || null,
        contact,
        content,
      ]);
      connection.release();
      return NextResponse.json(
        { message: "문의가 성공적으로 접수되었습니다." },
        { status: 201 }
      );
    } catch (error) {
      connection.release();
      console.error("DB Error:", error);
      return NextResponse.json(
        { message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Request Body Error:", error);
    return NextResponse.json(
      { message: "잘못된 요청입니다." },
      { status: 400 }
    );
  }
}
