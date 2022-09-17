export const addDots = (str, length) => {
    const dots = "...";
    if (str.length > 10) {
      const sliced = str.slice(0, length);
      return sliced + dots;
    } else {
      return str;
    }
  };