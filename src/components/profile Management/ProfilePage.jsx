import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "", // Add confirmPassword field
    profilePic: null, // Add profilePic field
  });
  const navigate = useNavigate();

  // Fetch the logged-in user's data from localStorage
  useEffect(() => {
    const onlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    if (onlineUser) {
      setProfile({
        username: onlineUser.username,
        email: onlineUser.email,
        phone: onlineUser.phone,
        password: onlineUser.password,
        confirmPassword: onlineUser.password, // Initialize confirmPassword
        profilePic: onlineUser.profilePic || null, // Initialize profilePic
      });
    } else {
      // If no user is logged in, redirect to the login page
      toast.error("Please log in to access your profile.");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setProfile((prev) => ({ ...prev, profilePic: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    // Validate the updated profile data
    if (
      !profile.username ||
      !profile.email ||
      !profile.phone ||
      !profile.password ||
      !profile.confirmPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (profile.password !== profile.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Update the user's data in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === profile.email ? { ...user, ...profile } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("onlineUser", JSON.stringify(profile));

    setIsEditing(false);
    toast.success("Profile updated successfully!");

    // Redirect to the homepage after saving
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Profile Management</h1>
        <div className="space-y-4">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center space-y-2">
            {profile.profilePic && (
              <img
                src={profile.profilePic}
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
            )}
            {isEditing && (
              <label className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none p-2 text-center">
                Upload New Profile Picture
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="mt-1 text-lg text-gray-900">{profile.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="mt-1 text-lg text-gray-900">{profile.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="mt-1 text-lg text-gray-900">{profile.phone}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="mt-1 text-lg text-gray-900">********</p>
            )}
          </div>

          {/* Confirm Password Field (Only in Edit Mode) */}
          {isEditing && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={profile.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          )}
        </div>

        {/* Save/Cancel or Edit Button */}
        <div className="mt-6 flex gap-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;