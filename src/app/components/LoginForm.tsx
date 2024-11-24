import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
}

export default function LoginForm(props: Props) {
  return (
    <>
      <section className="bg-gray-50 flex-grow">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-14 md:h-full lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <Image
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              width={32}
              height={32}
              alt="logo"
            ></Image>
            Bienvenido
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Inicio de sesión
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="/api/login"
                method="GET"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>
                <div className="flex items-center justify-end">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
                >
                  Ingresar
                </button>
                <p className="text-sm font-light text-gray-500">
                  ¿No tienes una cuenta?{" "}
                  <Link
                    href="/register"
                    className="text-blue-500 underline text-base"
                    target="_blank"
                  >
                    {" "}
                    Regístrate ahora {props.name}
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
