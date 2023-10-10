// common function used to convert into required date format
export const convertToDate = (number) => {
    const unixTimestamp = number * 1000; // Convert to milliseconds
    const date = new Date(unixTimestamp);
    // Format the date as you desire
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const dateObj = new Date(year, month, day, hours, minutes); // Note that months are zero-based (0 = January, 11 = December)

    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formattedDate = dateObj.toLocaleString("en-US", options);
    return formattedDate.toLocaleString();
  };