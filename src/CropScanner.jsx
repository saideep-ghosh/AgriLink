import { useState } from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function CropScanner() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if (!file) return

    setSelectedImage(file)
    setImagePreview(URL.createObjectURL(file))
    setResult(null)
  }

  const handleScan = () => {
    if (!selectedImage) return

    setScanning(true)
    setResult(null)

    // Temporary mock AI response
    setTimeout(() => {
      setResult({
        crop: "Tomato",
        grade: "A",
        confidence: 94,
        quality: "Excellent",
        message:
          "The crop appears fresh and suitable for premium market sale.",
      })

      setScanning(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1">

        <Navbar />

        <main className="p-6 max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>Dashboard</span>
              <span>›</span>
              <span className="text-green-600">
                Crop Scanner
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800">
              AI Crop Quality Scanner
            </h1>

            <p className="text-gray-500 mt-2">
              Upload a crop image to check its quality and grade.
            </p>

          </div>


          {/* Scanner Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Upload Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-xl font-bold text-gray-800">
                Upload Crop Image
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Upload a clear image of your crop.
              </p>


              {/* Image Area */}
              <div className="mt-6">

                {imagePreview ? (

                  <div className="relative">

                    <img
                      src={imagePreview}
                      alt="Selected crop"
                      className="w-full h-80 object-cover rounded-xl border border-gray-200"
                    />

                    <button
                      onClick={() => {
                        setSelectedImage(null)
                        setImagePreview(null)
                        setResult(null)
                      }}
                      className="absolute top-3 right-3 bg-white text-red-500 px-3 py-2 rounded-lg shadow hover:bg-red-50"
                    >
                      Remove
                    </button>

                  </div>

                ) : (

                  <label className="h-80 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition">

                    <div className="text-5xl mb-4">
                      📷
                    </div>

                    <p className="font-semibold text-gray-700">
                      Click to upload image
                    </p>

                    <p className="text-sm text-gray-400 mt-2">
                      JPG, PNG up to 10MB
                    </p>

                    <input
                      type="file"
                      accept="image/png,image/jpeg"
                      onChange={handleImageChange}
                      className="hidden"
                    />

                  </label>

                )}

              </div>


              {/* Scan Button */}
              <button
                onClick={handleScan}
                disabled={!selectedImage || scanning}
                className={`w-full mt-6 py-3 rounded-xl font-semibold transition ${
                  !selectedImage || scanning
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {scanning ? "Analyzing Crop..." : "Scan Crop"}
              </button>


              <p className="text-xs text-gray-400 text-center mt-4">
                AI analysis is currently using prototype data.
              </p>

            </div>


            {/* Result Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-xl font-bold text-gray-800">
                Quality Result
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                AI-generated crop quality assessment.
              </p>


              {!result && !scanning && (

                <div className="h-80 flex flex-col items-center justify-center text-center">

                  <div className="text-6xl mb-4">
                    🔍
                  </div>

                  <h3 className="font-semibold text-gray-600">
                    No scan yet
                  </h3>

                  <p className="text-sm text-gray-400 mt-2 max-w-sm">
                    Upload a crop image and click "Scan Crop"
                    to see the quality assessment.
                  </p>

                </div>

              )}


              {scanning && (

                <div className="h-80 flex flex-col items-center justify-center">

                  <div className="w-14 h-14 border-4 border-green-200 border-t-green-600 rounded-full animate-spin">
                  </div>

                  <p className="font-semibold text-gray-700 mt-5">
                    Analyzing your crop...
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    Please wait
                  </p>

                </div>

              )}


              {result && (

                <div className="mt-6">

                  {/* Grade */}
                  <div className="bg-green-50 rounded-2xl p-6 text-center">

                    <p className="text-sm text-gray-500">
                      Crop Grade
                    </p>

                    <div className="text-7xl font-bold text-green-600 mt-3">
                      {result.grade}
                    </div>

                    <p className="font-semibold text-green-700 mt-2">
                      Excellent Quality
                    </p>

                  </div>


                  {/* Confidence */}
                  <div className="mt-6">

                    <div className="flex justify-between mb-2">

                      <span className="text-sm font-semibold text-gray-700">
                        AI Confidence
                      </span>

                      <span className="text-sm font-bold text-green-600">
                        {result.confidence}%
                      </span>

                    </div>


                    <div className="w-full bg-gray-200 rounded-full h-3">

                      <div
                        className="bg-green-600 h-3 rounded-full"
                        style={{
                          width: `${result.confidence}%`,
                        }}
                      >
                      </div>

                    </div>

                  </div>


                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4 mt-6">

                    <div className="bg-gray-50 rounded-xl p-4">

                      <p className="text-xs text-gray-500">
                        Crop
                      </p>

                      <p className="font-bold text-gray-800 mt-1">
                        {result.crop}
                      </p>

                    </div>


                    <div className="bg-gray-50 rounded-xl p-4">

                      <p className="text-xs text-gray-500">
                        Quality
                      </p>

                      <p className="font-bold text-gray-800 mt-1">
                        {result.quality}
                      </p>

                    </div>

                  </div>


                  {/* Message */}
                  <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4">

                    <p className="text-sm text-gray-600">
                      💡 {result.message}
                    </p>

                  </div>


                  {/* Continue */}
                  <button className="w-full mt-5 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                    Continue to Market Recommendation →
                  </button>

                </div>

              )}

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}

export default CropScanner