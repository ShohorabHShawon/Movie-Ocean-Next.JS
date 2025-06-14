import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Providers from '@/app/Providers';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: {
    default: 'Movie Ocean - Discover Movies & TV Shows',
    template: '%s | Movie Ocean',
  },
  description:
    'Discover the latest movies and TV shows with Movie Ocean. Browse ratings, reviews, cast information, and trailers powered by TMDB API.',
  keywords: [
    'shohorab hossain shawon',
    'shohorab',
    'shawon',
    'shohorab h shawon',
    'movie ocean',
    'movies',
    'tv shows',
    'cinema',
    'entertainment',
    'reviews',
    'ratings',
    'trailers',
    'TMDB',
    'movie ocean',
  ],
  authors: [{ name: 'Shohorab Hossain Shawon' }],
  creator: 'Shohorab Hossain Shawon',
  publisher: 'Movie Ocean',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://movieocean.vercel.app',
    siteName: 'Movie Ocean',
    title: 'Movie Ocean - Discover Movies & TV Shows',
    description:
      'Discover the latest movies and TV shows with Movie Ocean. Browse ratings, reviews, cast information, and trailers powered by TMDB API.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Movie Ocean - Movies & TV Shows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movie Ocean - Discover Movies & TV Shows',
    description:
      'Discover the latest movies and TV shows with Movie Ocean. Browse ratings, reviews, cast information, and trailers powered by TMDB API.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
