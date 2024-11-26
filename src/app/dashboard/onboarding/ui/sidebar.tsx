export default function Sidebar({
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
                                href="/dashboard/onboarding/personal"
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
                            <a
                                href="/dashboard/onboarding/background"
                                className="flex items-center font-medium w-full"
                            >
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
                                <span className="p-1 w-8 h-8 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">
                                    <svg
                                        fill="#000000"
                                        height="800px"
                                        width="800px"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 330 330"
                                    >
                                        <g id="XMLID_509_">
                                            <path
                                                id="XMLID_510_"
                                                d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85   S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15   s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25   C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"
                                            />
                                        </g>
                                    </svg>
                                </span>
                                <div className="block">
                                    <h4 className="text-lg  text-gray-900">
                                        Step 3
                                    </h4>
                                    <span className="text-sm">Matching</span>
                                </div>
                            </a>
                        </li>
                        <li className="relative flex-1 ">
                            <a className="flex items-center font-medium w-full  ">
                                <span className="p-1 w-8 h-8 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">
                                    <svg
                                        fill="#000000"
                                        height="800px"
                                        width="800px"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 330 330"
                                    >
                                        <g id="XMLID_509_">
                                            <path
                                                id="XMLID_510_"
                                                d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85   S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15   s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25   C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"
                                            />
                                        </g>
                                    </svg>
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
