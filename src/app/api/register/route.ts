import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const confirmedPassword = searchParams.get("confirmPassword");
  const name = searchParams.get("name");
  const phoneNumber = searchParams.get("phoneNumber");

  console.log(email, password, confirmedPassword, name, phoneNumber);

  return NextResponse.redirect(new URL("/login", request.url));
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, confirmedPassword, name, phoneNumber } = body;

  return NextResponse.json({
    message: "POST recibido correctamente",
    data: { email, password, confirmedPassword, name, phoneNumber },
  });
}
