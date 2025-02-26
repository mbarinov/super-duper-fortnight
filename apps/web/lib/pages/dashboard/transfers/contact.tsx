import Image from "next/image";
import cn from "classnames";

interface ContactProps {
  name: string;
  isActive: boolean;
  onSelect: () => void;
  description: string;
  image: string;
}

export default function Contact({
  name,
  image,
  description,
  isActive,
  onSelect,
}: ContactProps) {
  const nameClassName = cn("text-body text-[#232323]", {
    "!font-semibold": isActive,
  });

  const descriptionClassName = cn("text-hint text-[#718EBF]", {
    "!font-semibold": isActive,
  });

  return (
    <div
      className="flex flex-col flex-shrink-0 gap-4 items-center cursor-pointer"
      onClick={onSelect}
    >
      <Image
        className="rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
        src={image}
        alt={name}
        width={70}
        height={70}
      />
      <div className="flex flex-col items-center gap-1">
        <div className={nameClassName}>{name}</div>
        <div className={descriptionClassName}>{description}</div>
      </div>
    </div>
  );
}
