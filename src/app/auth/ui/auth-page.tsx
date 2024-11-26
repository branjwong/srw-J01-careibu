import Image from "next/image";

import { State } from "../actions/types";

import AuthForm from "./auth-form";

/**
 * A page for authentication screens.
 * params:
 * - headerText: text rendered at the header
 * - buttonText: text rendered by the submission button
 * - authAction: a server action to be called upon form submission
 * - linkQuestion: text rendered after the submission button
 * - linkText: text rendered after the `linkQuestion`
 * - linkUrl: where the user is routed to upon clicking on the `linkText`
 */
export default function AuthPage({
    headerText,
    buttonText,
    authAction,
    linkQuestion,
    linkText,
    linkUrl,
}: {
    headerText: string;
    buttonText: string;
    authAction: (
        state: Awaited<State>,
        payload: FormData
    ) => State | Promise<State>;
    linkQuestion: string;
    linkText: string;
    linkUrl: string;
}) {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    className="mx-auto h-10 w-auto"
                    src="https://careibu.com/wp-content/uploads/2021/08/careibu-siteicon.svg"
                    alt="Your Company"
                    width={200}
                    height={200}
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    {headerText}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <AuthForm buttonText={buttonText} authAction={authAction} />
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    {linkQuestion}{" "}
                    <a
                        href={linkUrl}
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        {linkText}
                    </a>
                </p>
            </div>
        </div>
    );
}
