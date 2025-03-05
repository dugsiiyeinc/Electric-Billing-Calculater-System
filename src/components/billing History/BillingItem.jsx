import React from "react";

const BillingItem = ({row}) => {
  return (
    <tr  className="even:bg-gray-100 text-center">
      <td className="border border-gray-300 text-sm  p-2">{row.id}</td>
      <td className="border border-gray-300 text-sm  p-2">{row.name}</td>
      <td className="border border-gray-300 text-sm  p-2">{row.bill}</td>
      <td className="border border-gray-300 text-sm  p-2">{row.rate}</td>
      <td className="border border-gray-300 text-sm  p-2">{row.lastMonth}</td>
      <td className="border border-gray-300 text-sm  p-2">
        {row.currentMonth}
      </td>
    </tr>
  );
};

export default BillingItem;
