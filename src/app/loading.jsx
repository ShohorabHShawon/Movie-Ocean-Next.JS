import Image from 'next/image';
import React from 'react';

export default function loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-4 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400"></div>
        <Image 
          src="/loading.svg" 
          alt="loading..." 
          width={80} 
          height={80}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <p className="mt-6 text-lg font-medium text-gray-700 dark:text-gray-300 animate-pulse">
        Loading your movies...
      </p>
      <div className="flex space-x-1 mt-4">
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce delay-75"></div>
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce delay-150"></div>
      </div>
    </div>
  );
}
