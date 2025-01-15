import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";

// Initialize the availableTimes state
export const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

// Reducer function to handle state changes
const timesReducer = (
  state: string[],
  action: { type: string; payload?: string }
) => {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const selectedDate = action.payload;

      if (selectedDate) {
        // Example logic: Adjust available times based on the day of the month
        // Force UTC parsing by appending 'T00:00:00Z'
        const date = new Date(`${selectedDate}T00:00:00Z`);
        const day = date.getUTCDate();

        console.log("Selected Date:", selectedDate); // Raw input
        console.log("Parsed Date:", date); // JavaScript Date object
        console.log("Day of Month:", day);
        if (day % 2 === 0) {
          // Even days
          return ["17:00", "18:00", "19:00"];
        }
        // } else {
        //   // Odd days
        //   return ["20:00", "21:00", "22:00"];
        // }
      }

      // For now, return the same times regardless of the date
      return initializeTimes();
    }
    default:
      return state;
  }
};
export { timesReducer };

const BookingPage: React.FC = () => {
  // useReducer for availableTimes
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  // Lifted state for form data
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  // Update the times based on the selected date
  const updateTimes = (selectedDate: string) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  return (
    <BookingForm
      availableTimes={availableTimes}
      formData={formData}
      setFormData={(updatedData) => {
        // updatedData in the setFormData call is not guaranteed to have the shape of the state object
        // ({ date: string; time: string; guests: number; occasion: string; }).
        // It can be a function that receives the previous state and returns the new state.
        // or it can be an object that partially updates the state.
        if (typeof updatedData === "function") {
          setFormData((prevState) => {
            const newState = updatedData(prevState);
            if (newState.date) {
              updateTimes(newState.date);
            }
            return newState;
          });
        } else {
          setFormData(updatedData);
          if (updatedData.date) {
            updateTimes(updatedData.date);
          }
        }
      }}
    />
  );
};

export default BookingPage;
