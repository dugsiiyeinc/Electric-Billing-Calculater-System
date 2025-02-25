import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative py-20 md:py-30 lg:py-40 px-6 text-white overflow-hidden"
      id="home"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDhwfHxjb21wdXRlcnxlbnwwfHx8fDE2NzE5NTMzMTg&ixlib=rb-1.2.1&q=80&w=1080)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-purple-800/90"></div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        {/* Hero Content */}
        <header>
          <h1 className="text-4xl md:text-6xl font-bold lg:mb-8 mb-4">
            Simplify Your Electricity Bills
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Calculate, track, and manage your electricity usage effortlessly with
            our intuitive tools and resources.
          </p>
        </header>

        {/* CTA Buttons */}
        <section>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/billing-calculater"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:bg-blue-100 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold"
              aria-label="Calculate your electricity usage"
            >
              Calculate Now
            </Link>
            <a
              href="#learn-more"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 font-semibold"
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