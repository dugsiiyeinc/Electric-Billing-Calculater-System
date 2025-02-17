import React from 'react'
import BillingItem from './BillingItem'

const BillingList = ({data}) => {
  return (
        <div className="w-full max-w-full mx-auto  mt-8">
          <div className="overflow-x-auto bg-white shadow rounded">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr className="text-left">
                  <th className="border border-gray-300 text-sm  font-semibold p-2">ID</th>
                  <th className="border border-gray-300 text-sm  font-semibold p-2">Name</th>
                  <th className="border border-gray-300 text-sm  font-semibold p-2">Bill</th>
                  <th className="border border-gray-300 text-sm  font-semibold p-2">Rate</th>
                  <th className="border border-gray-300 text-sm  font-semibold p-2">Last Month</th>
                  <th className="border border-gray-300 text-sm  font-semibold p-2">Current Month</th>
                  <th className="border border-gray-300 text-sm  font-semibold p-2">profit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <BillingItem key={row.id}  row={row}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default BillingList

