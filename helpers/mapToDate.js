const mapToDate = (data) => {
    if (data === null || data === undefined) {
      return data;
    }
  
    if (
      typeof data === "object" &&
      data._seconds !== undefined &&
      data._nanoseconds !== undefined
    ) {
      return new Date(data._seconds * 1000); // Convert seconds to milliseconds
    }
  
    // Handle arrays or nested objects
    if (Array.isArray(data)) {
      return data.map((item) => mapToDate(item));
    }
  
    if (typeof data === "object") {
      return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, mapToDate(value)])
      );
    }
  
    return data;
};
  
module.exports = mapToDate
  