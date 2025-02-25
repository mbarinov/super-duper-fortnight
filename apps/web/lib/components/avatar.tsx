import React from "react";
import Image from "next/image";

interface AvatarProps {
  src?: string;
  name: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  className = "",
}) => {
  // Get initials from name (first letter of first and last name)
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
    return (
      nameParts[0].charAt(0).toUpperCase() +
      nameParts[nameParts.length - 1].charAt(0).toUpperCase()
    );
  };

  const initials = getInitials(name);

  return (
    <div
      className={`relative rounded-full bg-gray-300 flex items-center justify-center overflow-hidden
        w-[35px] h-[35px] md:w-[60px] md:h-[60px] flex-shrink-0 min-w-[35px] md:min-w-[60px] ${className}`}
      title={name}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 35px, 60px"
          className="object-cover"
        />
      ) : (
        <span className="text-sm md:text-lg font-bold text-white">
          {initials}
        </span>
      )}
    </div>
  );
};

export default Avatar;
