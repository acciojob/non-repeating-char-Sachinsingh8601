function firstNonRepeatedChar(str) {
  const charCount = {};

  // Count frequency of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // if all characters are repeated
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);
alert(result !== null ? `First non-repeated character: ${result}` : "No non-repeated character found.");
