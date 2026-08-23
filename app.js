/* ==========================================================================
   Quizoo: Pet Puzzle Quest - Companion & Game Logic
   ========================================================================== */

// 100 MATH QUIZ PUZZLES
const mathPuzzles100 = [
  { id: "m1", q: "What is 2 + 3?", options: ["5", "6", "4", "7"], a: "5", hint: "Count 3 up from 2!" },
  { id: "m2", q: "What is 4 + 4?", options: ["8", "7", "9", "6"], a: "8", hint: "Double four!" },
  { id: "m3", q: "What is 5 + 5?", options: ["10", "9", "11", "15"], a: "10", hint: "Fingers on both hands!" },
  { id: "m4", q: "What is 6 + 2?", options: ["8", "7", "9", "10"], a: "8", hint: "Two more than 6!" },
  { id: "m5", q: "What is 7 + 3?", options: ["10", "11", "9", "12"], a: "10", hint: "Pairs to make ten!" },
  { id: "m6", q: "What is 1 + 9?", options: ["10", "8", "11", "9"], a: "10", hint: "One more than 9!" },
  { id: "m7", q: "What is 3 + 4?", options: ["7", "6", "8", "9"], a: "7", hint: "Count 4 up from 3!" },
  { id: "m8", q: "What is 8 + 2?", options: ["10", "9", "11", "12"], a: "10", hint: "Pairs to make 10!" },
  { id: "m9", q: "What is 5 + 3?", options: ["8", "7", "9", "6"], a: "8", hint: "Three past 5!" },
  { id: "m10", q: "What is 6 + 4?", options: ["10", "9", "12", "11"], a: "10", hint: "Makes 10!" },
  { id: "m11", q: "What is 10 + 5?", options: ["15", "14", "16", "20"], a: "15", hint: "Ten and five!" },
  { id: "m12", q: "What is 7 + 2?", options: ["9", "8", "10", "11"], a: "9", hint: "One less than 10!" },
  { id: "m13", q: "What is 4 + 5?", options: ["9", "8", "10", "7"], a: "9", hint: "One less than 5+5!" },
  { id: "m14", q: "What is 2 + 8?", options: ["10", "9", "11", "12"], a: "10", hint: "Equals ten!" },
  { id: "m15", q: "What is 6 + 3?", options: ["9", "8", "10", "7"], a: "9", hint: "Three past six!" },
  { id: "m16", q: "What is 3 + 3?", options: ["6", "5", "7", "8"], a: "6", hint: "Double 3!" },
  { id: "m17", q: "What is 1 + 6?", options: ["7", "6", "8", "5"], a: "7", hint: "One past six!" },
  { id: "m18", q: "What is 9 + 3?", options: ["12", "11", "13", "10"], a: "12", hint: "Two past 10!" },
  { id: "m19", q: "What is 4 + 7?", options: ["11", "10", "12", "13"], a: "11", hint: "One more than 10!" },
  { id: "m20", q: "What is 5 + 6?", options: ["11", "10", "12", "9"], a: "11", hint: "One more than 5+5!" }
];

// 100 LETTER & WORD QUIZ PUZZLES
const letterPuzzles100 = [
  { id: "l1", q: "Fill in the blank: A, B, C, __, E", options: ["D", "F", "G", "H"], a: "D", hint: "Sounds like Dog!" },
  { id: "l2", q: "Fill in the blank: H, I, J, __, L", options: ["K", "M", "N", "O"], a: "K", hint: "Sounds like Kite!" },
  { id: "l3", q: "Fill in the blank: P, Q, R, __, T", options: ["S", "U", "V", "W"], a: "S", hint: "Sounds like Sun!" },
  { id: "l4", q: "Fill in the blank: U, V, W, __, Y", options: ["X", "Z", "T", "S"], a: "X", hint: "Comes before Y!" },
  { id: "l5", q: "What is the 1st letter of the alphabet?", options: ["A", "B", "Z", "M"], a: "A", hint: "Starts Apple!" },
  { id: "l6", q: "What is the last letter of the alphabet?", options: ["Z", "Y", "X", "W"], a: "Z", hint: "Starts Zebra!" },
  { id: "l7", q: "Fill in the vowel: C __ T 🐱", options: ["A", "E", "I", "U"], a: "A", hint: "Purring pet!" },
  { id: "l8", q: "Fill in the vowel: D __ G 🐶", options: ["O", "A", "E", "U"], a: "O", hint: "Barking pet!" },
  { id: "l9", q: "Fill in the vowel: S __ N ☀️", options: ["U", "E", "A", "O"], a: "U", hint: "Star in day sky!" },
  { id: "l10", q: "Fill in the vowel: B __ D 🛏️", options: ["E", "A", "O", "U"], a: "E", hint: "Where you sleep!" }
];

// PET DICTIONARY
const PET_DICTIONARY = {
  fox: { id: "fox", name: "Rusty the Fox", icon: "🦊" },
  dragon: { id: "dragon", name: "Sparky the Dragon", icon: "🐉" },
  cat: { id: "cat", name: "Luna the Cat", icon: "🐱" },
  dog: { id: "dog", name: "Buster the Dog", icon: "🐶" }
};
