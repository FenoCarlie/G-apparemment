import { CiSearch } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";

function Appartement() {
    return (
        <>
            <div className="p-6 flex">
                <div className="bg-[#E6E6E6] w-[70%] rounded-xl">
                    <header className="flex items-center justify-between flex-wrap p-4">
                        <div className="flex items-center flex-shrink-0 mr-6">
                            <span className="font-semibold text-xl tracking-tight">
                                Table Appartement
                            </span>
                        </div>

                        <div className="text-sm lg:flex-grow flex justify-end">
                            <div className="flex">
                                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
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
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    The Sliding Mr. Bones (Next Stop,
                                    Pottersville)
                                </td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                            </tr>
                            <tr>
                                <td>Shining Star</td>
                                <td>Earth, Wind, and Fire</td>
                                <td>1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Appartement;
