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
                        <div className="container past-activity">
                            <div>
                                <div
                                    className="day mt-12"
                                    x-show="i !== 3 &amp;&amp; i !== 5"
                                >
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">1</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-500 dark:text-gray-400">
                                        No activity reported.
                                    </div>
                                </div>
                                <div className="day mt-12" x-show="i === 3">
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">1</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-700 dark:text-gray-300">
                                        <div className="text-blue-700 dark:text-blue-400 text-xl font-semibold">
                                            Criminal history
                                        </div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Completed
                                            </strong>{" "}
                                            - The scheduled check has been
                                            completed.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 11:07 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                In progress
                                            </strong>{" "}
                                            - Scheduled check is currently in
                                            progress. We will provide updates as
                                            necessary.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 06:00 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Scheduled
                                            </strong>{" "}
                                            - No issue is expected, however if
                                            you notice that lookups are failing
                                            please check your provider.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 05:33 UTC
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="day mt-12" x-show="i === 5">
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">1</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-700 dark:text-gray-300">
                                        <div className="text-red-600 dark:text-red-400 text-xl font-semibold">
                                            Education verification
                                        </div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Resolved
                                            </strong>{" "}
                                            - The scheduled check has been
                                            completed.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 5, 16:01 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Investigating
                                            </strong>{" "}
                                            - We are investigating an issue that
                                            is issueing some customers in
                                            Europe. We will provide more details
                                            within the next hour.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 5, 14:00 UTC
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="day mt-12"
                                    x-show="i !== 3 &amp;&amp; i !== 5"
                                >
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">2</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-500 dark:text-gray-400">
                                        No activity reported.
                                    </div>
                                </div>
                                <div className="day mt-12" x-show="i === 3">
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">2</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-700 dark:text-gray-300">
                                        <div className="text-blue-700 dark:text-blue-400 text-xl font-semibold">
                                            Driving records
                                        </div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Completed
                                            </strong>{" "}
                                            - The scheduled check has been
                                            completed.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 11:07 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                In progress
                                            </strong>{" "}
                                            - Scheduled check is currently in
                                            progress. We will provide updates as
                                            necessary.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 06:00 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Scheduled
                                            </strong>{" "}
                                            - No issue is expected, however if
                                            you notice that lookups are failing
                                            please check your provider.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 05:33 UTC
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="day mt-12" x-show="i === 5">
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">2</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-700 dark:text-gray-300">
                                        <div className="text-red-600 dark:text-red-400 text-xl font-semibold">
                                            Credit history
                                        </div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Resolved
                                            </strong>{" "}
                                            - The scheduled check has been
                                            completed.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 5, 16:01 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Investigating
                                            </strong>{" "}
                                            - We are investigating an issue that
                                            is issueing some customers in
                                            Europe. We will provide more details
                                            within the next hour.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 5, 14:00 UTC
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="day mt-12"
                                    x-show="i !== 3 &amp;&amp; i !== 5"
                                >
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">3</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-500 dark:text-gray-400">
                                        No activity reported.
                                    </div>
                                </div>
                                <div className="day mt-12" x-show="i === 3">
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">3</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-700 dark:text-gray-300">
                                        <div className="text-blue-700 dark:text-blue-400 text-xl font-semibold">
                                            Employment verification
                                        </div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Completed
                                            </strong>{" "}
                                            - The scheduled check has been
                                            completed.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 11:07 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                In progress
                                            </strong>{" "}
                                            - Scheduled check is currently in
                                            progress. We will provide updates as
                                            necessary.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 06:00 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Scheduled
                                            </strong>{" "}
                                            - No issue is expected, however if
                                            you notice that lookups are failing
                                            please check your provider.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 3, 05:33 UTC
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="day mt-12" x-show="i === 5">
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">3</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-700 dark:text-gray-300">
                                        <div className="text-red-600 dark:text-red-400 text-xl font-semibold">
                                            Reference checks
                                        </div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Resolved
                                            </strong>{" "}
                                            - The scheduled check has been
                                            completed.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 5, 16:01 UTC
                                        </div>
                                        <div></div>
                                        <div className="mt-3">
                                            <strong className="text-gray-900 dark:text-gray-300">
                                                Investigating
                                            </strong>{" "}
                                            - We are investigating an issue that
                                            is issueing some customers in
                                            Europe. We will provide more details
                                            within the next hour.
                                        </div>
                                        <div className="text-gray-500">
                                            Aug 5, 14:00 UTC
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="day mt-12"
                                    x-show="i !== 3 &amp;&amp; i !== 5"
                                >
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">4</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-500 dark:text-gray-400">
                                        No activity reported.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="day mt-12"
                                    x-show="i !== 3 &amp;&amp; i !== 5"
                                >
                                    <h4 className="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300">
                                        Aug <span x-text="i">5</span>, 2020
                                    </h4>
                                    <div className="activity text-gray-500 dark:text-gray-400">
                                        No activity reported.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </Navigation>
    );
}
