import Link from 'next/link'

// This would normally fetch episode data based on the IDs
const episodeData = {
  series: {
    id: "1",
    title: "Battle Through the Heavens Season 5",
    totalEpisodes: 148
  },
  episode: {
    number: 148,
    title: "Episode 148",
    videoUrl: "#", // Video URL would go here
    nextEpisode: null,
    prevEpisode: 147
  },
  recommendations: [
    {
      id: 2,
      title: "Perfect World",
      episode: "217",
      image: "https://anichin.cafe/wp-content/uploads/2021/04/Perfect-World.webp"
    },
    {
      id: 3,
      title: "Throne of Seal",
      episode: "161",
      image: "https://anichin.cafe/wp-content/uploads/2022/04/throne-of-seal-sub-indo.webp"
    }
  ]
}

export default function WatchPage({ 
  params 
}: { 
  params: { seriesId: string; episodeId: string } 
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Main Content */}
      <div className="lg:w-3/4 space-y-4">
        {/* Video Player */}
        <div className="relative bg-black aspect-video rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-500">Video Player</span>
          </div>
        </div>

        {/* Episode Info */}
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">
              {episodeData.series.title} - Episode {episodeData.episode.number}
            </h1>
            <div className="flex space-x-2">
              {episodeData.episode.prevEpisode && (
                <Link 
                  href={`/watch/${params.seriesId}/${episodeData.episode.prevEpisode}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Previous
                </Link>
              )}
              {episodeData.episode.nextEpisode && (
                <Link 
                  href={`/watch/${params.seriesId}/${episodeData.episode.nextEpisode}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Next
                </Link>
              )}
            </div>
          </div>

          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href={`/series/${params.seriesId}`} className="hover:text-blue-500">
              Series Info
            </Link>
            <span>Episode {episodeData.episode.number} of {episodeData.series.totalEpisodes}</span>
          </div>
        </div>

        {/* Episode Selection */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Episodes</h2>
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 10 }, (_, i) => (
              <Link 
                href={`/watch/${params.seriesId}/${episodeData.episode.number - i}`}
                key={i}
                className={`
                  flex items-center justify-center p-2 rounded
                  ${episodeData.episode.number === episodeData.episode.number - i 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600'}
                `}
              >
                {episodeData.episode.number - i}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/4 space-y-4">
        <h2 className="text-lg font-semibold">Recommended</h2>
        <div className="space-y-4">
          {episodeData.recommendations.map((item) => (
            <Link href={`/series/${item.id}`} key={item.id} className="block">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                  <span className="text-xs text-gray-400">Episode {item.episode}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
