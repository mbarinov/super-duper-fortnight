import Box from "@/lib/components/box";
import GridItem from "../lib/components/grid-item";
import { Cards } from "@/lib/pages/dashboard/cards";

export default function Home() {
  return (
    <div className="min-h-screen md:bg-background bg-white ">
      <div className="grid grid-cols-1 min-[1440px]:grid-cols-3 gap-y-5 lg:gap-y-6 lg:gap-x-8">
        <div className="min-[1440px]:col-span-2">
          <GridItem title="My Cards" actionTitle="See All">
            <Cards />
          </GridItem>
        </div>

        <div>
          <GridItem title="Recent Transaction">
            <Box>Placeholder content</Box>
          </GridItem>
        </div>

        <div className="min-[1440px]:col-span-2">
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

        <div className="min-[1440px]:col-span-2">
          <GridItem title="Balance History">
            <Box>Placeholder for line chart</Box>
          </GridItem>
        </div>
      </div>
    </div>
  );
}
