import React, { useState } from 'react'

const companies = [
  {
   id:1,
   name:"Beco",
   rate:0.42
  },
  {
    id:2,
    name: "Mogadishu power",
    rate:0.46
   },
   {
    id:3,
    name: "Blue Sky",
    rate:0.50
   },
  
];
const BillingForm = () => {

  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const handleChange = (e) =>{
      const optionId = Number(e.target.value);
      const selectedOption = companies.find(company => company.id === optionId );
      console.log(selectedOption);
      
    setSelectedCompany(selectedOption);
 
  }

 

  return (
    <div className='w-full flex items-center lg:justify-center flex-wrap gap-2 mt-4'>
     
        <select 
        value={selectedCompany.id}
        onChange={handleChange}
        className=" field-sizing-content border border-gray-300 py-1 px-2 rounded"
        >
        {
          companies.map(company =>(
            <option key={company.id} value={company.id}>{company.name}</option>
          ))
        }
        </select>
        <input type="Number" placeholder='Enter bill'
        className="field-sizing-content  border border-gray-300 py-1 px-2 rounded"
         />
        <input type="Number" placeholder='rate'
        value={selectedCompany.rate}
        readOnly
        className="field-sizing-content border bg-gray-200 border-gray-300 py-1 px-2 rounded"
         />

        <input type="Number" placeholder='Enter Month'
        className="field-sizing-content  border border-gray-300 py-1 px-2 rounded"
         />
  
      </div>
     
  )
}

export default BillingForm
