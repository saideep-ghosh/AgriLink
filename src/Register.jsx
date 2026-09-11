
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = () => {
    if (!name || !mobile || !password) {
      setMessage("Please fill all the fields.")
      return
    }

    setMessage("Registration successful! You can now login.")

    setTimeout(() => {
      navigate("/login")
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">

          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl shadow-lg mb-4">
            <span className="text-3xl">🌱</span>
          </div>

          <h1 className="text-4xl font-bold text-green-700">
            AgriLink
          </h1>

          <p className="text-gray-600 mt-2">
            Create your farmer account
          </p>

        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-6">
            Join AgriLink today
          </p>

          {/* Name */}
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Mobile */}
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>

          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Password */}
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Message */}
          {message && (
            <p className="text-green-600 text-sm mb-4">
              {message}
            </p>
          )}

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Create Account
          </button>

          {/* Login */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?

            <button
              onClick={() => navigate("/login")}
              className="text-green-600 font-semibold ml-1 hover:text-green-700"
            >
              Login
            </button>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Register