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
const BillingForm = ({setSelectedCategory}) => {

  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [bill,setBill] = useState("");
  const [month,setMonth] = useState("");

  const handleSelectedCompanyChange = (e) =>{
      const optionId = Number(e.target.value);
      const selectedOption = companies.find(company => company.id === optionId );
      console.log(selectedOption);
      setSelectedCategory(selectedOption.name.toLocaleLowerCase())
    setSelectedCompany(selectedOption);
 
  }

 const handleChange = (e) =>{
  const {name,value} = e.target;
  console.log(name);
  
  if(name === "bill"){
    const billing = Number(value);
    setBill(billing);
  setSelectedCategory(billing);
  }
  if(name === "month"){
    const currentMonth = parseFloat(value);    
    setMonth(currentMonth);
    setSelectedCategory(currentMonth);
  }
  
 }

  return (
    <div className='w-full flex items-center lg:justify-center flex-wrap gap-2 mt-4'>
     
        <select 
        value={selectedCompany.id}
        onChange={handleSelectedCompanyChange}
        className=" field-sizing-content border border-gray-300 py-1 px-2 rounded"
        >
        {
          companies.map(company =>(
            <option key={company.id} value={company.id}>{company.name}</option>
          ))
        }
        </select>
        <input type="Number" name="bill" placeholder='Enter bill'
        value={bill}
        onChange={handleChange}
        className="field-sizing-content  border border-gray-300 py-1 px-2 rounded"
         />
        <input type="Number" placeholder='rate'
        value={selectedCompany.rate}
        readOnly
        className="field-sizing-content border bg-gray-200 border-gray-300 py-1 px-2 rounded"
         />

        <input type="Number" name='month' value={month} onChange={handleChange} placeholder='Enter Month'
        className="field-sizing-content  border border-gray-300 py-1 px-2 rounded"
         />
  
      </div>
     
  )
}

export default BillingForm
