import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  return NextResponse.json({
    message: "GET recibido correctamente",
    data: { email, password },
  });
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
