import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 md:py-30 lg:py-40 px-6" id="home">
      <div className="container mx-auto text-center">
        {/* Hero Content */}
        <header>
          <h1 className="text-4xl md:text-6xl font-bold lg:mb-8 mb-4">
            Simplify Your Electricity Bills
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-80">
            Calculate, track, and manage your electricity usage effortlessly.
          </p>
        </header>

        {/* CTA Buttons */}
        <section>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#calculator"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Calculate your electricity usage"
            >
              Calculate Now
            </a>
            <a
              href="#learn-more"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Learn more about managing electricity usage"
            >
              Learn More
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;