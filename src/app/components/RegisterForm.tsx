import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-16 lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <Image
              className="w-8 h-8 mr-2"
              width={32}
              height={32}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            ></Image>
            Bienvenido
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crea una cuenta
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="/api/register"
                method="GET"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    title="Por favor ingrese un correo válido"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Nombre de la farmacia
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Farmacenter"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Número de contacto
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    pattern="[0-9]+"
                    title="Por favor ingrese solo números"
                    id="phoneNumber"
                    placeholder="3243559827"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Registrarse
                </button>
                <p className="text-sm font-light text-gray-500">
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    href="/login"
                    className="text-blue-500 underline text-base"
                    target="_blank"
                  >
                    Ingresa acá
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
