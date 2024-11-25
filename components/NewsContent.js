export default function NewsContent() {
  return (
    <div className="font-['VT323'] space-y-4">
      <div className="win95-button p-2">
        <div className="space-y-4">
          <article className="border-b border-gray-400 pb-2">
            <h2 className="font-bold">Markets Rally on Fed Decision</h2>
            <p className="text-sm text-gray-600">2 hours ago</p>
            <p className="mt-1">Stock markets rallied today following the Federal Reserve's latest policy decision...</p>
          </article>
          <article className="border-b border-gray-400 pb-2">
            <h2 className="font-bold">Tech Stocks Lead Market Gains</h2>
            <p className="text-sm text-gray-600">4 hours ago</p>
            <p className="mt-1">Technology sector stocks are leading the market higher today as investors...</p>
          </article>
          <article className="pb-2">
            <h2 className="font-bold">Earnings Season Kicks Off</h2>
            <p className="text-sm text-gray-600">6 hours ago</p>
            <p className="mt-1">Major banks are set to report earnings this week, marking the start of...</p>
          </article>
        </div>
      </div>
    </div>
  )
} 