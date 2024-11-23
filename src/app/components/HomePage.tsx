import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            FarmAdmin Pro
          </h1>
          <p className="mb-8 text-xl font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Gestiona todos los aspectos de tu farmacia de manera sencilla, desde
            el manejo de productos hasta la gestión de proveedores. Nuestro
            sistema ofrece una solución integral para optimizar las operaciones
            de tu farmacia y asegurar una administración eficiente.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="/register"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              target="_blank"
            >
              Registrarse
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              href="/login"
              className="py-3 px-5 sm:ms-4 text-base font-medium ml-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              target="_blank"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
