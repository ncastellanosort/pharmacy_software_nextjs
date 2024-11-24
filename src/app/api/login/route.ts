import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  console.log(email + " " + password);

  return NextResponse.redirect(new URL("/home", request.url));
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  console.log("Datos recibidos en POST:", { email, password });

  return NextResponse.json({
    message: "POST recibido correctamente",
    data: { email, password },
  });
}
