import GridItem from "../lib/components/grid-item";

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-5 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-6 lg:gap-x-8">
        {/* My Cards (spans 2 of 3 columns on lg) */}
        <div className="lg:col-span-2">
          <GridItem title="My Cards" actionTitle="See All">
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
          </GridItem>
        </div>

        {/* Extra block for the remaining column */}
        <div>
          <GridItem title="Recent Transaction">
            <p className="text-gray-500">Placeholder content</p>
          </GridItem>
        </div>

        {/* Weekly Activity (spans 2 of 3 columns on lg) */}
        <div className="lg:col-span-2">
          <GridItem title="Weekly Activity">
            <p className="text-gray-500">Placeholder for chart or graph</p>
          </GridItem>
        </div>

        {/* Another block */}
        <div>
          <GridItem title="Expense Statistics">
            <p className="text-gray-500">Placeholder content</p>
          </GridItem>
        </div>

        {/* Another block */}
        <div>
          <GridItem title="Quick Transfer">
            <p className="text-gray-500">Placeholder content</p>
          </GridItem>
        </div>

        {/* Balance History (spans 2 of 3 columns on lg) */}
        <div className="lg:col-span-2">
          <GridItem title="Balance History">
            <p className="text-gray-500">Placeholder for line chart</p>
          </GridItem>
        </div>
      </div>
    </div>
  );
}
