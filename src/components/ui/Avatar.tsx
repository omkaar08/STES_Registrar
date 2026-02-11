"use client";

import React from "react";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, size = "md", src }) => {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  const getInitials = (name: string) => {
    const names = name.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const getBgColor = (name: string) => {
    return "bg-[#026892]";
  };

  if (src) {
    return (
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
        <img src={src} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} ${getBgColor(
        name
      )} rounded-full flex items-center justify-center text-white font-semibold`}
    >
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
