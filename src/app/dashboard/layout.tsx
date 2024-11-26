import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard - Careibu",
    description: "the social care community",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
