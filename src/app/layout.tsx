import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const careibuFont = localFont({
    src: "./fonts/Mostardesign-FilsonSoftRegular.woff2",
});

export const metadata: Metadata = {
    title: "Careibu - the social care community",
    description: "the social care community",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="h-full bg-white">
            <body className={`h-full ${careibuFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
