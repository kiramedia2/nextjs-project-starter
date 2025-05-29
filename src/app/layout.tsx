import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anichin – Fansub Donghua Subtitle Indonesia',
  description: 'Watch the latest donghua episodes with Indonesian subtitles. ANICHIN.DATE KENAK BLOK, ANTISIPASI BLOK JANGAN LUPA DIBOOKMARK DOMAIN INI ANICHIN.TEAM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className={`${poppins.className} bg-gray-900 text-white min-h-screen`}>
        <header className="bg-gray-800 border-b border-gray-700">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/" className="text-2xl font-bold text-blue-500">Anichin</a>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <div className="relative group">
                      <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Donghua
                      </button>
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <div className="py-1">
                          <a href="/ongoing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white">Ongoing</a>
                          <a href="/completed" className="block px-4 py-2 text-sm text-gray-300 hover:text-white">Completed</a>
                        </div>
                      </div>
                    </div>
                    <a href="/bookmark" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bookmark</a>
                    <a href="/schedule" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Schedule</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/random" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
                  Surprise Me!
                </a>
                <div className="relative">
                  <input type="text" placeholder="Search..." className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="bg-gray-800 border-t border-gray-700 mt-12">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400 text-sm">
              <p>© 2024 Anichin. All rights reserved.</p>
              <p className="mt-2">FANSUB DONGHUA SUBTITLE INDONESIA</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
