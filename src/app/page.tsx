import Link from 'next/link';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            Ameaquarius Next
          </h1>
          <p className="text-xl text-blue-700 dark:text-blue-300 mb-8">
            A powerful Next.js boilerplate project ready for development and production
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                ⚡ Fast Development
              </h2>
              <p className="text-blue-700 dark:text-blue-300">
                Built with Next.js 15, React 19, and Turbopack for lightning-fast development experience.
              </p>
            </div>
            
            <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                🎨 Modern Styling
              </h2>
              <p className="text-blue-700 dark:text-blue-300">
                Tailwind CSS v4 integrated for rapid UI development with modern design patterns.
              </p>
            </div>
            
            <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                🔧 TypeScript Ready
              </h2>
              <p className="text-blue-700 dark:text-blue-300">
                Full TypeScript support with ESLint configuration for better code quality.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/about">
                <Button size="lg">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-sm text-blue-600 dark:text-blue-400">
            <p>Ready for development • Production optimized • TypeScript enabled</p>
          </div>
        </div>
      </div>
    </main>
  );
}
