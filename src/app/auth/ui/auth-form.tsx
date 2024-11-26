"use client";

import { useActionState } from "react";
import Form from "next/form";

import { State } from "../actions/types";

const initialState: State = {
    message: "",
};

export default function AuthForm({
    buttonText,
    authAction,
}: {
    buttonText: string;
    authAction: (
        state: Awaited<State>,
        payload: FormData
    ) => State | Promise<State>;
}) {
    const [state, formAction] = useActionState(authAction, initialState);

    return (
        <Form className="space-y-6" action={formAction}>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                >
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label
                        htmlFor="password"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Password
                    </label>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>
            <div>
                <p className="text-rose-600">{state?.message}</p>
            </div>
            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {buttonText}
                </button>
            </div>
        </Form>
    );
}
