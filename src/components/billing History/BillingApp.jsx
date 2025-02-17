import React from 'react'
import BillingForm from './BillingForm'
import Navbar from '../Navbar'
import Footer from '../Footer'

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
    
      </div>
    
      <Footer />
    </div>
  )
}

export default BillingApp
