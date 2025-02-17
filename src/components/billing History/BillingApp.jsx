import React from 'react'
import BillingForm from './BillingForm'
import Navbar from '../Navbar'
import Footer from '../Footer'
import BillingList from './BillingList';
    const data = [
      { id: 1, name: "name1", bill: 25, rate: 0.39, lastMonth: 10.22, currentMonth: 11, profit: +1.95 },
      { id: 2, name: "name2", bill: 28, rate: 0.45, lastMonth: 12.50, currentMonth: 9.80, profit: -1.20 },
      { id: 3, name: "name3", bill: 24, rate: 0.41, lastMonth: 9.88, currentMonth: 10, profit: +2.10 },
      { id: 4, name: "name4", bill: 26, rate: 0.38, lastMonth: 11.90, currentMonth: 9.55, profit: -1.75 },
      { id: 5, name: "name5", bill: 22, rate: 0.40, lastMonth: 9.45, currentMonth: 12, profit: +2.50 },
      { id: 6, name: "name6", bill: 27, rate: 0.43, lastMonth: 11.30, currentMonth: 9.70, profit: -1.50 },
      { id: 7, name: "name7", bill: 23, rate: 0.42, lastMonth: 9.66, currentMonth: 12, profit: +2.34 },
      { id: 8, name: "name8", bill: 29, rate: 0.47, lastMonth: 12.75, currentMonth: 9.85, profit: -1.80 },
      { id: 9, name: "name9", bill: 21, rate: 0.37, lastMonth: 9.10, currentMonth: 13, profit: +2.80 },
      { id: 10, name: "name10", bill: 30, rate: 0.50, lastMonth: 13.00, currentMonth: 9.60, profit: -2.00 },
    ];

const BillingApp = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className='py-10 w-full mx-4 lg:max-w-5xl lg:mx-auto'>
        <div className='w-full mb-4'>
            <h1 className='text-2xl font-bold mb-4'>Billing History</h1>
            <input type="text" placeholder='Search Billing'
            className='w-[90%] lg:w-full border border-gray-400 py-2 px-3 rounded' />
        </div>
      <BillingForm />
     <BillingList data={data} />
      </div>
    
      <Footer />
    </div>
  )
}

export default BillingApp
