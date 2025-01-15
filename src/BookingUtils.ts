import { fetchAPI } from "./api";

// Initialize the availableTimes state
export const initializeTimes = (): string[] => {
  const today = new Date();
  return fetchAPI(today);
};

// Reducer function to handle state changes
export const timesReducer = (
  state: string[],
  action: { type: string; payload?: string }
): string[] => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const selectedDate = action.payload;
      if (selectedDate) {
        const date = new Date(`${selectedDate}T00:00:00Z`);
        return fetchAPI(date);
      }
      return initializeTimes();
    }
    default:
      return state;
  }
};
