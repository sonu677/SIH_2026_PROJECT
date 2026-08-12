import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Farmer",
    email: "farmer@example.com",
    phone: "",
    location: "",
    farmSize: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-green-700">
          👤 My Profile
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Manage your personal and farm information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md space-y-5"
        >
          <div>
            <label className="block font-medium mb-2">
              Name
            </label>

            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              type="email"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Phone
            </label>

            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              type="tel"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Farm Location
            </label>

            <input
              name="location"
              value={user.location}
              onChange={handleChange}
              placeholder="Village / City"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Farm Size
            </label>

            <input
              name="farmSize"
              value={user.farmSize}
              onChange={handleChange}
              placeholder="e.g. 5 acres"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Save Profile
          </button>
        </form>

      </div>
    </div>
  );
};

export default Profile;