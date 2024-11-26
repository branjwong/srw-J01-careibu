import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - Careibu",
    description: "the social care community",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
