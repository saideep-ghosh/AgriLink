function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
          <span className="text-xl">🌱</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-green-700">AgriLink</h1>
          <p className="text-xs text-gray-400">Smart Farming Platform</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-500 text-xl hover:text-gray-700">🔔</button>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">👨‍🌾</div>
          <button className="text-gray-700 text-sm font-medium hover:text-green-600">Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
