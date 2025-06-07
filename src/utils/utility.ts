import { differenceInMonths } from "date-fns";

export function getYearsAndMonthsDifference(
  startDate: Date,
  endDate: Date
): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate total months difference
  const totalMonths = differenceInMonths(end, start);

  // Calculate years and remaining months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = "";
  if (years > 0) {
    result += `${years} yr${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    if (result) {
      result += " "; // Add space if years were present
    }
    result += `${months} mo${months > 1 ? "s" : ""}`;
  }

  // Handle case where difference is less than a month (optional)
  if (totalMonths === 0 && result === "") {
    return "Less than a month";
  }

  return result.trim(); // Trim any leading/trailing spaces
}
