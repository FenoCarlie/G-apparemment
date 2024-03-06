function Appartement() {
    return (
        <>
            <div className="p-6 flex">
                <div className="bg-[#5c5b5b] w-[70%] rounded-xl">
                    <header className="flex items-center justify-between flex-wrap p-4">
                        <div className="flex items-center flex-shrink-0 mr-6">
                            <span className="font-semibold text-xl tracking-tight">
                                Table Appartement
                            </span>
                        </div>

                        <div className="text-sm lg:flex-grow">
                            <div className="rounded-lg bg-gray-200 p-5">
                                <div className="flex">
                                    <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5"></div>
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
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}

export default Appartement;
