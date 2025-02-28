"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import CreditCard from "./card";
import { fetchCards } from "../../../api/cards";
import { CardType } from "../../../api/cards/types";

const CardSkeleton = () => (
  <div className="snap-center flex-shrink-0">
    <div className="md:w-[350px] md:h-[235px] w-[265px] h-[170px] bg-slate-200 animate-pulse rounded-[25px]" />
  </div>
);

export const CardsLoading = () => (
  <div className="flex flex-row gap-5 md:gap-4 overflow-x-auto pb-4 md:overflow-visible snap-x scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
    <CardSkeleton />
    <CardSkeleton />
  </div>
);

const CardsError = ({ message }: { message: string }) => (
  <div className="p-4 rounded-lg bg-red-50 text-red-600 border border-red-200">
    <p>Failed to load cards: {message}</p>
    <button
      onClick={() => window.location.reload()}
      className="mt-2 text-sm underline"
    >
      Retry
    </button>
  </div>
);

const CardsContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });

  const cards = data || [];

  if (isLoading) {
    return <CardsLoading />;
  }

  if (error) {
    return <CardsError message={(error as Error).message || "Unknown error"} />;
  }

  if (cards.length === 0) {
    return <div className="p-4 text-gray-500">No cards available</div>;
  }

  return (
    <div className="flex flex-row gap-5 md:gap-4 overflow-x-auto pb-4 md:overflow-visible snap-x scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
      {cards.map((card: CardType) => (
        <div key={card.cardNumber} className="snap-center flex-shrink-0">
          <CreditCard {...card} />
        </div>
      ))}
    </div>
  );
};

export const Cards = dynamic(() => Promise.resolve(CardsContent), {
  loading: () => <CardsLoading />,
  ssr: false,
});
