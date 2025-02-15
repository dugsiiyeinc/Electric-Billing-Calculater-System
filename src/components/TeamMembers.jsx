// TeamSection.jsx
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const TeamMembers = () => {
  const teamMembersData = [
    {
      name: "Faarax Abdullahi",
      role: "Frontend Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shiine dev",
      role: "Frontend Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="mt-12 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembersData.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md p-6 w-full lg:w-72 text-center"
          >
            {member.imageUrl ? (
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-center object-cover"
              />
            ) : (
              <FaUserCircle className="w-24 h-24 text-gray-400 mx-auto mb-4" />
            )}
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
