import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Homeowner",
      comment:
        "This app has completely transformed how I manage my electricity usage. It's so easy to use and has helped me save money every month!",
      image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Smith Row",
      role: "Small Business Owner",
      comment:
        "The real-time tracking feature is a game-changer. I can now monitor my energy consumption and make informed decisions to reduce costs.",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Johnson Gray",
      role: "Environmental Advocate",
      comment:
        "I love how this app promotes energy efficiency. It's not just about saving money—it's about saving the planet too!",
      image:
        "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 px-6" id="testimonials">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <header className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied users who have transformed their energy
            management experience.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out
                ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""} // Span 2 on md, revert to 1 on lg
              `}
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="size-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mb-4">{testimonial.role}</p>
              <p className="text-gray-700 italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;