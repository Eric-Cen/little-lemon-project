import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";
import { useNavigate } from "react-router-dom";
import { initializeTimes, timesReducer } from "./BookingUtils";

const BookingPage: React.FC<{}> = () => {
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

  const navigate = useNavigate();
  const submitForm = (data: typeof formData): void => {
    console.log("Submitting form in BookingPage:", data);
    if (submitAPI(data)) {
      navigate("/confirmed"); // Navigate to the confirmation page if API returns true
    } else {
      alert("Failed to confirm the booking. Please try again.");
    }
  };

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
      submitForm={submitForm}
    />
  );
};

export default BookingPage;
