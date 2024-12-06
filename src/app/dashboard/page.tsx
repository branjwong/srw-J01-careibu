import {
    BriefcaseIcon,
    CalendarIcon,
    ChevronDownIcon,
    MapPinIcon,
    PaperClipIcon,
    PencilIcon,
    MagnifyingGlassCircleIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import Navigation from "./ui/navigation";

export default function DashboardHome() {
    return (
        <Navigation>
            <main className="md:col-span-9 p-4">
                <div className="m-2 lg:flex lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Volunteer
                        </h2>
                        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <BriefcaseIcon
                                    aria-hidden="true"
                                    className="mr-1.5 size-5 shrink-0 text-gray-400"
                                />
                                20 hr
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <MapPinIcon
                                    aria-hidden="true"
                                    className="mr-1.5 size-5 shrink-0 text-gray-400"
                                />
                                Amsterdam
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <CalendarIcon
                                    aria-hidden="true"
                                    className="mr-1.5 size-5 shrink-0 text-gray-400"
                                />
                                Closing on January 9, 2025
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex lg:ml-4 lg:mt-0">
                        <span className="hidden sm:block">
                            <a href="/dashboard/onboarding/personal">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    <PencilIcon
                                        aria-hidden="true"
                                        className="-ml-0.5 mr-1.5 size-5 text-gray-400"
                                    />
                                    Edit
                                </button>
                            </a>
                        </span>

                        <span className="sm:ml-3">
                            <a href="/dashboard/onboarding/background">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <MagnifyingGlassCircleIcon
                                        aria-hidden="true"
                                        className="-ml-0.5 mr-1.5 size-5"
                                    />
                                    View
                                </button>
                            </a>
                        </span>

                        {/* Dropdown */}
                        <Menu as="div" className="relative ml-3 sm:hidden">
                            <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                                More
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="-mr-1 ml-1.5 size-5 text-gray-400"
                                />
                            </MenuButton>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                    >
                                        Edit
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                    >
                                        View
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>

                <br></br>

                <div className="m-2">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base/7 font-semibold text-gray-900">
                            Applicant Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
                            Personal details and application.
                        </p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Brandon Wong
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">
                                    Application for
                                </dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Volunteer
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    branjwong@hey.com
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">
                                    Salary expectation
                                </dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    None
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">
                                    About
                                </dt>
                                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Fugiat ipsum ipsum deserunt culpa aute sint
                                    do nostrud anim incididunt cillum culpa
                                    consequat. Excepteur qui ipsum aliquip
                                    consequat sint. Sit id mollit nulla mollit
                                    nostrud in ea officia proident. Irure
                                    nostrud pariatur mollit ad adipisicing
                                    reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm/6 font-medium text-gray-900">
                                    Attachments
                                </dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul
                                        role="list"
                                        className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                    >
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-gray-400"
                                                />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        resume.pdf
                                                    </span>
                                                    <span className="shrink-0 text-gray-400">
                                                        2.4mb
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-4 shrink-0">
                                                <a
                                                    href="#"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-gray-400"
                                                />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        coverletter.pdf
                                                    </span>
                                                    <span className="shrink-0 text-gray-400">
                                                        4.5mb
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-4 shrink-0">
                                                <a
                                                    href="#"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </main>
        </Navigation>
    );
}
