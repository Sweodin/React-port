// src/components/Emerald.tsx
import React from "react";
import { useEmeralds } from "../contexts/EmeraldContext";

interface EmeraldProps {
  id: string;
  className?: string;
}

const Emerald: React.FC<EmeraldProps> = ({ id, className = "" }) => {
  const { clickedEmeralds, clickEmerald } = useEmeralds();
  const isCollected = clickedEmeralds.includes(id);

  // Map emerald IDs to colors
  const colorMap: Record<string, string> = {
    green: "bg-emerald-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-400",
    purple: "bg-purple-600",
    cyan: "bg-cyan-400",
    white: "bg-gray-100",
  };

  return (
    <div
      className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 relative z-50
                 ${colorMap[id]} ${
        isCollected
          ? "opacity-80 scale-110 shadow-lg shadow-white/50"
          : "opacity-50 hover:opacity-90 hover:scale-110"
      } 
                 sm:w-7 sm:h-7 md:w-8 md:h-8
                 ${className}`}
      onClick={() => clickEmerald(id)}
      title={`${id.charAt(0).toUpperCase() + id.slice(1)} Chaos Emerald`}
    />
  );
};

export default Emerald;
