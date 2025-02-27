"use client";

import { useState, useMemo, Suspense, useEffect } from "react";
import { ChevronRightIcon, SendIcon } from "@repo/icons";
import { IconButton } from "@/lib/components/icon-button";
import { useQuery, useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { fetchContacts, sendMoney, ContactType } from "@/lib/api/transfers";
import {
  ContactSkeleton,
  AmountInputSkeleton,
} from "@/lib/components/skeleton";

const Contact = dynamic(() => import("./contact"), {
  ssr: false,
  loading: () => <ContactSkeleton />,
});

function TransfersContent() {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [amount, setAmount] = useState<number | null>(42);

  const { data: contacts = [], isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
  });

  useEffect(() => {
    if (contacts.length) {
      setSelectedContact(contacts[0]!.id);
    }
  }, [contacts]);

  const sendMoneyMutation = useMutation({
    mutationFn: sendMoney,
    onSuccess: () => {
      const contact = contacts.find(
        (contact) => contact.id === selectedContact
      );
      alert(`Successfully sent ${amount} to ${contact?.name}`);
      setAmount(null);
    },
  });

  const handleNextClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % contacts.length);
  };

  const handleSendClick = () => {
    if (amount && selectedContact) {
      sendMoneyMutation.mutate();
    }
  };

  const visibleContacts = useMemo(() => {
    if (contacts.length === 0) return [] as ContactType[];

    const maxDisplay = Math.min(3, contacts.length);
    const visibleItems: ContactType[] = [];

    for (let i = 0; i < maxDisplay; i++) {
      const index = (startIndex + i) % contacts.length;
      visibleItems.push(contacts[index]!);
    }

    return visibleItems;
  }, [startIndex, contacts]);

  if (isLoading) {
    return <TransfersLoading />;
  }

  return (
    <div className="flex flex-col gap-8 justify-between h-full">
      <div className="flex flex-row gap-9 items-center justify-between">
        <div className="flex flex-row justify-between flex-1">
          {visibleContacts.map((contact) => (
            <Contact
              key={contact.id}
              name={contact.name}
              description={contact.description}
              image={contact.image}
              isActive={selectedContact === contact.id}
              onSelect={() => setSelectedContact(contact.id)}
            />
          ))}
        </div>
        {contacts.length > 3 && (
          <div className="flex-shrink-0">
            <IconButton onClick={handleNextClick} icon={<ChevronRightIcon />} />
          </div>
        )}
      </div>

      <div className="flex flex-row md:gap-8 gap-4 items-center">
        <div className="text-hint text-[#718EBF] text-nowrap">Write amount</div>
        <div className="inline-flex items-center rounded-full bg-background overflow-hidden">
          <input
            type="number"
            className="h-[40px] md:h-[50px] w-full min-w-[100px] md:px-8 px-4 py-4 bg-background text-[#718EBF] focus:outline-none border-none"
            value={amount ?? ""}
            onChange={(e) =>
              setAmount(e.target.value ? parseFloat(e.target.value) : null)
            }
          />

          <button
            type="button"
            className="flex items-center justify-center gap-2 h-[40px] md:h-[50px] w-fit pl-4 md:pl-8 pr-2 md:pr-4 py-4 bg-black hover:bg-gray-800 text-white rounded-full cursor-pointer"
            onClick={handleSendClick}
            disabled={
              !amount || !selectedContact || sendMoneyMutation.isPending
            }
          >
            Send
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function TransfersLoading() {
  return (
    <div className="flex flex-col gap-8 justify-between h-full">
      <div className="flex flex-row gap-9 items-center justify-between">
        <div className="flex flex-row flex-1">
          {Array.from({ length: 2 }).map((_, i) => (
            <ContactSkeleton key={i} />
          ))}
        </div>
      </div>
      <AmountInputSkeleton />
    </div>
  );
}

export default function Transfers() {
  return (
    <Suspense fallback={<TransfersLoading />}>
      <TransfersContent />
    </Suspense>
  );
}
