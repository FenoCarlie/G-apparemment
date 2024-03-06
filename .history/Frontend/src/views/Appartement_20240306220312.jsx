import { CiSearch } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Appartement() {
    return (
        <>
            <div className="p-6 flex">
                <div className="bg-[#ffffff] w-[65%] rounded-xl">
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
                                        <th scope="col">
                                            <MdDelete
                                                style={{
                                                    width: "24px",
                                                    height: "24px",
                                                    color: "red",
                                                }}
                                            />
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
                                        <td className="px-3 py-3">
                                            <button className="">
                                                <MdModeEdit
                                                    style={{
                                                        width: "24px",
                                                        height: "24px",
                                                    }}
                                                />
                                            </button>
                                        </td>
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
            </div>
        </>
    );
}

export default Appartement;
