import Box from "@/lib/components/box";
import GridItem from "../lib/components/grid-item";
import { Cards } from "@/lib/pages/dashboard/cards";
import Transactions from "@/lib/pages/dashboard/transactions";
import Transfers from "@/lib/pages/dashboard/transfers";
import Activity from "@/lib/pages/dashboard/activity";
import Expenses from "@/lib/pages/dashboard/expenses";

export default function Home() {
  return (
    <div className="min-h-screen md:bg-background bg-white ">
      <div className="grid grid-cols-1 min-[1440px]:grid-cols-3 gap-y-5 lg:gap-y-6 lg:gap-x-8">
        <div className="min-[1440px]:col-span-2">
          <GridItem title="My Cards" actionTitle="See All">
            <Cards />
          </GridItem>
        </div>

        <GridItem title="Recent Transactions">
          <Box className="md:h-[235px] h-[170px]">
            <Transactions />
          </Box>
        </GridItem>

        <div className="min-[1440px]:col-span-2">
          <GridItem title="Weekly Activity">
            <Box>
              <Activity />
            </Box>
          </GridItem>
        </div>

        <GridItem title="Expense Statistics">
          <Box>
            <Expenses />
          </Box>
        </GridItem>

        <div className="min-[1440px]:flex min-[1440px]:space-x-8 block space-y-5 min-[1440px]:space-y-0 col-span-full">
          <div className="min-[1440px]:w-[445px] w-full">
            <GridItem title="Quick Transfer">
              <Box>
                <Transfers />
              </Box>
            </GridItem>
          </div>

          <div className="min-[1440px]:flex-1 w-full">
            <GridItem title="Balance History">
              <Box>Placeholder for line chart</Box>
            </GridItem>
          </div>
        </div>
      </div>
    </div>
  );
}
