import React from 'react'

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
    <div>
      
    </div>
  )
}

export default KeyFeatures
