import React, { createContext, useContext, useState, useEffect } from "react";

// Define the type for the context value
interface EmeraldContextType {
  clickedEmeralds: string[];
  clickEmerald: (id: string) => void;
  isSuperSonic: boolean;
  resetEmeralds: () => void;
}

// Create audio elements once
const collectSound = new Audio("./sounds/collectcoin.wav");
const transformSound = new Audio("./sounds/chaos-emerald.mp3");
collectSound.volume = 0.8;
transformSound.volume = 1;

const EmeraldContext = createContext<EmeraldContextType | undefined>(undefined);
export const EMERALD_IDS = [
  "green",
  "red",
  "blue",
  "yellow",
  "purple",
  "cyan",
  "white",
];

export const EmeraldProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clickedEmeralds, setClickedEmeralds] = useState<string[]>(() => {
    const saved = localStorage.getItem("clickedEmeralds");
    return saved ? JSON.parse(saved) : [];
  });

  const [isSuperSonic, setIsSuperSonic] = useState(() => {
    const saved = localStorage.getItem("clickedEmeralds");
    if (saved) {
      const emeralds = JSON.parse(saved);
      return emeralds.length === EMERALD_IDS.length;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("clickedEmeralds", JSON.stringify(clickedEmeralds));

    if (clickedEmeralds.length === EMERALD_IDS.length && !isSuperSonic) {
      // Add flash effect
      const root = document.documentElement;
      root.style.setProperty("--flash-opacity", "1");
      setTimeout(() => {
        root.style.setProperty("--flash-opacity", "0");
      }, 500);

      setIsSuperSonic(true);
      // Only play sound on user interaction
      const playTransform = () => {
        transformSound
          .play()
          .catch((err) => console.log("Audio playback error:", err));
        document.removeEventListener("click", playTransform);
      };
      document.addEventListener("click", playTransform);
    }
  }, [clickedEmeralds, isSuperSonic]);

  const clickEmerald = (id: string) => {
    if (!clickedEmeralds.includes(id)) {
      setClickedEmeralds((prev: string[]) => [...prev, id]);
      collectSound
        .play()
        .catch((err) => console.log("Audio playback error:", err));
    }
  };

  const resetEmeralds = () => {
    setClickedEmeralds([]);
    setIsSuperSonic(false);
    localStorage.removeItem("clickedEmeralds");
    // Reset audio elements to be ready to play again
    collectSound.currentTime = 0;
    transformSound.currentTime = 0;
  };

  return (
    <EmeraldContext.Provider
      value={{ clickedEmeralds, clickEmerald, isSuperSonic, resetEmeralds }}
    >
      {children}
    </EmeraldContext.Provider>
  );
};

export const useEmeralds = () => {
  const context = useContext(EmeraldContext);
  if (context === undefined) {
    throw new Error("useEmeralds must be used within an EmeraldProvider");
  }
  return context;
};
