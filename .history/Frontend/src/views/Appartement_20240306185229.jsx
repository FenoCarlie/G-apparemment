import { CiSearch } from "react-icons/ci";

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
                                    value="Search"
                                    className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                                />
                            </div>
                            <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height="24px"
                                    width="24px"
                                >
                                    <g
                                        stroke-width="0"
                                        id="SVGRepo_bgCarrier"
                                    ></g>
                                    <g
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        id="SVGRepo_tracerCarrier"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <g id="Interface / Download">
                                            {" "}
                                            <path
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="#f1f1f1"
                                                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                                                id="Vector"
                                            ></path>{" "}
                                        </g>{" "}
                                    </g>
                                </svg>
                                Download
                                <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                                    Download
                                </div>
                            </button>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}

export default Appartement;
