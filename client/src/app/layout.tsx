

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ToasterContext from "./context/ToasterContext";
import AuthProvider from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";


const instrumentSans = localFont({
  src: "./fonts/InstrumentSans.woff2",
  variable: "--font-instrument-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Points",
  description: "Reward yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable}  antialiased`}
      >
        <AuthProvider>
          <FormProvider>
            <ToasterContext/>
                {children}
          </FormProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
