import { redirect } from "next/navigation";

import { USER_TOKEN } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(request: Request) {
    const cookieStore = await cookies();
    cookieStore.delete(USER_TOKEN);

    redirect("/");
}
