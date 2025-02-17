import React from 'react'
import BillingForm from './BillingForm'
import BillingList from './BillingList'
import Navbar from '../Navbar'
import Footer from '../Footer'

const BillingApp = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className='py-10 mx-4'>
      <BillingForm />
    
      </div>
    
      <Footer />
    </div>
  )
}

export default BillingApp
