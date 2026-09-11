import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function MarketRecommendation() {
  const markets = [
    {
      name: "Pune Mandi",
      location: "Pune",
      price: 3000,
      gross: 12000,
      transport: 800,
      mandiCharges: 300,
      wastage: 400,
      net: 10500,
      recommended: true,
    },
    {
      name: "Nashik Mandi",
      location: "Nashik",
      price: 2875,
      gross: 11500,
      transport: 500,
      mandiCharges: 250,
      wastage: 250,
      net: 10500,
      recommended: false,
    },
    {
      name: "Mumbai Mandi",
      location: "Mumbai",
      price: 3125,
      gross: 12500,
      transport: 1500,
      mandiCharges: 350,
      wastage: 600,
      net: 10050,
      recommended: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Navbar />

        <main className="p-6 max-w-7xl mx-auto">

          {/* Page Header */}
          <div className="mb-8">

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>Dashboard</span>
              <span>›</span>
              <span className="text-green-600">
                Market Recommendation
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800">
              Smart Mandi Recommendation
            </h1>

            <p className="text-gray-500 mt-2">
              Find where you can earn the most after all costs.
            </p>

          </div>


          {/* Crop Information */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center">
                  <span className="text-4xl">
                    🍅
                  </span>
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Your Crop
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800">
                    Tomato
                  </h2>

                  <p className="text-sm text-gray-500">
                    4 Quintals • Pune
                  </p>

                </div>

              </div>


              <div className="flex gap-3">

                <div className="bg-green-50 px-5 py-3 rounded-xl">

                  <p className="text-xs text-gray-500">
                    Crop Grade
                  </p>

                  <p className="text-lg font-bold text-green-700">
                    Grade A
                  </p>

                </div>

                <div className="bg-blue-50 px-5 py-3 rounded-xl">

                  <p className="text-xs text-gray-500">
                    Quantity
                  </p>

                  <p className="text-lg font-bold text-blue-700">
                    4 Q
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Recommendation Banner */}
          <div className="bg-green-600 rounded-2xl p-6 text-white mb-6">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

              <div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏆</span>

                  <span className="font-semibold">
                    BEST OPTION
                  </span>
                </div>

                <h2 className="text-2xl font-bold">
                  Pune Mandi
                </h2>

                <p className="text-green-100 mt-1">
                  Highest expected net earnings after all costs
                </p>

              </div>


              <div className="md:text-right">

                <p className="text-green-100 text-sm">
                  Expected Net Earnings
                </p>

                <p className="text-4xl font-bold">
                  ₹10,500
                </p>

              </div>

            </div>

          </div>


          {/* Market Comparison */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            <div className="p-6 border-b border-gray-100">

              <h2 className="text-xl font-bold text-gray-800">
                Market Comparison
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                We compare the actual money you can take home.
              </p>

            </div>


            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-50">

                  <tr>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Market
                    </th>

                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                      Price/Q
                    </th>

                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                      Gross
                    </th>

                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                      Transport
                    </th>

                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                      Mandi Fees
                    </th>

                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                      Wastage
                    </th>

                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                      Net Earnings
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {markets.map((market) => (

                    <tr
                      key={market.name}
                      className={`border-t border-gray-100 ${
                        market.recommended
                          ? "bg-green-50"
                          : "bg-white"
                      }`}
                    >

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            🏪
                          </div>

                          <div>

                            <p className="font-semibold text-gray-800">
                              {market.name}
                            </p>

                            <p className="text-xs text-gray-500">
                              📍 {market.location}
                            </p>

                          </div>

                          {market.recommended && (
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                              BEST
                            </span>
                          )}

                        </div>

                      </td>


                      <td className="px-6 py-5 text-right font-medium">
                        ₹{market.price}
                      </td>


                      <td className="px-6 py-5 text-right">
                        ₹{market.gross.toLocaleString()}
                      </td>


                      <td className="px-6 py-5 text-right text-red-500">
                        -₹{market.transport.toLocaleString()}
                      </td>


                      <td className="px-6 py-5 text-right text-red-500">
                        -₹{market.mandiCharges.toLocaleString()}
                      </td>


                      <td className="px-6 py-5 text-right text-red-500">
                        -₹{market.wastage.toLocaleString()}
                      </td>


                      <td className="px-6 py-5 text-right">

                        <p className="text-lg font-bold text-green-700">
                          ₹{market.net.toLocaleString()}
                        </p>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">

              {markets.map((market) => (

                <div
                  key={market.name}
                  className={`rounded-xl p-5 border ${
                    market.recommended
                      ? "border-green-300 bg-green-50"
                      : "border-gray-200"
                  }`}
                >

                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="font-bold text-gray-800">
                        {market.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        📍 {market.location}
                      </p>

                    </div>

                    {market.recommended && (
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                        BEST
                      </span>
                    )}

                  </div>


                  <div className="grid grid-cols-2 gap-4 mt-5">

                    <div>
                      <p className="text-xs text-gray-500">
                        Price / Quintal
                      </p>

                      <p className="font-semibold">
                        ₹{market.price}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Gross Value
                      </p>

                      <p className="font-semibold">
                        ₹{market.gross.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Transport
                      </p>

                      <p className="font-semibold text-red-500">
                        -₹{market.transport}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Mandi Charges
                      </p>

                      <p className="font-semibold text-red-500">
                        -₹{market.mandiCharges}
                      </p>
                    </div>

                  </div>


                  <div className="border-t border-gray-200 mt-5 pt-4 flex justify-between">

                    <span className="font-semibold text-gray-600">
                      Net Earnings
                    </span>

                    <span className="font-bold text-xl text-green-700">
                      ₹{market.net.toLocaleString()}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Explanation */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-6">

            <h3 className="font-bold text-gray-800 mb-3">
              💡 Why Pune Mandi?
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              AgriLink doesn't simply choose the mandi with the
              highest selling price. It considers transportation,
              mandi charges and expected wastage to estimate your
              actual net earnings.
            </p>

          </div>


          {/* Action */}
          <div className="mt-6 flex justify-end">

            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
              Continue with Pune Mandi →
            </button>

          </div>

        </main>

      </div>

    </div>
  )
}

export default MarketRecommendation