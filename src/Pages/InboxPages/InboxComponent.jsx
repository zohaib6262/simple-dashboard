import React from "react";
import Input from "../Header/Input";
import {
  Trash3,
  ExclamationCircle,
  ArrowDownSquare,
  Star,
  StarFill,
} from "react-bootstrap-icons/dist";
import {
  Delete,
  Download,
  Error,
  InboxComponentTable,
} from "./InboxComponentIcons";
export default function InboxComponent() {
  return (
    <div className="flex flex-col ml-4 bg-white my-4 rounded-lg w-9/12">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="flex justify-between mx-2 mb-8">
              <Input className="columns-4" />
              <div className="flex gap-4 bg-[#D5D5D5] mt-3 px-3 py-3 rounded">
                <Download />
                <Error />
                <Delete />
              </div>
            </div>

            {/* Table Content */}
            <table className="min-w-full text-center text-sm font-light">
              <tbody>
                {InboxComponentTable.map((item) => {
                  return (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="mt-5 px-2 font-medium">
                        <input type="checkbox" />
                      </td>
                      <td className="py-2 px-2">{item.star}</td>
                      <td className="py-2  contain-inline-size px-1">
                        {item.label}
                      </td>
                      <span className="py-2 ">{item.button}</span>
                      <td>
                        <p>{item.paragraph}</p>
                      </td>
                      <td className="px-2">{item.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
