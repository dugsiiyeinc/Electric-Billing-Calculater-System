import React from 'react';
import { FaBolt, FaChartLine, FaLeaf, FaMoneyBillWave } from 'react-icons/fa';

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      text: "Promote energy efficiency and sustainability",
      icon: <FaLeaf className="h-8 w-8 text-green-500" />,
    },
    {
      id: 2,
      text: "Reduce unnecessary expenses on electricity",
      icon: <FaMoneyBillWave className="h-8 w-8 text-green-500" />,
    },
    {
      id: 3,
      text: "Gain insights into energy consumption patterns",
      icon: <FaChartLine className="h-8 w-8 text-indigo-500" />,
    },
    {
      id: 4,
      text: "Make informed decisions about energy usage",
      icon: <FaBolt className="h-8 w-8 text-yellow-500" />,
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Benefits</h2>
      <div className="px-4 py-5 sm:px-6 sm:p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="flex items-center bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <span className="ml-4 text-lg text-gray-700 font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
