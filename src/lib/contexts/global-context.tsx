// contexts/GlobalStateContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import { UpdateDbResponse } from "../types/db-types";
import { APIError } from "../types/types";
import { CleanedUserData } from "../types/royale-api-types";
// Define the shape of your context state
interface GlobalStateContextProps {
  children: ReactNode;
}

interface GlobalState {
  battles: UpdateDbResponse | undefined;
  setBattles: (value: UpdateDbResponse) => void;
  error: APIError | string | undefined;
  setError: (value: APIError | string | undefined) => void;
  playerData: CleanedUserData | undefined;
  setPlayerData: (value: CleanedUserData | undefined) => void;
}

// Create a context with a default value
export const GlobalStateContext = createContext<GlobalState | undefined>(
  undefined
);

// Create a provider component
export const GlobalStateProvider: React.FC<GlobalStateContextProps> = ({
  children,
}) => {
  const [battles, setBattles] = useState<UpdateDbResponse | undefined>();
  const [error, setError] = useState<APIError | string | undefined>(); // State to store the error message
  const [playerData, setPlayerData] = useState<CleanedUserData | undefined>();

  const contextValue: GlobalState = {
    battles,
    setBattles,
    error,
    setError,
    playerData,
    setPlayerData,
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state context
export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
