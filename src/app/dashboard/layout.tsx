import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Onboarding - Careibu",
    description: "the social care community",
};

export default function OnboardingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
