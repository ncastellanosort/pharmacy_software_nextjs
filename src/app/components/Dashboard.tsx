import React from "react";

export default function Dashboard() {
  return (
    <>
      <section className="p-4 sm:ml-48">
        <div className="bg-whitedark:bg-gray-900">
          <div className="p-4 mx-auto max-w-screen-xl">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-8">
              <a
                href="#"
                className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
              >
                <p>Productos</p>
              </a>

              <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">
                Productos en stock
              </h1>
              <p className="text-base font-normal text-gray-500 mb-6">
                Tienes un total de <strong>4</strong> productos disponibles.
              </p>
              <a
                href="Products.jsp"
                className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              >
                <p className="mr-2">Ver productos</p>

                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 border-gray-200 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
                >
                  <p>Proveedores</p>
                </a>
                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
                  Cantidad de proveedores activos
                </h2>
                <p className="text-base font-normal text-gray-500 mb-4">
                  Actualmente, cuentas con un total de <strong>6</strong>{" "}
                  proveedores registrados en el sistema.
                </p>
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                >
                  <p className="mr-2">Ver proveedores</p>

                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
                >
                  <p>Compras</p>
                </a>
                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
                  Compras realizadas el último mes
                </h2>
                <p className="text-base font-normal text-gray-500 mb-4">
                  Haz realizado un total de <strong>117</strong> compras en el
                  ultimo mes.
                </p>
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                >
                  <p className="mr-2">Ver compras</p>
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
                </a>
              </div>
            </div>
            <div className="grid mt-8 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-yellow-200 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
                >
                  <p>Empleados</p>
                </a>
                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
                  Cantidad de empleados activos
                </h2>
                <p className="text-base font-normal text-gray-500 mb-4">
                  En la actualidad, tienes un total de <strong>1409</strong>{" "}
                  empleados que forman parte de tu equipo.
                </p>
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                >
                  <p className="mr-2">Ver empleados</p>
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-gray-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
                >
                  <p>Clientes</p>
                </a>

                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
                  Cantidad de clientes activos
                </h2>
                <p className="text-base font-normal text-gray-500mb-4">
                  Actualmente, cuentas con un total de <strong>109</strong>{" "}
                  clientes registrados en tu base de datos.
                </p>
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-30"
                >
                  <p className="mr-2">Ver clientes</p>
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
