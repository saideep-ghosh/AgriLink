import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!mobile || !password) {
      setError("Please enter mobile number and password.")
      return
    }

    // Demo login
    if (mobile === "9876543210" && password === "1234") {
      navigate("/dashboard")
    } else {
      setError("Invalid login. Use 9876543210 / 1234 for demo.")
    }
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
            Smart markets. Better profits. Stronger farmers.
          </p>

        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-6">
            Login to your farmer account
          </p>

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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?

            <button
              onClick={() => navigate("/register")}
              className="text-green-600 font-semibold ml-1 hover:text-green-700"
            >
              Register
            </button>
          </p>

        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Empowering farmers with smarter decisions 🌾
        </p>

      </div>

    </div>
  )
}

export default Login