export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Ameaquarius Next
          </h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              This is a comprehensive Next.js boilerplate project designed to provide 
              everything you need to start building modern web applications.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Features Included
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>✅ Next.js 15 with App Router</li>
                  <li>✅ React 19</li>
                  <li>✅ TypeScript</li>
                  <li>✅ Tailwind CSS v4</li>
                  <li>✅ ESLint Configuration</li>
                  <li>✅ Turbopack for Fast Development</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Project Structure
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>📁 <code>/src/app</code> - App Router pages</li>
                  <li>📁 <code>/src/components</code> - Reusable components</li>
                  <li>📁 <code>/src/lib</code> - Utility functions</li>
                  <li>📁 <code>/src/types</code> - TypeScript definitions</li>
                  <li>📁 <code>/src/hooks</code> - Custom React hooks</li>
                  <li>📁 <code>/public</code> - Static assets</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Getting Started
            </h2>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Development
              </h3>
              <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`npm run dev`}</code>
              </pre>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Start the development server on http://localhost:3000
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Production Build
              </h3>
              <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
                <code>{`npm run build\nnpm run start`}</code>
              </pre>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Build and start the production server
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}