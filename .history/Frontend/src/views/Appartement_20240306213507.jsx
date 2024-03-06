import { CiSearch } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";

function Appartement() {
    return (
        <>
            <div className="p-6 flex">
                <div className="bg-[#ffffff] w-[70%] rounded-xl">
                    <header className="mt-6 flex items-center justify-between flex-wrap p-4">
                        <div className="flex items-center flex-shrink-0 mr-6">
                            <span className="font-semibold text-xl tracking-tight">
                                Table Appartement
                            </span>
                        </div>

                        <div className="text-sm lg:flex-grow flex justify-end">
                            <div className="flex">
                                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-[#dbdbdb] p-5">
                                    <CiSearch
                                        className="pointer-events-none absolute fill-gray-500 transition"
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                    />
                                </div>
                                <input
                                    type="text"
                                    className="w-full max-w-[160px] bg-[#f8f8f8] pl-2 text-base font-semibold outline-0"
                                    placeholder=""
                                    id=""
                                />
                                <input
                                    type="button"
                                    value="recherche"
                                    className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                                />
                            </div>
                            <button
                                data-modal-target="default-modal"
                                data-modal-toggle="default-modal"
                                type="button"
                                className="ml-5 cursor-pointer group relative items-center flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-2xl hover:bg-opacity-70 transition font-semibold shadow-md"
                            >
                                <MdAddHomeWork
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                    }}
                                />
                                <span>Nouvelle Appartement</span>
                            </button>
                        </div>
                    </header>
                    {/*  LIST APPARTEMENT */}
                    <div className="mt-6">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-sm text-gray-700 uppercase bg-[#dfdfdf]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            number of apartment
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            design
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            rent
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Apple MacBook Pro 17
                                        </th>
                                        <td className="px-6 py-4">1</td>
                                        <td className="px-6 py-4">$2999</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="h-2 bg-[#f3f3f3]"></div>
                            <div className="flex items-center justify-end flex-wrap mt-3 py-4 px-6">
                                <div className="flex items-center flex-shrink-0 mr-6">
                                    Page 1 of 10
                                </div>
                                <div className="text-sm lg:flex-grow flex justify-end">
                                    <button className="mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Prev
                                    </button>
                                    <button className="mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="default-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Terms of Service
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="default-modal"
                                >
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className="p-4 md:p-5 space-y-4">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the
                                    European Union enacts new consumer privacy
                                    laws for its citizens, companies around the
                                    world are updating their terms of service
                                    agreements to comply.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection
                                    Regulation (G.D.P.R.) goes into effect on
                                    May 25 and is meant to ensure a common set
                                    of data rights in the European Union. It
                                    requires organizations to notify users as
                                    soon as possible of high-risk data breaches
                                    that could personally affect them.
                                </p>
                            </div>

                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="default-modal"
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    I accept
                                </button>
                                <button
                                    data-modal-hide="default-modal"
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appartement;
