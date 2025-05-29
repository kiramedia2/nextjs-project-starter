import Link from 'next/link'
import Image from 'next/image'

// Partner logos for the banner section
const partnerLogos = [
  {
    id: 1,
    image: "https://anichin.cafe/wp-content/uploads/2025/01/A-KAIKO.gif",
    link: "https://akseskaiko.cam/login"
  },
  {
    id: 2,
    image: "https://anichin.cafe/wp-content/uploads/2025/01/A-PENTA.gif",
    link: "https://menujupenta.site/login"
  },
  {
    id: 3,
    image: "https://anichin.cafe/wp-content/uploads/2025/01/anime-id666.gif",
    link: "https://heylink.cam/indo666"
  }
]

const featuredSeries = [
  {
    id: 1,
    title: "Battle Through the Heavens Season 5",
    image: "https://anichin.cafe/wp-content/uploads/2022/12/BTTH.webp",
    episode: "Episode 148",
    rating: "9.20",
    description: "Musim kelima Doupo Cangqiong. Setelah tiga tahun tidak bertemu, Xiao Yan akhirnya bertemu Xun'er di Akademi Jia Nan. Setelah itu, mereka menjadi lebih dekat dan mendirikan Gerbang Batu..."
  },
  {
    id: 2,
    title: "Perfect World",
    image: "https://anichin.cafe/wp-content/uploads/2021/04/Perfect-World.webp",
    episode: "Episode 217",
    rating: "8.00",
    description: "Donghua Perfect World diadaptasi dari novel dengan judul yang sama. Dia dilahirkan untuk mengolah Tao, dan untuk malapetaka, dia berubah menjadi hujan ribuan darah..."
  },
  {
    id: 3,
    title: "Throne of Seal",
    image: "https://anichin.cafe/wp-content/uploads/2022/04/throne-of-seal-sub-indo.webp",
    episode: "Episode 161",
    rating: "7.72",
    description: "6000 tahun yang lalu, Kaisar Dewa Iblis, Feng Xiu dan 72 Pilar Dewa Iblis turun dari langit, semua makhluk terkontaminasi dengan nafas Pilar Dewa Iblis..."
  }
]

const latestEpisodes = [
  {
    id: 1,
    title: "Perfect World",
    episode: "217",
    image: "https://anichin.cafe/wp-content/uploads/2021/04/Perfect-World.webp",
    type: "Donghua"
  },
  {
    id: 2,
    title: "Battle Through the Heavens",
    episode: "148",
    image: "https://anichin.cafe/wp-content/uploads/2022/12/BTTH.webp",
    type: "Donghua"
  },
  {
    id: 3,
    title: "Throne of Seal",
    episode: "161",
    image: "https://anichin.cafe/wp-content/uploads/2022/04/throne-of-seal-sub-indo.webp",
    type: "Donghua"
  }
]

const popularSeries = [
  {
    id: 1,
    title: "Throne of Seal",
    image: "https://anichin.cafe/wp-content/uploads/2022/04/throne-of-seal-sub-indo.webp",
    episode: "161",
    type: "Donghua",
    genres: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 2,
    title: "Perfect World",
    image: "https://anichin.cafe/wp-content/uploads/2021/04/Perfect-World.webp",
    episode: "217",
    type: "Donghua",
    genres: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 3,
    title: "Renegade Immortal",
    image: "https://anichin.cafe/wp-content/uploads/2023/09/Renegade-Immortal-sub-indo.webp",
    episode: "90",
    type: "Donghua",
    genres: ["Action", "Adventure", "Fantasy"]
  }
]

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Partner Logos Banner */}
      <section className="grid grid-cols-3 gap-4 mb-8">
        {partnerLogos.map((partner) => (
          <Link href={partner.link} key={partner.id} target="_blank" rel="noopener noreferrer">
            <div className="relative h-24 w-full">
              <Image
                src={partner.image}
                alt="Partner Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </section>

      {/* Site Notice */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">FANSUB DONGHUA SUBTITLE INDONESIA</h1>
        <p className="text-gray-400">
          ANICHIN.DATE KENAK BLOK, ANTISIPASI BLOK JANGAN LUPA DIBOOKMARK DOMAIN INI ANICHIN.TEAM Di BROWSER GOOGLE CHROME KALIAN DAN SELAMAT MENONTON ^_^
        </p>
      </div>

      {/* Featured Series */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">Featured Series</span>
          <span className="h-1 flex-1 bg-gray-700 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSeries.map((series) => (
            <Link href={`/series/${series.id}`} key={series.id} className="block">
              <div className="bg-gray-800 rounded-lg overflow-hidden group">
                <div className="relative">
                  <Image 
                    src={series.image} 
                    alt={series.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {series.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400">{series.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{series.episode}</p>
                  <p className="text-gray-500 text-sm line-clamp-2">{series.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">Latest Episodes</span>
          <span className="h-1 flex-1 bg-gray-700 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latestEpisodes.map((episode) => (
            <Link href={`/watch/${episode.id}`} key={episode.id} className="block">
              <div className="bg-gray-800 rounded-lg overflow-hidden group">
                <div className="relative">
                  <Image 
                    src={episode.image} 
                    alt={episode.title}
                    width={300}
                    height={169}
                    className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">EP {episode.episode}</span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-400">{episode.title}</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">{episode.type}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Today */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">Popular Today</span>
          <span className="h-1 flex-1 bg-gray-700 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularSeries.map((series) => (
            <Link href={`/series/${series.id}`} key={series.id} className="block">
              <div className="bg-gray-800 rounded-lg overflow-hidden group">
                <div className="relative">
                  <Image 
                    src={series.image} 
                    alt={series.title}
                    width={300}
                    height={169}
                    className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-2 group-hover:text-blue-400">{series.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {series.genres.map((genre, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
