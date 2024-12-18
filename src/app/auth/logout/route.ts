import { redirect } from "next/navigation";

import { USER_TOKEN } from "@/lib/constants";
import { cookies } from "next/headers";

/**
 * Navigating to `/auth/logout` deletes their token from their browser's memory.
 */
export async function GET(request: Request) {
    const cookieStore = await cookies();
    cookieStore.delete(USER_TOKEN);

    redirect("/");
}
