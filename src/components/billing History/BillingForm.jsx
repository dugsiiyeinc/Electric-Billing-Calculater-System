import React from 'react'

const companies = [
  {
   id:1,
   name:"Beco",
   rate:0.42
  },
  {
    id:1,
    name: "Mogadishu power",
    rate:0.46
   },
   {
    id:1,
    name: "Blue Sky",
    rate:0.50
   },
  
];
const BillingForm = () => {

  return (
    <div className='flex items-center px-4 space-x-2 mt-4'>
      <div>
        <select 
        className="w-44 border border-gray-300 py-1 px-3 rounded"
        >
        {
          companies.map(company =>(
            <option key={company.id} value={company.name}>{company.name}</option>
          ))
        }
        </select>
      </div>
      <div>
        <input type="Number" placeholder='Enter bill'
        className="w-28 border border-gray-300 py-1 px-3 rounded"
         />
      </div>
      <div>
        <input type="Number" placeholder='rate'
        className="w-28 border border-gray-300 py-1 px-3 rounded"
         />
      </div>
    </div>
  )
}

export default BillingForm
