"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const baseNavigation = [
    { name: "Home", href: "/dashboard/home" },
    { name: "Onboarding", href: "/dashboard/onboarding" },
];

const userNavigation = [{ name: "Logout", href: "/api/auth/logout" }];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navigation({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const navigation = baseNavigation.map((page) => ({
        ...page,
        current: pathname.includes(page.href),
    }));

    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <Image
                                    alt="Your Company"
                                    src="https://careibu.com/wp-content/uploads/2021/08/careibu-siteicon.svg"
                                    className="size-8"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                "rounded-md px-3 py-2 text-sm font-medium"
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton
                                            data-testid="user-head"
                                            className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <Image
                                                alt=""
                                                src={user.imageUrl}
                                                className="size-8 rounded-full"
                                                width={200}
                                                height={200}
                                            />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a
                                                    data-testid={`user-nav-${item.name}`}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                >
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="block size-6 group-data-[open]:hidden"
                                />
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="hidden size-6 group-data-[open]:block"
                                />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? "page" : undefined}
                                className={classNames(
                                    item.current
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "block rounded-md px-3 py-2 text-base font-medium"
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="flex items-center px-5">
                            <div className="shrink-0">
                                <Image
                                    alt=""
                                    src={user.imageUrl}
                                    className="size-10 rounded-full"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="ml-3">
                                <div className="text-base/5 font-medium text-white">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    {user.email}
                                </div>
                            </div>
                            <button
                                type="button"
                                className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">
                                    View notifications
                                </span>
                                <BellIcon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </button>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
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
                                        <span className="text-sm">
                                            Matching
                                        </span>
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
                                        <span className="text-sm">
                                            Placement
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ol>
                    </aside>
                    <main className="md:col-span-9 p-4">{children}</main>
                </div>
            </section>
        </div>
    );
}
