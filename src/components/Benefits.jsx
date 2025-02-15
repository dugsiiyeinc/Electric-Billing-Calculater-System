import React from 'react'
import { FaBolt, FaChartLine, FaLeaf, FaMoneyBillWave } from 'react-icons/fa'

const Benefits = () => {
    const benefitsDate = [
        {
            id:1,
            text:"Promote energy efficiency and sustainability",
            icon:<FaLeaf className="h-6 w-6 text-green-500" />
        },
        {
            id:2,
            text:"Reduce unnecessary expenses on electricity",
            icon:<FaMoneyBillWave className="h-6 w-6 text-green-500" />
        },
        {
            id:3,
            text:"Gain insights into energy consumption patterns",
            icon:<FaChartLine className="h-6 w-6 text-indigo-500" />
        },
        {
            id:4,
            text:"Make informed decisions about energy usage",
            icon:<FaBolt className="h-6 w-6 text-yellow-500" />
        },

    ]
  return (
       <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">Benefits</h2>
              <div className="mt-4 ">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 ">
                    {
                        benefitsDate.map(benefit =>(
                            <div key={benefit.id} className="flex items-center bg-white  p-6 rounded-lg shadow-md space-x-3">
                            {benefit.icon}
                            <span className="text-gray-700">{benefit.text}</span>
                          </div>
                        ))
                    }
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Benefits
