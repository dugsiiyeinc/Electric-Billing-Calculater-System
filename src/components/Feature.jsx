import React from "react";

const Features = () => {
  const features = [
    {
      icon: "📊", 
      title: "Real-Time Usage Tracking",
      description:
        "Monitor your electricity consumption in real-time with detailed insights and analytics.",
    },
    {
      icon: "🧮", 
      title: "Easy Bill Calculation",
      description:
        "Calculate your electricity bills effortlessly with our intuitive calculator.",
    },
    {
      icon: "📈", 
      title: "Usage Trends & Reports",
      description:
        "Get monthly usage trends and detailed reports to help you save energy.",
    },
    {
      icon: "🔌", 
      title: "Device-Specific Insights",
      description:
        "Track energy usage by individual devices and optimize your consumption.",
    },
  ];


  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32 px-6" id="features">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <header className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the tools and features that make managing your electricity
            usage simple and efficient.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;