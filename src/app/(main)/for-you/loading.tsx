import React from 'react'

export default function loading() {
   return (
    <div className="w-screen flex flex-col animate-pulse gap-5">
      <div className="flex items-start w-60 h-10 bg-gray-200"></div>
      <div className="flex items-start w-150 h-50 bg-gray-200"></div>
      <div className="flex items-start w-60 h-10 bg-gray-200"></div>
      <div className="flex items-start w-40 h-5 bg-gray-200"></div>
      <div className="flex gap-10">
        <div className="w-50 h-80 bg-gray-200"></div>
        <div className="w-50 h-80 bg-gray-200"></div>
        <div className="w-50 h-80 bg-gray-200"></div>
        <div className="w-50 h-80 bg-gray-200"></div>
        <div className="w-50 h-80 bg-gray-200"></div>
      </div>
      <div className="flex items-start w-60 h-10 bg-gray-200"></div>
      <div className="flex items-start w-40 h-5 bg-gray-200"></div>
      <div className="flex gap-10">
        <div className="w-50 h-80 bg-gray-200"></div>
        <div className="w-50 h-80 bg-gray-200"></div>
        <div className="w-50 h-80 bg-gray-200"></div>
        <div className="w-50 h-80 bg-gray-200"></div>
        <div className="w-50 h-80 bg-gray-200"></div>
      </div>
    </div>
  );
}