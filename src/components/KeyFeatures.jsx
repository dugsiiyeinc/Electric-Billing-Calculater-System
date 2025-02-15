import React from 'react'
import { FaBolt, FaChartLine, FaMoneyBillWave } from 'react-icons/fa'

const KeyFeatures = () => {
    const keyFeaturesData = [
        {
            id:1,
            title: "Usage Calculation",
            description :"Accurately calculate electricity usage based on consumption patterns.",
            icon: <FaBolt className="w-12 h-12 text-yellow-500" />,
        },
        {
            id:2,
             title:"Consumption Tracking",
            description:"Monitor and visualize energy consumption trends over time.",
            icon:<FaChartLine className="w-12 h-12 text-indigo-500" />
        },
        {
            id:3,
            title:"Cost Estimation",
            description:"Estimate monthly bills based on current usage and electricity rates.",
            icon:<FaMoneyBillWave className="w-12 h-12 text-green-500" />
        }

    ]

  return (
    <div className="mt-16">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Key Features</h2>
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
     {
       keyFeaturesData.map(keyFeature =>(
           <div key={keyFeature.id} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
           {keyFeature.icon}
           <h3 className="mt-4 text-xl font-semibold text-gray-800">{keyFeature.title}</h3>
           <p className="mt-2 text-gray-600 text-center">{keyFeature.description}</p>
         </div>
       ))
     }
    </div>
  </div>

  )
}

export default KeyFeatures
