import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function Logistics() {
  const farmers = [
    {
      name: "Raj",
      crop: "Tomato",
      quantity: "4 Q",
      location: "Pune",
      you: true,
    },
    {
      name: "Amit",
      crop: "Tomato",
      quantity: "5 Q",
      location: "Pune",
      you: false,
    },
    {
      name: "Priya",
      crop: "Tomato",
      quantity: "3 Q",
      location: "Pune",
      you: false,
    },
    {
      name: "Vikram",
      crop: "Tomato",
      quantity: "4 Q",
      location: "Pune",
      you: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-6 max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>Dashboard</span>
              <span>›</span>
              <span className="text-green-600">
                Logistics
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800">
              Shared Transportation
            </h1>

            <p className="text-gray-500 mt-2">
              Pool your transport with nearby farmers and save money.
            </p>

          </div>


          {/* Savings Banner */}
          <div className="bg-green-600 rounded-2xl p-6 text-white mb-6">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

              <div>

                <div className="flex items-center gap-2">
                  <span className="text-3xl">🚚</span>

                  <span className="font-semibold">
                    Shared Transport Available
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-3">
                  Save ₹400 on transportation
                </h2>

                <p className="text-green-100 mt-1">
                  Join a pickup with 3 nearby farmers.
                </p>

              </div>


              <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition">
                Join Transport Pool
              </button>

            </div>

          </div>


          {/* Cost Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

            {/* Individual */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

              <div className="flex justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Individual Transport
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    ₹1,000
                  </h2>
                </div>

                <span className="text-3xl">
                  🚛
                </span>

              </div>

              <p className="text-sm text-gray-400 mt-4">
                Estimated cost without pooling
              </p>

            </div>


            {/* Shared */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">

              <div className="flex justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Shared Transport
                  </p>

                  <h2 className="text-3xl font-bold text-green-700 mt-2">
                    ₹600
                  </h2>
                </div>

                <span className="text-3xl">
                  🚚
                </span>

              </div>

              <p className="text-sm text-green-600 mt-4">
                Your estimated share
              </p>

            </div>


            {/* Savings */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">

              <div className="flex justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Your Savings
                  </p>

                  <h2 className="text-3xl font-bold text-blue-700 mt-2">
                    ₹400
                  </h2>
                </div>

                <span className="text-3xl">
                  💰
                </span>

              </div>

              <p className="text-sm text-blue-600 mt-4">
                40% lower transport cost
              </p>

            </div>

          </div>


          {/* Transport Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Pool Information */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <div className="flex justify-between items-center mb-6">

                <div>

                  <h2 className="text-xl font-bold text-gray-800">
                    Nearby Farmers
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Farmers heading toward the same market
                  </p>

                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  4 FARMERS
                </span>

              </div>


              {/* Farmer List */}
              <div className="space-y-3">

                {farmers.map((farmer) => (

                  <div
                    key={farmer.name}
                    className={`flex items-center justify-between p-4 rounded-xl border ${
                      farmer.you
                        ? "bg-green-50 border-green-200"
                        : "border-gray-100"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
                        👨‍🌾
                      </div>

                      <div>

                        <div className="flex items-center gap-2">

                          <p className="font-semibold text-gray-800">
                            {farmer.name}
                          </p>

                          {farmer.you && (
                            <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                              YOU
                            </span>
                          )}

                        </div>

                        <p className="text-xs text-gray-500">
                          {farmer.crop} • {farmer.quantity}
                        </p>

                      </div>

                    </div>


                    <div className="text-right">

                      <p className="text-sm font-medium text-gray-700">
                        📍 {farmer.location}
                      </p>

                      <p className="text-xs text-green-600 mt-1">
                        Same route
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Route */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-xl font-bold text-gray-800">
                Pickup Route
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Shared journey
              </p>


              <div className="mt-6">

                {/* Starting Point */}
                <div className="flex gap-4">

                  <div className="flex flex-col items-center">

                    <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
                      📍
                    </div>

                    <div className="w-0.5 h-12 bg-gray-200">
                    </div>

                  </div>

                  <div>

                    <p className="font-semibold text-gray-800">
                      Farmer Pickup Area
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      4 farmers
                    </p>

                  </div>

                </div>


                {/* Destination */}
                <div className="flex gap-4">

                  <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center">
                    🏪
                  </div>

                  <div>

                    <p className="font-semibold text-gray-800">
                      Pune Mandi
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Final destination
                    </p>

                  </div>

                </div>

              </div>


              {/* Vehicle */}
              <div className="mt-8 bg-gray-50 rounded-xl p-4">

                <div className="flex justify-between">

                  <div>

                    <p className="text-xs text-gray-500">
                      Vehicle
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      Mini Truck
                    </p>

                  </div>

                  <span className="text-2xl">
                    🚚
                  </span>

                </div>

                <div className="flex justify-between mt-4">

                  <div>

                    <p className="text-xs text-gray-500">
                      Total Capacity
                    </p>

                    <p className="font-semibold">
                      20 Quintals
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-xs text-gray-500">
                      Used
                    </p>

                    <p className="font-semibold">
                      16 Quintals
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Calculation */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-6">

            <h2 className="font-bold text-gray-800 mb-3">
              💡 How AgriLink calculates your savings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">

              <div>
                <p className="text-gray-500">
                  Individual cost
                </p>

                <p className="font-bold text-gray-800 mt-1">
                  ₹1,000
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Shared cost
                </p>

                <p className="font-bold text-gray-800 mt-1">
                  ₹600
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Savings
                </p>

                <p className="font-bold text-blue-700 mt-1">
                  ₹1,000 − ₹600 = ₹400
                </p>
              </div>

            </div>

          </div>


          {/* Confirm */}
          <div className="mt-6 flex justify-end">

            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
              Confirm Shared Transport →
            </button>

          </div>

        </main>

      </div>

    </div>
  )
}

export default Logistics