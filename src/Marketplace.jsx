import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function Marketplace() {
  const listings = [
    {
      id: 1,
      crop: "Tomato",
      grade: "A",
      quantity: "4 Quintals",
      price: 3200,
      farmer: "Raj",
      location: "Pune",
      quality: 94,
    },
    {
      id: 2,
      crop: "Tomato",
      grade: "A",
      quantity: "6 Quintals",
      price: 3100,
      farmer: "Amit",
      location: "Pune",
      quality: 91,
    },
    {
      id: 3,
      crop: "Tomato",
      grade: "B",
      quantity: "5 Quintals",
      price: 2800,
      farmer: "Vikram",
      location: "Nashik",
      quality: 86,
    },
    {
      id: 4,
      crop: "Onion",
      grade: "A",
      quantity: "8 Quintals",
      price: 2400,
      farmer: "Priya",
      location: "Pune",
      quality: 96,
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
                Marketplace
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>

                <h1 className="text-3xl font-bold text-gray-800">
                  Farmer Marketplace
                </h1>

                <p className="text-gray-500 mt-2">
                  Buy fresh crops directly from verified farmers.
                </p>

              </div>

              <button className="bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                + List Your Crop
              </button>

            </div>

          </div>


          {/* Search and Filters */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Search Crop
                </label>

                <input
                  type="text"
                  placeholder="e.g. Tomato"
                  className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Grade
                </label>

                <select className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500">

                  <option>All Grades</option>
                  <option>Grade A</option>
                  <option>Grade B</option>
                  <option>Grade C</option>

                </select>

              </div>

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>

                <select className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500">

                  <option>All Locations</option>
                  <option>Pune</option>
                  <option>Nashik</option>
                  <option>Mumbai</option>

                </select>

              </div>

            </div>

          </div>


          {/* Marketplace Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

              <p className="text-sm text-gray-500">
                Available Lots
              </p>

              <p className="text-2xl font-bold text-gray-800 mt-2">
                24
              </p>

            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

              <p className="text-sm text-gray-500">
                Grade A Lots
              </p>

              <p className="text-2xl font-bold text-green-600 mt-2">
                16
              </p>

            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

              <p className="text-sm text-gray-500">
                Verified Farmers
              </p>

              <p className="text-2xl font-bold text-blue-600 mt-2">
                18
              </p>

            </div>

          </div>


          {/* Listings */}
          <div className="mb-4">

            <h2 className="text-xl font-bold text-gray-800">
              Available Crops
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Fresh produce available for purchase
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {listings.map((listing) => (

              <div
                key={listing.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition"
              >

                {/* Crop Image Placeholder */}
                <div className="h-44 bg-red-50 flex items-center justify-center relative">

                  <span className="text-7xl">
                    {listing.crop === "Tomato" ? "🍅" : "🧅"}
                  </span>

                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                      listing.grade === "A"
                        ? "bg-green-600 text-white"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    GRADE {listing.grade}
                  </span>

                </div>


                {/* Listing Details */}
                <div className="p-5">

                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="text-xl font-bold text-gray-800">
                        {listing.crop}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        📍 {listing.location}
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-xs text-gray-500">
                        Price / Q
                      </p>

                      <p className="text-xl font-bold text-green-700">
                        ₹{listing.price.toLocaleString()}
                      </p>

                    </div>

                  </div>


                  {/* Information */}
                  <div className="grid grid-cols-2 gap-3 mt-5">

                    <div className="bg-gray-50 rounded-xl p-3">

                      <p className="text-xs text-gray-500">
                        Quantity
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        {listing.quantity}
                      </p>

                    </div>

                    <div className="bg-gray-50 rounded-xl p-3">

                      <p className="text-xs text-gray-500">
                        AI Quality
                      </p>

                      <p className="font-semibold text-green-700 mt-1">
                        {listing.quality}%
                      </p>

                    </div>

                  </div>


                  {/* Farmer */}
                  <div className="flex items-center gap-3 mt-5">

                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      👨‍🌾
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-gray-700">
                        {listing.farmer}
                      </p>

                      <p className="text-xs text-gray-400">
                        ✓ Verified Farmer
                      </p>

                    </div>

                  </div>


                  {/* Buy Button */}
                 <button
  onClick={() => window.location.href = "/buyer"}
  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
>
  Buy Now
</button>

                </div>

              </div>

            ))}

          </div>


          {/* Trust Section */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">

            <h3 className="font-bold text-gray-800">
              🛡️ Safe & Transparent Buying
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Crop quality is verified through the AgriLink scanner.
              Buyer payments can be held securely until delivery is
              verified.
            </p>

          </div>

        </main>

      </div>

    </div>
  )
}

export default Marketplace