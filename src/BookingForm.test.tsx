import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00"];
  const mockSetFormData = jest.fn();
  const mockFormData = {
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  };

  test("renders form fields correctly", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        formData={mockFormData}
        setFormData={mockSetFormData}
      />
    );

    // Check for form labels
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();

    // Check for available times in the dropdown
    mockAvailableTimes.forEach((time) => {
      expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
    });
  });

  test("calls setFormData on input change", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        formData={mockFormData}
        setFormData={mockSetFormData}
      />
    );

    // Simulate date input change
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2025-01-18" } });

    // Capture the function passed to setFormData
    const setFormDataCall = mockSetFormData.mock.calls[0][0];
    if (typeof setFormDataCall === "function") {
      const newState = setFormDataCall(mockFormData); // Execute the function with mockFormData
      expect(newState).toEqual({
        ...mockFormData,
        date: "2025-01-18",
      });
    }

    // Simulate guests input change
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "5" } });

    const setFormDataCallGuests = mockSetFormData.mock.calls[1][0];
    if (typeof setFormDataCallGuests === "function") {
      const newState = setFormDataCallGuests(mockFormData);
      expect(newState).toEqual({
        ...mockFormData,
        guests: 5,
      });
    }

    // Simulate occasion dropdown change
    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    const setFormDataCallOccasion = mockSetFormData.mock.calls[2][0];
    if (typeof setFormDataCallOccasion === "function") {
      const newState = setFormDataCallOccasion(mockFormData);
      expect(newState).toEqual({
        ...mockFormData,
        occasion: "Anniversary",
      });
    }
  });
});
