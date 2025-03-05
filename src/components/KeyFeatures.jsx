import React from 'react';
import { FaBolt, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';

const KeyFeatures = () => {
  const keyFeaturesData = [
    {
      id: 1,
      title: "Usage Calculation",
      description: "Accurately calculate electricity usage based on consumption patterns.",
      icon: <FaBolt className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 2,
      title: "Consumption Tracking",
      description: "Monitor and visualize energy consumption trends over time.",
      icon: <FaChartLine className="w-16 h-16 text-indigo-500" />,
    },
    {
      id: 3,
      title: "Cost Estimation",
      description: "Estimate monthly bills based on current usage and electricity rates.",
      icon: <FaMoneyBillWave className="w-16 h-16 text-green-500" />,
    },
  ];

  return (
    <div className="mt-16 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900">Key Features</h2>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {keyFeaturesData.map((keyFeature) => (
          <div
            key={keyFeature.id}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-indigo-100 p-6 rounded-full mb-6">
              {keyFeature.icon}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">{keyFeature.title}</h3>
            <p className="mt-3 text-gray-600 text-center">{keyFeature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
