document.addEventListener("DOMContentLoaded", () => {
  // 1. **Commitment Counter Logic**
  const co2DaysElement = document.getElementById("co2-days");

  // Define the start date of your CO2 reduction commitment (2025-07-07 from your saved notes)
  const startDateString = "2025-07-07";
  const startDate = new Date(startDateString);
  const today = new Date();

  // Reset time components to 00:00:00 for both dates to ensure only full days are counted
  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Calculate the difference in milliseconds
  const diffTime = today.getTime() - startDate.getTime();

  // Convert milliseconds to days. Math.ceil is used to round up to the nearest whole day.
  // We add 1 to the result because we want to count the start day (July 7th) itself.
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

  // Update the HTML element
  if (co2DaysElement) {
    // Use Math.max(0, ...) to ensure the display is never negative
    co2DaysElement.textContent = Math.max(0, diffDays).toString();
  } else {
    console.error("Element with ID 'co2-days' not found in HTML.");
  }

  // 2. **Optional: Scroll Animation**
  window.addEventListener("scroll", () => {
    // This function is ready for future JavaScript features, such as
    // applying a class to the header after scrolling past a certain point.
  });

  console.log("Landing page script loaded. CO2 commitment days calculated.");
});
