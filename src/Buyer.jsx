import { useState } from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function Buyer() {
  const [orderStatus, setOrderStatus] = useState("created")
  const [otp, setOtp] = useState("")

  const order = {
    crop: "Tomato",
    grade: "A",
    quantity: 4,
    pricePerQuintal: 3200,
    farmer: "Raj",
    location: "Pune",
  }

  const totalAmount = order.quantity * order.pricePerQuintal

  const lockPayment = () => {
    setOrderStatus("locked")
  }

  const startDelivery = () => {
    setOrderStatus("delivery")
  }

  const verifyDelivery = () => {
    if (otp === "1234") {
      setOrderStatus("released")
    } else {
      alert("Incorrect OTP. Try 1234 for the demo.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <div className="ml-64">
        <Navbar />

        <main className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Buyer & Orders
              </h1>

              <p className="text-gray-500 mt-1">
                Secure crop purchase with escrow payment
              </p>
            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
              Demo Order
            </div>
          </div>

          {/* Order Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

            {/* Product */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="flex items-center gap-5 border-b pb-6">
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center text-4xl">
                  🍅
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    {order.crop} - Grade {order.grade}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Farmer: {order.farmer}
                  </p>

                  <p className="text-gray-500">
                    Location: {order.location}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-gray-500 text-sm">
                    Quantity
                  </p>

                  <p className="text-xl font-bold text-gray-800">
                    {order.quantity} Q
                  </p>
                </div>
              </div>

              {/* Price Details */}
              <div className="mt-6 space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Price per Quintal</span>
                  <span>₹{order.pricePerQuintal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Quantity</span>
                  <span>{order.quantity} Quintals</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Product Amount</span>
                  <span>₹{totalAmount}</span>
                </div>

                <div className="border-t pt-4 flex justify-between">
                  <span className="text-lg font-bold text-gray-800">
                    Total Amount
                  </span>

                  <span className="text-2xl font-bold text-green-600">
                    ₹{totalAmount}
                  </span>
                </div>

              </div>
            </div>

            {/* Payment Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">

              <h2 className="text-xl font-bold text-gray-800 mb-5">
                Payment
              </h2>

              {orderStatus === "created" && (
                <>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-5">
                    <p className="font-semibold text-yellow-800">
                      Payment Pending
                    </p>

                    <p className="text-sm text-yellow-700 mt-1">
                      Payment will be securely locked in escrow.
                    </p>
                  </div>

                  <button
                    onClick={lockPayment}
                    className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
                  >
                    Lock Payment
                  </button>
                </>
              )}

              {orderStatus === "locked" && (
                <>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
                    <p className="font-semibold text-blue-800">
                      🔒 Payment LOCKED
                    </p>

                    <p className="text-sm text-blue-700 mt-1">
                      Money is safely held until delivery is verified.
                    </p>
                  </div>

                  <button
                    onClick={startDelivery}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
                  >
                    Start Delivery
                  </button>
                </>
              )}

              {orderStatus === "delivery" && (
                <>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-5">
                    <p className="font-semibold text-orange-800">
                      🚚 Out for Delivery
                    </p>

                    <p className="text-sm text-orange-700 mt-1">
                      Enter the OTP after receiving the crop.
                    </p>
                  </div>

                  <input
                    type="text"
                    placeholder="Enter delivery OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  <button
                    onClick={verifyDelivery}
                    className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
                  >
                    Verify Delivery
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-3">
                    Demo OTP: 1234
                  </p>
                </>
              )}

              {orderStatus === "released" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">

                  <div className="text-5xl mb-3">
                    ✅
                  </div>

                  <h3 className="text-xl font-bold text-green-700">
                    Payment RELEASED
                  </h3>

                  <p className="text-sm text-green-600 mt-2">
                    Delivery verified successfully.
                  </p>

                  <p className="text-sm text-gray-500 mt-3">
                    ₹{totalAmount} has been released to the farmer.
                  </p>

                </div>
              )}

            </div>
          </div>

          {/* Order Progress */}
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-xl font-bold text-gray-800 mb-8">
              Order Progress
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>

                <h3 className="font-semibold mt-3">
                  Order Created
                </h3>

                <p className="text-sm text-gray-500">
                  Crop selected
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div
                  className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold ${
                    orderStatus === "created"
                      ? "bg-gray-200 text-gray-500"
                      : "bg-green-600 text-white"
                  }`}
                >
                  {orderStatus === "created" ? "2" : "✓"}
                </div>

                <h3 className="font-semibold mt-3">
                  Payment Locked
                </h3>

                <p className="text-sm text-gray-500">
                  Escrow protection
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div
                  className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold ${
                    orderStatus === "delivery" ||
                    orderStatus === "released"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {orderStatus === "delivery" ||
                  orderStatus === "released"
                    ? "✓"
                    : "3"}
                </div>

                <h3 className="font-semibold mt-3">
                  Delivery
                </h3>

                <p className="text-sm text-gray-500">
                  Crop delivered
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div
                  className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold ${
                    orderStatus === "released"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {orderStatus === "released" ? "✓" : "4"}
                </div>

                <h3 className="font-semibold mt-3">
                  Payment Released
                </h3>

                <p className="text-sm text-gray-500">
                  Farmer receives money
                </p>
              </div>

            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-8 bg-green-600 rounded-2xl p-6 text-white">

            <div className="flex items-center gap-4">
              <div className="text-4xl">
                🔐
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  AgriLink Escrow Protection
                </h2>

                <p className="text-green-100 mt-1">
                  Payment remains locked until the buyer confirms
                  successful delivery using OTP verification.
                </p>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  )
}

export default Buyer