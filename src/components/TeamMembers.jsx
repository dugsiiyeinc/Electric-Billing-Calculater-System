import React from "react";
import { FaUserCircle, FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamMembers = () => {
  const teamMembersData = [
    {
      name: "Faarax Abdullahi",
      role: "Frontend Developer",
      imageUrl: "https://dhaqso-pay-website.vercel.app/assets/team/faarax.JPG",
      socialMedia: {
        facebook: "https://www.facebook.com/awrecabdullaahi.cali/",
        github: "https://github.com/faaraxcabdulaahi",
        twitter: "https://x.com/FaarahCabdulahi",
        linkedin: "https://www.linkedin.com/in/faarax-cabdulaahi-576500282/",
      },
    },
    {
      name: "Shiine dev",
      role: "Frontend Developer",
      imageUrl: "https://dhaqso-pay-website.vercel.app/assets/team/shiine.jpg",
      socialMedia: {
        facebook: "https://www.facebook.com/abdihakin.adan.56",
        github: "https://github.com/shiinedev",
        twitter: "https://x.com/shiinedev",
        linkedin: "https://linkedin.com/in/shiinedev",
      },
    },
  ];

  return (
    <div className="mt-16 py-16 ">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembersData.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 w-full sm:w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-indigo-500 border-2 border-transparent"
          >
            <div className="relative block">
              {member.imageUrl ? (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="rounded-full mx-auto mb-6 object-cover w-32 h-32 border-4 border-indigo-600 hover:border-indigo-700 transition-all duration-300"
                />
              ) : (
                <FaUserCircle className="w-32 h-32 text-indigo-600 mx-auto mb-6" />
              )}
            </div>
            <h3 className="text-2xl text-center font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-gray-600 text-center text-lg mb-6">{member.role}</p>
            <div className="flex justify-center  space-x-6">
              {member.socialMedia.facebook && (
                <a
                  href={member.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-all duration-300"
                >
                  <FaFacebook className="w-7 h-7" />
                </a>
              )}
              {member.socialMedia.github && (
                <a
                  href={member.socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-all duration-300"
                >
                  <FaGithub className="w-7 h-7" />
                </a>
              )}
              {member.socialMedia.twitter && (
                <a
                  href={member.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-all duration-300"
                >
                  <FaTwitter className="w-7 h-7" />
                </a>
              )}
              {member.socialMedia.linkedin && (
                <a
                  href={member.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-all duration-300"
                >
                  <FaLinkedin className="w-7 h-7" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
