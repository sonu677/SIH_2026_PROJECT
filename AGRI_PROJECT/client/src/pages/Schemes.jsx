const Schemes = () => {

  const schemes = [
    {
      title: "PM-KISAN",
      description:
        "Financial support scheme for eligible farmer families.",
      category: "Financial Support",
    },
    {
      title: "Pradhan Mantri Fasal Bima Yojana",
      description:
        "Crop insurance support against various crop-related risks.",
      category: "Crop Insurance",
    },
    {
      title: "Soil Health Card",
      description:
        "Provides information about soil nutrients and recommended fertilizers.",
      category: "Soil Management",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-green-700">
          🏛️ Government Schemes
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Explore agriculture-related government schemes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {schemes.map((scheme) => (
            <div
              key={scheme.title}
              className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
            >

              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                {scheme.category}
              </span>

              <h2 className="text-xl font-bold mt-5">
                {scheme.title}
              </h2>

              <p className="text-gray-500 mt-3 leading-relaxed">
                {scheme.description}
              </p>

              <button className="mt-5 text-green-600 font-semibold hover:text-green-800">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Schemes;