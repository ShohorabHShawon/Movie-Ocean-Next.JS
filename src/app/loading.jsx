'use client';
import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 p-4">
      {/* Header Section Wireframe */}
      <div className="w-full max-w-6xl mb-8">
        <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-lg animate-pulse mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-gray-600/20 to-transparent animate-shimmer"></div>
        </div>

        {/* Navigation wireframe */}
        <div className="flex space-x-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content Grid Wireframe */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="aspect-[2/3] bg-gray-200 dark:bg-gray-800 rounded-lg relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-gray-600/10 to-transparent animate-shimmer"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
              {/* Movie poster placeholder */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-300 dark:bg-gray-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            Loading Content
          </h2>
          <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>

      {/* Footer Section Wireframe */}
      <div className="w-full max-w-6xl mt-12">
        <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-gray-600/10 to-transparent animate-shimmer"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
