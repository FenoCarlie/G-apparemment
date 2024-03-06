import { CiSearch } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";

function Appartement() {
    return (
        <>
            <div className="p-6 flex">
                <div className="bg-[#ffffff] w-[70%] rounded-xl">
                    <header className="flex items-center justify-between flex-wrap p-4">
                        <div className="flex items-center flex-shrink-0 mr-6">
                            <span className="font-semibold text-xl tracking-tight">
                                Table Appartement
                            </span>
                        </div>

                        <div className="text-sm lg:flex-grow flex justify-end">
                            <div className="flex">
                                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-[#a0a0a0] p-5">
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
                                    className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                                    placeholder=""
                                    id=""
                                />
                                <input
                                    type="button"
                                    value="recherche"
                                    className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                                />
                            </div>
                            <button className="ml-5 cursor-pointer group relative items-center flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-2xl hover:bg-opacity-70 transition font-semibold shadow-md">
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
                                <thead className="text-xs text-gray-700 uppercase bg-white">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 rounded-s-lg"
                                        >
                                            number of apartment
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            design
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 rounded-e-lg"
                                        >
                                            rent
                                        </th>
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
                                    <tr className="bg-white">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Microsoft Surface Pro
                                        </th>
                                        <td className="px-6 py-4">1</td>
                                        <td className="px-6 py-4">$1999</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Magic Mouse 2
                                        </th>
                                        <td className="px-6 py-4">1</td>
                                        <td className="px-6 py-4">$99</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="font-semibold text-gray-900">
                                        <th
                                            scope="row"
                                            className="px-6 py-3 text-base"
                                        >
                                            Total
                                        </th>
                                        <td className="px-6 py-3">3</td>
                                        <td className="px-6 py-3">21,000</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appartement;
