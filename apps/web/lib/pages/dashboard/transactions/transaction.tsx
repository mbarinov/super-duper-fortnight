import cn from "classnames";
import IconButton from "@/lib/components/icon-button";
import { DepositIcon, MoneyIcon, PaypalIcon } from "./transaction-icons";

interface TransactionProps {
  amount: number;
  currency: string;
  date: string;
  type: string;
  category: string;
  description: string;
}

export default function Transaction({
  amount,
  currency,
  date,
  type,
  category,
  description,
}: TransactionProps) {
  const amountFormatted = Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  function getIcon() {
    switch (category) {
      case "paypal":
        return (
          <IconButton
            className="bg-[#E7EDFF]"
            icon={<PaypalIcon className="text-[#396AFF]" size={28} />}
          />
        );
      case "deposit":
        return (
          <IconButton
            className="bg-[#FFF5D9]"
            icon={<DepositIcon className="text-[#FFBB38]" size={28} />}
          />
        );
      default:
        return (
          <IconButton
            className="bg-[#DCFAF8]"
            icon={<MoneyIcon className="text-[#16DBCC]" size={28} />}
          />
        );
    }
  }

  const amountColor = type === "credit" ? "text-[#FF4B4A]" : "text-[#41D4A8]";

  return (
    <div className="flex flex-row gap-4 items-center">
      {getIcon()}
      <div className="flex flex-col gap-2 flex-1">
        <div className="text-body text-[#232323]">{description}</div>
        <div className="text-hint  text-[#718EBF]">{formattedDate}</div>
      </div>
      <div className={cn("text-body", amountColor)}>
        {type === "credit" ? "-" : "+"}
        {amountFormatted}
      </div>
    </div>
  );
}
