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
    return (
        <section className="w-full px-4">
            <div className="grid md:grid-cols-12 gap-5 p-4 m-2">
                <aside className="md:col-span-3 md:pt-0 p-2">
                    <ol className=" overflow-hidden space-y-8">
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                            <a
                                href="/dashboard/1"
                                className="flex items-center font-medium w-full"
                            >
                                <span className="w-8 h-8 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                                    <svg
                                        className="w-5 h-5 stroke-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7"
                                            stroke="stroke-current"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="my-path"
                                        ></path>
                                    </svg>
                                </span>
                                <div className="block">
                                    <h4 className="text-lg  text-indigo-600">
                                        Step 1
                                    </h4>
                                    <span className="text-sm">
                                        Submit Personal Information
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                            <a className="flex items-center font-medium w-full  ">
                                <span className="w-8 h-8 bg-indigo-50  border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
                                    2
                                </span>
                                <div className="block">
                                    <h4 className="text-lg  text-indigo-600">
                                        Step 2
                                    </h4>
                                    <span className="text-sm">
                                        Await Background Check
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                            <a className="flex items-center font-medium w-full  ">
                                <span className="w-8 h-8 bg-indigo-50  border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
                                    2
                                </span>
                                <div className="block">
                                    <h4 className="text-lg  text-indigo-600">
                                        Step 3
                                    </h4>
                                    <span className="text-sm">Matching</span>
                                </div>
                            </a>
                        </li>
                        <li className="relative flex-1 ">
                            <a className="flex items-center font-medium w-full  ">
                                <span className="w-8 h-8 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">
                                    4
                                </span>
                                <div className="block">
                                    <h4 className="text-lg  text-gray-900">
                                        Step 4
                                    </h4>
                                    <span className="text-sm">Placement</span>
                                </div>
                            </a>
                        </li>
                    </ol>
                </aside>
                <main className="md:col-span-9 p-4">{children}</main>
            </div>
        </section>
    );
}
