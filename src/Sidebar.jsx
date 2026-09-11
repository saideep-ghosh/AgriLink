import { NavLink } from "react-router-dom"

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Market Recommendation",
      path: "/markets",
      icon: "📊",
    },
    {
      name: "Crop Scanner",
      path: "/crop-scanner",
      icon: "📷",
    },
    {
      name: "Logistics",
      path: "/logistics",
      icon: "🚚",
    },
    {
      name: "Marketplace",
      path: "/marketplace",
      icon: "🛒",
    },
    {
      name: "My Orders",
      path: "/buyer",
      icon: "📦",
    },
  ]

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 bg-green-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🌱</span>
          </div>

          <div>
            <h1 className="text-xl font-bold text-green-700">
              AgriLink
            </h1>

            <p className="text-xs text-gray-400">
              Smart Farming
            </p>
          </div>

        </div>
      </div>


      {/* Navigation */}
      <nav className="flex-1 p-4">

        <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-3">
          Main Menu
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >

              <span className="text-xl">
                {item.icon}
              </span>

              <span className="text-sm">
                {item.name}
              </span>

            </NavLink>

          ))}

        </div>

      </nav>


      {/* Farmer Profile */}
      <div className="p-4 border-t border-gray-100">

        <div className="bg-green-50 rounded-xl p-3 flex items-center gap-3">

          <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
            👨‍🌾
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700">
              Raj
            </p>

            <p className="text-xs text-gray-500">
              Farmer
            </p>
          </div>

        </div>

      </div>

    </aside>
  )
}

export default Sidebar