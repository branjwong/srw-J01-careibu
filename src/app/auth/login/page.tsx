import Image from "next/image";

import LoginForm from "./ui/login-form";

export default function Login() {
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
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <LoginForm />
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?{" "}
                    <a
                        href="/signup"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Click to register.
                    </a>
                </p>
            </div>
        </div>
    );
}
