import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register - Careibu",
    description: "the social care community",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
