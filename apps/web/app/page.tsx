import Box from "@/lib/components/box";
import GridItem from "../lib/components/grid-item";

export default function Home() {
  return (
    <div className="min-h-screen md:bg-background bg-white md:py-5 md:px-10 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-6 lg:gap-x-8">
        <div className="lg:col-span-2">
          <GridItem title="My Cards" actionTitle="See All">
            <div className="overflow-x-auto">
              <div className="flex space-x-4">
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

        <div>
          <GridItem title="Recent Transaction">
            <Box>Placeholder content</Box>
          </GridItem>
        </div>

        <div className="lg:col-span-2">
          <GridItem title="Weekly Activity">
            <Box>Placeholder for chart or graph</Box>
          </GridItem>
        </div>

        <div>
          <GridItem title="Expense Statistics">
            <Box>Placeholder content</Box>
          </GridItem>
        </div>

        <div>
          <GridItem title="Quick Transfer">
            <Box>Placeholder content</Box>
          </GridItem>
        </div>

        <div className="lg:col-span-2">
          <GridItem title="Balance History">
            <Box>Placeholder for line chart</Box>
          </GridItem>
        </div>
      </div>
    </div>
  );
}
