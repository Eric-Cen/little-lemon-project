import React from "react";

interface BookingFormProps {
  availableTimes: string[];
  formData: {
    date: string;
    time: string;
    guests: number;
    occasion: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      date: string;
      time: string;
      guests: number;
      occasion: string;
    }>
  >;
  submitForm: (data: {
    date: string;
    time: string;
    guests: number;
    occasion: string;
  }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  formData,
  setFormData,
  submitForm,
}) => {
  // Handle input changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === "guests" ? parseInt(value, 10) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitForm(formData);
  };

  return (
    <form
      role="form"
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;
