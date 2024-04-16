import React from "react";
import Input from "../Header/Input";
import {
  Trash3,
  ExclamationCircle,
  ArrowDownSquare,
  Star,
  StarFill,
} from "react-bootstrap-icons/dist";
export default function Stared() {
  return (
    <div className="flex flex-col ml-4 bg-white my-4 rounded-lg w-9/12">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="flex justify-between mx-2 mt-5 mb-8">
              <Input className="columns-4" />
              <div className="flex">
                <button className="bg-sky-100 py-3 px-4 rounded-s-lg">
                  <ArrowDownSquare />
                </button>
                <button className="bg-sky-100 py-3 px-4">
                  <ExclamationCircle />
                </button>
                <button className="bg-sky-100 py-3 px-4 rounded-e-lg">
                  <Trash3 />
                </button>
              </div>
            </div>

            {/* Table Content */}
            <table className="min-w-full text-center text-sm font-light">
              <tbody>
                {/* First Row */}
                <tr className="border-b dark:border-neutral-500">
                  <td className="mt-5 px-2 font-medium">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-2">
                    <Star />
                  </td>
                  <td className="py-2 text-left contain-inline-size px-1">
                    Dianne Russel
                  </td>
                  <td className="py-2 text-left">
                    <button className="text-green-700 bg-green-200 flex items-center space-x-2 my-3 px-3 rounded-xl">
                      Payment
                    </button>
                  </td>
                  <td>Lorem Ipsum is simply dummy text of the printing</td>
                  <td className="px-2">8:38 AM</td>
                </tr>

                {/* Second ROw */}
                <tr className="border-b dark:border-neutral-500 my-2">
                  <td className=" py-2 font-medium">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-2 ">
                    <Star />
                  </td>
                  <td className="py-2 text-left">Leslie Alexander</td>
                  <td className="py-2 text-left">
                    <button className="text-sky-700 bg-sky-200 flex items-center space-x-2 my-3 px-3 rounded-xl">
                      Derivers
                    </button>
                  </td>
                  <td>When an unknown printer took a galley of type and</td>
                  <td className="px-2">8:13 AM</td>
                </tr>

                {/* Third Row */}
                <tr className="border-b dark:border-neutral-500 my-2">
                  <td className="py-2 font-medium">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-2">
                    <StarFill color="yellow" />
                  </td>
                  <td className="py-2 text-left">Savannah Nguyen</td>
                  <td className="py-2 text-left"></td>
                  <td>
                    It is a long established fact that a reader will be
                    distracted by
                  </td>
                  <td className="px-2">7:52 PM</td>
                </tr>

                {/* Fourth Row */}
                <tr className="border-b dark:border-neutral-500 my-2">
                  <td className="py-2 font-medium">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-2">
                    <Star />
                  </td>
                  <td className="py-2 text-left">Theresa Webb</td>
                  <td className="py-2 text-left">
                    <button className="text-orange-500 bg-orange-200 flex items-center space-x-2 my-3 px-3 rounded-xl">
                      Work
                    </button>
                  </td>
                  <td>Contrary to popular belief, Lorem Ipsum is not simply</td>
                  <td className="px-2">8:38 AM</td>
                </tr>

                {/* Fifth Row */}
                <tr className="border-b dark:border-neutral-500 my-2">
                  <td className="py-2 font-medium">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-2">
                    <Star />
                  </td>
                  <td className="py-2 text-left">Jenny Wilson</td>
                  <td className="py-2 text-left"></td>
                  <td>
                    First true generator on the Internet. It uses a dictionary
                    of over 200
                  </td>
                  <td className="px-2">8:38 AM</td>
                </tr>

                {/* Sixth Row */}
                <tr className="border-b dark:border-neutral-500 my-2">
                  <td className="py-2 font-medium">
                    <input type="checkbox" />
                  </td>
                  <td className="py-2 px-2">
                    <Star />
                  </td>
                  <td className="py-2 text-left">Brooklyn Simmons</td>
                  <td className="py-2 text-left"></td>
                  <td>Lorem Ipsum is simply dummy text of the printing</td>
                  <td className="px-2">8:38 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
