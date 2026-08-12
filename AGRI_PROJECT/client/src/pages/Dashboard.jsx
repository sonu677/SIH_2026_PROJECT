import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const cards = [
    {
      title: "Crop Recommendation",
      value: "🌾",
      description: "Get suitable crop suggestions",
    },
    {
      title: "Disease Detection",
      value: "🦠",
      description: "Analyze crop health",
    },
    {
      title: "Weather",
      value: "28°C",
      description: "Current farming conditions",
    },
    {
      title: "Market Prices",
      value: "₹",
      description: "Latest crop prices",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to AGRI 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your farming activities from one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white p-6 rounded-2xl shadow-sm border"
            >
              <div className="text-4xl mb-4">
                {card.value}
              </div>

              <h2 className="font-bold text-lg">
                {card.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {card.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-8 bg-white rounded-2xl p-8 border">
          <h2 className="text-xl font-bold mb-4">
            Farming Overview
          </h2>

          <p className="text-gray-500">
            Your personalized farming insights will appear here
            once your farm data is connected.
          </p>
        </div>

      </main>

    </div>
  );
};

export default Dashboard;