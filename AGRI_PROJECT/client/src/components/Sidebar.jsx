import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "📊",
    },
    {
      name: "Crop Recommendation",
      path: "/crop-recommendation",
      icon: "🌾",
    },
    {
      name: "Disease Detection",
      path: "/disease-detection",
      icon: "🦠",
    },
    {
      name: "Weather",
      path: "/weather",
      icon: "🌦️",
    },
    {
      name: "Market Prices",
      path: "/market-prices",
      icon: "💰",
    },
    {
      name: "Government Schemes",
      path: "/schemes",
      icon: "🏛️",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "👤",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">

      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-4 mb-6">
        <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
          🌱
        </div>

        <div>
          <h2 className="font-bold text-lg text-green-700">
            AGRI
          </h2>

          <p className="text-xs text-gray-500">
            Farmer Portal
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>

      {/* Logout */}
      <button
        className="w-full mt-8 flex items-center gap-3 px-4 py-3
                   text-red-600 hover:bg-red-50 rounded-lg transition"
      >
        <span>🚪</span>
        <span>Logout</span>
      </button>

    </aside>
  );
};

export default Sidebar;