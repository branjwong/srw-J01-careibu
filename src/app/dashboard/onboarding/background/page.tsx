import Navigation from "../../ui/navigation";
import Sidebar from "../ui/sidebar";

export default function Background() {
    return (
        <Navigation>
            <Sidebar>
                <div className="bg-white shadow">
                    <header>
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Await Background Check
                            </h1>
                        </div>
                    </header>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {/* Your content */}
                    </div>
                </div>
            </Sidebar>
        </Navigation>
    );
}
