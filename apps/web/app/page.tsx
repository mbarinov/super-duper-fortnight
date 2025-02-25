export default function Home() {
  return (
    <div className="min-h-screen bg-background py-5 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-6 lg:gap-x-8">
        {/* My Cards (spans 2 of 3 columns on lg) */}
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl mb-2">My Cards</h2>
          {/* Horizontal scroll on mobile */}
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {/* Mock cards for demonstration */}
              <div className="bg-blue-100 w-64 p-4 rounded">
                <p className="font-semibold">Card 1</p>
              </div>
              <div className="bg-blue-200 w-64 p-4 rounded">
                <p className="font-semibold">Card 2</p>
              </div>
              <div className="bg-blue-300 w-64 p-4 rounded">
                <p className="font-semibold">Card 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Extra block for the remaining column */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl">Recent Transaction</h2>
          <p className="text-gray-500">Placeholder content</p>
        </div>

        {/* Weekly Activity (spans 2 of 3 columns on lg) */}
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl mb-2">Weekly Activity</h2>
          <p className="text-gray-500">Placeholder for chart or graph</p>
        </div>

        {/* Another block */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl">Expense Statistics</h2>
          <p className="text-gray-500">Placeholder content</p>
        </div>

        {/* Another block */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl">Quick Transfer</h2>
          <p className="text-gray-500">Placeholder content</p>
        </div>

        {/* Balance History (spans 2 of 3 columns on lg) */}
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="font-bold text-xl mb-2">Balance History</h2>
          <p className="text-gray-500">Placeholder for line chart</p>
        </div>
      </div>
    </div>
  );
}
