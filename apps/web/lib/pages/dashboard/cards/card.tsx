import React from "react";
import Image from "next/image";
import { MastercardIcon } from "@repo/icons";
import cn from "classnames";

import chipWhite from "./chip-white.png";
import chipBlack from "./chip-black.png";

interface CreditCardProps {
  balance: number;
  currency: string;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  isPremium?: boolean;
  onClick?: () => void;
}

/**
 * CreditCard component displays a stylized credit card with user information
 */
const CreditCard: React.FC<CreditCardProps> = ({
  balance = 5756,
  currency = "USD",
  cardHolder = "Eddy Cusuma",
  cardNumber = "3778 **** **** 1234",
  validThru = "12/25",
  isPremium = false,
  onClick,
}) => {
  const balanceFormatted = Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(balance);

  return (
    <div className="md:w-[350px] md:h-[235px] w-[265px] h-[170px]">
      <div
        className={`flex w-full h-full flex-col items-stretch rounded-[25px] transition-all duration-300 hover:shadow-lg cursor-pointer ${!isPremium && "border border-[#DFEAF2]"}`}
        style={{
          background: isPremium
            ? "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)"
            : "#FFFFFF",
        }}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <div className="flex flex-col justify-between w-full md:px-6 px-5 md:pt-6 pt-5 md:gap-6 h-full gap-4">
          <div className="flex justify-between items-start w-full">
            <div className={`flex flex-col items-stretch text-xs font-normal`}>
              <span
                className={`text-hint ${isPremium ? "text-white" : "text-[#718EBF]"}`}
              >
                Balance
              </span>
              <span
                className={`text-header !font-normalchip-black.png ${isPremium ? "text-white" : "text-[#343C6A]"}`}
              >
                {balanceFormatted}
              </span>
            </div>
            <Image
              className="w-[35px] h-[35px]"
              src={isPremium ? chipWhite : chipBlack}
              alt="Credit card chip"
            />
          </div>

          <div className="flex justify-between items-start w-full md:pb-4 pb-2">
            <div
              className={`flex flex-col items-stretch text-xs ${isPremium ? "text-white" : "text-[#343C6A]"} font-normal w-1/2 pr-2`}
            >
              <span
                className={`${isPremium ? "text-white" : "text-[#718EBF]"} text-hint`}
              >
                CARD HOLDER
              </span>
              <span className="text-[15px] font-semibold">{cardHolder}</span>
            </div>

            <div className={`flex flex-col w-1/2 pl-2`}>
              <span
                className={`${isPremium ? "text-white" : "text-[#718EBF]"} text-hint`}
              >
                VALID THRU
              </span>
              <span
                className={`${isPremium ? "text-white" : "text-[#343C6A]"} text-[15px] font-semibold`}
              >
                {validThru}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`flex justify-between w-full items-center mt-auto md:px-6 px-4 md:pt-6 pt-4 pb-4 ${!isPremium && "border-t border-[#DFEAF2]"}`}
          style={{
            background: isPremium
              ? "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)"
              : "transparent",
          }}
        >
          <div
            className={cn(
              "!font-normal",
              "text-header",
              isPremium ? "text-white" : "text-black"
            )}
          >
            {cardNumber}
          </div>
          <MastercardIcon className="w-[44px] h-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
