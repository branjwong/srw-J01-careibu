import Navigation from "../ui/navigation";

export default function Dashboard() {
    return (
        <Navigation>
            <main className="md:col-span-9 p-4">
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Dashboard
                        </h1>
                    </div>
                </header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {/* Your content */}
                </div>
            </main>
        </Navigation>
    );
}