import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        {children}

        <footer className="bg-blue-700 w-full py-4">
          <div className="w-full text-center">
            <h2 className="text-white text-base">
              Todos los derechos reservados &copy; 2024
            </h2>
          </div>
        </footer>
      </body>
    </html>
  );
}
