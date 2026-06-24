export default function loading() {
  return (
    <div className="flex animate-pulse gap-5">
      <div className="flex flex-col gap-4">
        <div className="w-150 py-10 bg-gray-200"></div>
        <div className="w-30 py-3 bg-gray-200"></div>
        <div className="w-100 py-7 bg-gray-200"></div>
        <div className="px-3 py-15 bg-gray-200"></div>
        <div className="flex gap-4">
          <div className="w-40 h-15 bg-gray-200"></div>
          <div className="w-40 h-15 bg-gray-200"></div>
        </div>
        <div className="w-60 h-7 bg-gray-200 mb-15"></div>
        <div className="w-40 h-7 bg-gray-200"></div>
        <div className="w-40 h-15 bg-gray-200"></div>
        <div className="w-200 h-50 bg-gray-200"></div>
        <div className="w-40 h-7 bg-gray-200"></div>
        <div className="w-200 h-50 bg-gray-200"></div>
      </div>
      <div className="w-70 h-80 bg-gray-200"></div>
    </div>
  );
}