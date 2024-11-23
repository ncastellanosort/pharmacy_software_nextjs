import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  console.log("Datos recibidos en GET:", { name, email });

  return NextResponse.json({
    message: "GET recibido correctamente",
    data: { name, email },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email } = body;

  console.log("Datos recibidos en POST:", { name, email });

  return NextResponse.json({
    message: "POST recibido correctamente",
    data: { name, email },
  });
}
