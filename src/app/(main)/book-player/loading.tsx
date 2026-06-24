import React from 'react'

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center animate-pulse w-full">
        <div className="bg-gray-200 w-200 h-20 mb-6"></div>
        <div className="bg-gray-200 w-300 h-50 mb-4"></div>
        <div className="bg-gray-200 w-300 h-50 mb-4"></div>
        <div className="bg-gray-200 w-300 h-50 mb-4"></div>
        <div className="bg-gray-200 w-300 h-50"></div>
    </div>
  )
}
