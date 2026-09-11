import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <Sidebar />


      {/* Main Area */}
      <div className="flex-1">

        <Navbar />


        <main className="p-6 max-w-7xl mx-auto">

          {/* Welcome */}
          <div className="mb-8">

            <h1 className="text-3xl font-bold text-gray-800">
              Good morning, Raj 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Here's what's happening with your farm today.
            </p>

          </div>


          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">


            {/* Earnings */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

              <p className="text-sm text-gray-500">
                Expected Earnings
              </p>

              <div className="flex justify-between items-center mt-2">

                <h2 className="text-2xl font-bold text-gray-800">
                  ₹10,500
                </h2>

                <span className="text-2xl">
                  💰
                </span>

              </div>

              <p className="text-xs text-green-600 mt-3">
                ↑ 12% better than average
              </p>

            </div>


            {/* Mandi */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

              <p className="text-sm text-gray-500">
                Recommended Mandi
              </p>

              <div className="flex justify-between items-center mt-2">

                <h2 className="text-xl font-bold text-gray-800">
                  Pune Mandi
                </h2>

                <span className="text-2xl">
                  🏆
                </span>

              </div>

              <p className="text-xs text-gray-500 mt-3">
                Highest expected net earnings
              </p>

            </div>


            {/* Transport */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

              <p className="text-sm text-gray-500">
                Transport Savings
              </p>

              <div className="flex justify-between items-center mt-2">

                <h2 className="text-2xl font-bold text-gray-800">
                  ₹400
                </h2>

                <span className="text-2xl">
                  🚚
                </span>

              </div>

              <p className="text-xs text-blue-600 mt-3">
                Shared transport available
              </p>

            </div>


            {/* Crop */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">

              <p className="text-sm text-gray-500">
                Crop Quality
              </p>

              <div className="flex justify-between items-center mt-2">

                <h2 className="text-2xl font-bold text-gray-800">
                  Grade A
                </h2>

                <span className="text-2xl">
                  🍅
                </span>

              </div>

              <p className="text-xs text-purple-600 mt-3">
                94% confidence
              </p>

            </div>

          </div>


          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


            {/* Recommended Market */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

              <div className="flex justify-between items-start mb-6">

                <div>

                  <h2 className="text-xl font-bold text-gray-800">
                    🏆 Best Market for Your Crop
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Based on price, transport, fees and wastage
                  </p>

                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  RECOMMENDED
                </span>

              </div>


              <div className="bg-green-50 rounded-xl p-5">

                <div className="flex flex-col sm:flex-row justify-between gap-4">

                  <div>

                    <p className="text-sm text-gray-500">
                      Market
                    </p>

                    <h3 className="text-2xl font-bold text-green-700">
                      Pune Mandi
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      📍 Pune
                    </p>

                  </div>


                  <div className="sm:text-right">

                    <p className="text-sm text-gray-500">
                      Expected Net Earnings
                    </p>

                    <p className="text-3xl font-bold text-gray-800">
                      ₹10,500
                    </p>

                    <p className="text-xs text-green-600">
                      After all costs
                    </p>

                  </div>

                </div>


                {/* Cost Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">

                  <div>
                    <p className="text-xs text-gray-500">
                      Gross Value
                    </p>

                    <p className="font-semibold">
                      ₹12,000
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Transport
                    </p>

                    <p className="font-semibold">
                      -₹800
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Mandi Charges
                    </p>

                    <p className="font-semibold">
                      -₹300
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Wastage
                    </p>

                    <p className="font-semibold">
                      -₹400
                    </p>
                  </div>

                </div>


                <button className="mt-6 bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                  View Market Comparison →
                </button>

              </div>

            </div>


            {/* Crop Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

              <h2 className="text-xl font-bold text-gray-800">
                Your Crop
              </h2>


              <div className="mt-5">

                <div className="h-32 bg-red-50 rounded-xl flex items-center justify-center">

                  <span className="text-6xl">
                    🍅
                  </span>

                </div>


                <h3 className="text-xl font-bold mt-4">
                  Tomato
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Quantity: 4 Quintals
                </p>


                <div className="flex justify-between items-center mt-5">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Grade A
                  </span>

                  <span className="text-xs text-gray-500">
                    94% confidence
                  </span>

                </div>


                <button className="w-full mt-5 border border-green-600 text-green-600 py-2.5 rounded-xl font-semibold hover:bg-green-50">
                  Scan New Crop
                </button>

              </div>

            </div>

          </div>


          {/* Quick Actions */}
          <div className="mt-8">

            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Quick Actions
            </h2>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer">

                <span className="text-2xl">
                  📊
                </span>

                <h3 className="font-semibold mt-3">
                  Compare Markets
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Find the most profitable mandi
                </p>

              </div>


              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer">

                <span className="text-2xl">
                  📷
                </span>

                <h3 className="font-semibold mt-3">
                  Scan Crop
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Check crop quality
                </p>

              </div>


              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer">

                <span className="text-2xl">
                  🚚
                </span>

                <h3 className="font-semibold mt-3">
                  Shared Transport
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Save on transportation
                </p>

              </div>


              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer">

                <span className="text-2xl">
                  🛒
                </span>

                <h3 className="font-semibold mt-3">
                  Buyer Marketplace
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  View buyer offers
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}

export default Dashboard