/*
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

 

Example 1:

Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
Example 2:

Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
Example 3:

Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
 

Constraints:

1 <= word.length <= 250
word consists of lowercase English letters.
ch is a lowercase English letter.

*/

function reverseSegment(word, ch) {
  // Find the index of the first occurrence of the character ch
  let index = -1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i; // if I find the ch.. the index is going be that index.. here the ch =d, is in the index 3.. So the value of index has changed to 3 from -1. 
      break;
    }
  }

  // If the character ch is not found, return the original word. If nothing is found then JS returns -1
  if (index === -1) {
    return word;
  }

  // Reverse the segment of the string up to the first occurrence of ch
  let result = "";
  for (let i = index; i >= 0; i--) {
    result += word[i];
    console.log(result);
  }
console.log(result);

  for (let i = index + 1; i < word.length; i++) {
    result += word[i];
    console.log(result);
  }

  console.log(result);
  return result;
}

const word = "abcdefd";
const ch = "d";
const result = reverseSegment(word, ch);
console.log(result);

/*

This function loops through the input string to find the index of the first occurrence of the given character. If the character is not found, it returns the original string. If the character is found, it reverses the segment of the string from the beginning up to the first occurrence of the character by looping backwards through the segment up to the index of the character and then forwards through the remaining part of the string. Finally, it returns the reversed string.
*/
