import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const confirmedPassword = searchParams.get("confirmPassword");
  const name = searchParams.get("name");
  const phoneNumber = searchParams.get("phoneNumber");

  return NextResponse.json({
    message: "GET recibido correctamente",
    data: { email, password, confirmedPassword, name, phoneNumber },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, confirmedPassword, name, phoneNumber } = body;

  console.log("Datos recibidos en POST:", {
    email,
    password,
    confirmedPassword,
    name,
    phoneNumber,
  });

  return NextResponse.json({
    message: "POST recibido correctamente",
    data: { email, password, confirmedPassword, name, phoneNumber },
  });
}
