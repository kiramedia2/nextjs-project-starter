import Link from 'next/link'

// This would normally fetch series data based on the ID
const seriesData = {
  title: "Battle Through the Heavens Season 5",
  image: "https://anichin.cafe/wp-content/uploads/2022/12/BTTH.webp",
  description: "Musim kelima Doupo Cangqiong. Setelah tiga tahun tidak bertemu, Xiao Yan akhirnya bertemu Xun'er di Akademi Jia Nan. Setelah itu, mereka menjadi lebih dekat dan mendirikan Gerbang Batu (Gerbang Xiao Yan).",
  rating: "9.20",
  genres: ["Action", "Adventure", "Fantasy"],
  episodes: [
    { number: 148, title: "Episode 148", image: "https://anichin.cafe/wp-content/uploads/2022/12/BTTH.webp" },
    { number: 147, title: "Episode 147", image: "https://anichin.cafe/wp-content/uploads/2022/12/BTTH.webp" },
    { number: 146, title: "Episode 146", image: "https://anichin.cafe/wp-content/uploads/2022/12/BTTH.webp" },
    // Add more episodes as needed
  ]
}

export default function SeriesPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8">
      {/* Series Header */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <img 
            src={seriesData.image} 
            alt={seriesData.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{seriesData.title}</h1>
          
          <div className="flex items-center space-x-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              Rating: {seriesData.rating}
            </span>
            {seriesData.genres.map((genre) => (
              <span key={genre} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                {genre}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            {seriesData.description}
          </p>
        </div>
      </div>

      {/* Episodes List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Episodes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {seriesData.episodes.map((episode) => (
            <Link 
              href={`/watch/${params.id}/${episode.number}`} 
              key={episode.number}
              className="block"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={episode.image} 
                    alt={episode.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">Watch Now</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Episode {episode.number}</h3>
                  <p className="text-sm text-gray-400">{episode.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
