const MarketPrices = () => {

  const crops = [
    { crop: "Wheat", market: "Vadodara", price: "₹2,400 / quintal" },
    { crop: "Rice", market: "Ahmedabad", price: "₹3,100 / quintal" },
    { crop: "Cotton", market: "Rajkot", price: "₹7,200 / quintal" },
    { crop: "Maize", market: "Anand", price: "₹2,100 / quintal" },
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-green-700">
          💰 Market Prices
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Check crop prices from different markets.
        </p>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-green-100">
                <tr>
                  <th className="text-left px-6 py-4">
                    Crop
                  </th>

                  <th className="text-left px-6 py-4">
                    Market
                  </th>

                  <th className="text-left px-6 py-4">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody>

                {crops.map((item) => (
                  <tr
                    key={item.crop}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 font-medium">
                      {item.crop}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {item.market}
                    </td>

                    <td className="px-6 py-4 font-semibold text-green-700">
                      {item.price}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MarketPrices;