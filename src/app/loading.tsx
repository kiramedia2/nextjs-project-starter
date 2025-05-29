export default function Loading() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="space-y-6 w-full max-w-4xl px-4">
        {/* Hero section skeleton */}
        <div className="w-full h-64 bg-gray-800 rounded-lg animate-pulse" />

        {/* Featured series skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-48 bg-gray-800 rounded animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-700 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest episodes skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-48 bg-gray-800 rounded animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="w-full h-32 bg-gray-700 animate-pulse" />
                <div className="p-3 space-y-2">
                  <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
