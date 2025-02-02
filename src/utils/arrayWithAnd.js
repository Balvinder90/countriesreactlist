function arrayWithAnd(arr, str) {
  if (arr.length > 1) {
    const last = arr.slice().pop();
    const joined = `${str} ${arr.join(", ")} and ${last}`;
    return joined;
  } else {
    return `${str} ${arr.join("")}`;
  }
}

export { arrayWithAnd };
