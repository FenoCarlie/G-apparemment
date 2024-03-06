import React from "react";

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

                        <div className="text-sm lg:flex-grow relative">
                            <input
                                id="search"
                                name="search"
                                type="text"
                                className="focus:border-blue-700 transition-colors focus:outline-none bg-inherit w-full"
                            />
                            <label
                                htmlFor="search"
                                className="absolute left-0 top-1 cursor-text text-xs text-gray-600 transition-all pointer-events-none"
                            >
                                Name
                            </label>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}

export default Appartement;
