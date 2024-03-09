import { CiSearch } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { GrClose } from "react-icons/gr";

import axios from "axios";
import { useEffect, useState } from "react";

function Appartement() {
    const [loading, setLoading] = useState(false);

    const [appartement, setAppartement] = useState({});
    const [loyer, setLoyer] = useState({});

    const [selectedAppartement, setSelectedAppartement] = useState(null);

    const handleAppartementClick = (appartement) => {
        setSelectedAppartement(appartement);
    };

    const idApp = () => {
        if (selectedAppartement) {
            console.log(selectedAppartement._id);
        }
    };

    const getAppartement = () => {
        setLoading(true);
        axios
            .get(`http://localhost:6009/api/appartements`)
            .then(({ data }) => {
                setLoading(false);
                setAppartement(data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const getLoyer = () => {
        setLoading(true);
        axios
            .get(`http://localhost:6009/api/loyers`)
            .then(({ data }) => {
                setLoading(false);
                setLoyer(data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getAppartement();
        getLoyer();
    }, []);

    const [field, setField] = useState(true);

    const openField = () => {
        setField(true);
    };
    const closeField = () => {
        setField(false);
    };

    return (
        <>
            <div className="pl-6 pt-6 flex justify-between">
                <div className="bg-[#ffffff] w-[65%] rounded-xl mr-5">
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
                                onClick={openField}
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
                                        <th scope="col" className="text-center">
                                            <button>
                                                <MdDelete
                                                    style={{
                                                        width: "24px",
                                                        height: "24px",
                                                        color: "#D3D3D3",
                                                        cursor: "default",
                                                    }}
                                                />
                                                {/* FF0000 */}
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {appartement && appartement.length > 0
                                        ? appartement.map((item, index) => (
                                              <tr
                                                  key={index}
                                                  className="bg-white"
                                                  onClick={() =>
                                                      handleAppartementClick(
                                                          item
                                                      )
                                                  }
                                              >
                                                  <th
                                                      scope="row"
                                                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                                  >
                                                      {item.numApp}
                                                  </th>
                                                  <td className="px-6 py-4">
                                                      {item.design}
                                                  </td>
                                                  <td className="px-6 py-4">
                                                      {item.loyer}
                                                  </td>
                                                  <td className="text-center">
                                                      <button
                                                          className="h-10 w-10 hover:bg-[#afafaf]"
                                                          onClick={idApp}
                                                      >
                                                          <MdModeEdit
                                                              style={{
                                                                  width: "24px",
                                                                  height: "24px",
                                                              }}
                                                          />
                                                      </button>
                                                  </td>
                                              </tr>
                                          ))
                                        : null}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="px-6 py-4">
                                            Loyer total: {loyer.totalLoyer}
                                        </td>
                                        <td className="px-6 py-4">
                                            Loyer minimal: {loyer.minLoyer}
                                        </td>
                                        <td className="px-6 py-4">
                                            Loyer maximal: {loyer.maxLoyer}
                                        </td>
                                    </tr>
                                </tfoot>
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
                    className={
                        field
                            ? "bg-[#ffffff] w-[30%] rounded-l-xl mt-4 ease-in-out duration-500"
                            : "top-[100%]"
                    }
                >
                    <div className={field ? "" : "hidden"}>
                        <div className="mt-6 flex items-center justify-between flex-wrap p-4">
                            <span className="font-semibold text-xl tracking-tight">
                                Add a new apartment
                            </span>
                            <button onClick={closeField}>
                                <GrClose />
                            </button>
                        </div>
                        <div className="px-4 ">
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="numApp"
                                >
                                    Number of apartment
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-[60%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="numApp"
                                    type="text"
                                    placeholder="number of apartment"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-[60%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appartement;
