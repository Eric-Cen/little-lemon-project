import { initializeTimes, timesReducer } from "../BookingUtils";

describe("initializeTimes", () => {
  test("should return the initial list of available times", () => {
    const initialTimes = initializeTimes();
    expect(initialTimes.length).toBeGreaterThan(0);
  });
});

describe("timesReducer", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  test("should return the randomly generated times when UPDATE_TIMES action is dispatched", () => {
    const action = { type: "UPDATE_TIMES", payload: "2025-01-17" };
    const newState = timesReducer(initialState, action);

    expect(newState.length).toBeGreaterThan(0);
  });
});
