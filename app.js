/* ==========================================================================
   Quizoo - Core Logic & Animated Virtual Sidekick Pet Controller
   Datasets: mathPuzzles100 (100), letterPuzzles100 (100), mixedPuzzles100 (100)
   Category Selection (Math 🔢, Letter 🔤, Mixed 🎲)
   Pets: Sparky 🐉, Rusty 🦊, Luna 🐱, Buster 🐶, Pandy 🐼, Beep 🤖
   Storage: localStorage + Supabase Cloud Persistence
   Created by Raza ✨
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
  { id: "m20", q: "What is 5 + 6?", options: ["11", "10", "12", "9"], a: "11", hint: "One more than 5+5!" },
  { id: "m21", q: "What is 8 + 4?", options: ["12", "11", "13", "14"], a: "12", hint: "Four past 8!" },
  { id: "m22", q: "What is 10 + 10?", options: ["20", "19", "21", "30"], a: "20", hint: "Two tens!" },
  { id: "m23", q: "What is 7 + 5?", options: ["12", "11", "13", "14"], a: "12", hint: "Two past ten!" },
  { id: "m24", q: "What is 9 + 4?", options: ["13", "12", "14", "15"], a: "13", hint: "Three past ten!" },
  { id: "m25", q: "What is 8 + 8?", options: ["16", "15", "17", "18"], a: "16", hint: "Double eight!" },
  { id: "m26", q: "What is 5 - 2?", options: ["3", "2", "4", "1"], a: "3", hint: "Take 2 away from 5!" },
  { id: "m27", q: "What is 10 - 5?", options: ["5", "4", "6", "3"], a: "5", hint: "Half of ten!" },
  { id: "m28", q: "What is 8 - 3?", options: ["5", "4", "6", "7"], a: "5", hint: "Take 3 from 8!" },
  { id: "m29", q: "What is 6 - 4?", options: ["2", "3", "1", "4"], a: "2", hint: "Take 4 from 6!" },
  { id: "m30", q: "What is 9 - 1?", options: ["8", "7", "9", "6"], a: "8", hint: "Number before 9!" },
  { id: "m31", q: "What is 7 - 3?", options: ["4", "3", "5", "2"], a: "4", hint: "Take 3 from 7!" },
  { id: "m32", q: "What is 10 - 2?", options: ["8", "7", "9", "6"], a: "8", hint: "Two less than 10!" },
  { id: "m33", q: "What is 4 - 2?", options: ["2", "1", "3", "0"], a: "2", hint: "Half of 4!" },
  { id: "m34", q: "What is 8 - 4?", options: ["4", "3", "5", "6"], a: "4", hint: "Half of 8!" },
  { id: "m35", q: "What is 6 - 3?", options: ["3", "2", "4", "5"], a: "3", hint: "Half of 6!" },
  { id: "m36", q: "What is 10 - 7?", options: ["3", "4", "2", "5"], a: "3", hint: "Count 7 up to 10!" },
  { id: "m37", q: "What is 9 - 5?", options: ["4", "3", "5", "6"], a: "4", hint: "Take 5 from 9!" },
  { id: "m38", q: "What is 7 - 5?", options: ["2", "3", "1", "4"], a: "2", hint: "Difference of 7 and 5!" },
  { id: "m39", q: "What is 12 - 2?", options: ["10", "9", "11", "8"], a: "10", hint: "Drop the 2!" },
  { id: "m40", q: "What is 15 - 5?", options: ["10", "11", "9", "8"], a: "10", hint: "Leaves a ten!" },
  { id: "m41", q: "What is 8 - 6?", options: ["2", "3", "1", "4"], a: "2", hint: "Count 6 up to 8!" },
  { id: "m42", q: "What is 11 - 3?", options: ["8", "7", "9", "6"], a: "8", hint: "Three back from 11!" },
  { id: "m43", q: "What is 10 - 4?", options: ["6", "5", "7", "4"], a: "6", hint: "Pairs with 4!" },
  { id: "m44", q: "What is 9 - 7?", options: ["2", "3", "1", "4"], a: "2", hint: "Count 7 up to 9!" },
  { id: "m45", q: "What is 14 - 4?", options: ["10", "9", "11", "8"], a: "10", hint: "Take 4 from 14!" },
  { id: "m46", q: "What is 7 - 7?", options: ["0", "1", "7", "14"], a: "0", hint: "Take away everything!" },
  { id: "m47", q: "What is 13 - 3?", options: ["10", "9", "11", "8"], a: "10", hint: "Take 3 from 13!" },
  { id: "m48", q: "What is 16 - 6?", options: ["10", "11", "9", "12"], a: "10", hint: "Take 6 from 16!" },
  { id: "m49", q: "What is 10 - 8?", options: ["2", "3", "1", "4"], a: "2", hint: "Count 8 up to 10!" },
  { id: "m50", q: "What is 20 - 10?", options: ["10", "5", "15", "0"], a: "10", hint: "Half of twenty!" },
  { id: "m51", q: "How many sides does a triangle have?", options: ["3", "4", "5", "6"], a: "3", hint: "Like a pizza slice!" },
  { id: "m52", q: "How many sides does a rectangle have?", options: ["4", "3", "5", "6"], a: "4", hint: "Two long, two short!" },
  { id: "m53", q: "How many corners does a circle have?", options: ["0", "1", "3", "4"], a: "0", hint: "Round with no corners!" },
  { id: "m54", q: "How many sides does a pentagon have?", options: ["5", "6", "4", "8"], a: "5", hint: "Penta means five!" },
  { id: "m55", q: "How many sides does an octagon have?", options: ["8", "6", "7", "10"], a: "8", hint: "Like a stop sign!" },
  { id: "m56", q: "How many corners does a square have?", options: ["4", "3", "5", "0"], a: "4", hint: "Four corners!" },
  { id: "m57", q: "What shape is a standard soccer ball?", options: ["Sphere", "Cube", "Cone", "Cylinder"], a: "Sphere", hint: "A 3D ball shape!" },
  { id: "m58", q: "What shape is a standard playing die?", options: ["Cube", "Sphere", "Pyramid", "Cone"], a: "Cube", hint: "Has 6 square faces!" },
  { id: "m59", q: "What shape is a waffle ice cream cone?", options: ["Cone", "Cylinder", "Cube", "Sphere"], a: "Cone", hint: "Pointy bottom!" },
  { id: "m60", q: "What shape is a soda can?", options: ["Cylinder", "Cone", "Cube", "Pyramid"], a: "Cylinder", hint: "Round tube!" },
  { id: "m61", q: "How many sides does a hexagon have?", options: ["6", "5", "7", "8"], a: "6", hint: "Like beehive honeycomb!" },
  { id: "m62", q: "Which shape has 4 equal straight sides?", options: ["Square", "Rectangle", "Oval", "Triangle"], a: "Square", hint: "All sides are equal!" },
  { id: "m63", q: "What shape looks like an egg?", options: ["Oval", "Square", "Triangle", "Diamond"], a: "Oval", hint: "Stretched circle!" },
  { id: "m64", q: "How many points does a classic star have?", options: ["5", "4", "6", "8"], a: "5", hint: "Five points!" },
  { id: "m65", q: "How many faces does a cube have?", options: ["6", "4", "8", "12"], a: "6", hint: "Numbered 1 to 6 on dice!" },
  { id: "m66", q: "A regular door is shaped like a:", options: ["Rectangle", "Circle", "Triangle", "Hexagon"], a: "Rectangle", hint: "Tall 4-sided shape!" },
  { id: "m67", q: "A round wall clock is shaped like a:", options: ["Circle", "Triangle", "Star", "Heart"], a: "Circle", hint: "Round loop!" },
  { id: "m68", q: "A slice of watermelon looks like a:", options: ["Triangle", "Square", "Oval", "Rectangle"], a: "Triangle", hint: "Pointed at one end!" },
  { id: "m69", q: "How many total sides: 1 square + 1 triangle?", options: ["7", "6", "8", "5"], a: "7", hint: "4 sides + 3 sides!" },
  { id: "m70", q: "How many straight sides on an oval?", options: ["0", "2", "4", "1"], a: "0", hint: "It is curved!" },
  { id: "m71", q: "What comes next: 2, 4, 6, 8, ___?", options: ["10", "9", "11", "12"], a: "10", hint: "Count by 2s!" },
  { id: "m72", q: "What comes next: 5, 10, 15, 20, ___?", options: ["25", "30", "22", "24"], a: "25", hint: "Count by 5s!" },
  { id: "m73", q: "What comes next: 10, 20, 30, 40, ___?", options: ["50", "60", "45", "100"], a: "50", hint: "Count by 10s!" },
  { id: "m74", q: "What comes next: 1, 3, 5, 7, ___?", options: ["9", "8", "10", "11"], a: "9", hint: "Odd numbers!" },
  { id: "m75", q: "Which number is the biggest?", options: ["78", "45", "62", "19"], a: "78", hint: "Look at the tens digit!" },
  { id: "m76", q: "Which number is the smallest?", options: ["12", "21", "35", "53"], a: "12", hint: "Less than twenty!" },
  { id: "m77", q: "What is 2 × 3?", options: ["6", "5", "8", "7"], a: "6", hint: "2 + 2 + 2!" },
  { id: "m78", q: "What is 5 × 2?", options: ["10", "12", "8", "15"], a: "10", hint: "Two fives!" },
  { id: "m79", q: "What is 10 × 1?", options: ["10", "1", "100", "11"], a: "10", hint: "Multiply by one!" },
  { id: "m80", q: "What is 4 × 2?", options: ["8", "6", "10", "7"], a: "8", hint: "Double four!" },
  { id: "m81", q: "What is 3 × 3?", options: ["9", "6", "8", "12"], a: "9", hint: "Three groups of 3!" },
  { id: "m82", q: "What number is halfway between 0 and 10?", options: ["5", "4", "6", "3"], a: "5", hint: "Half of 10!" },
  { id: "m83", q: "What number comes right before 50?", options: ["49", "48", "51", "40"], a: "49", hint: "One less than 50!" },
  { id: "m84", q: "What number comes right after 99?", options: ["100", "98", "101", "109"], a: "100", hint: "One hundred!" },
  { id: "m85", q: "You have 4 apples and eat 1. How many left?", options: ["3", "2", "4", "5"], a: "3", hint: "4 minus 1!" },
  { id: "m86", q: "You have 2 dogs and adopt 3 more. Total dogs?", options: ["5", "6", "4", "7"], a: "5", hint: "2 plus 3!" },
  { id: "m87", q: "How many pairs in 6 single socks?", options: ["3", "2", "4", "6"], a: "3", hint: "6 divided by 2!" },
  { id: "m88", q: "How many wheels on 2 regular cars?", options: ["8", "4", "6", "10"], a: "8", hint: "4 wheels each!" },
  { id: "m89", q: "How many wheels on 3 bicycles?", options: ["6", "4", "8", "5"], a: "6", hint: "2 wheels each!" },
  { id: "m90", q: "How many fingers on 2 hands combined?", options: ["10", "8", "12", "5"], a: "10", hint: "5 on each hand!" },
  { id: "m91", q: "How many hours in one full day?", options: ["24", "12", "48", "20"], a: "24", hint: "Day plus night!" },
  { id: "m92", q: "How many minutes in one hour?", options: ["60", "100", "30", "50"], a: "60", hint: "Sixty minutes!" },
  { id: "m93", q: "How many cents in a dime?", options: ["10", "5", "20", "25"], a: "10", hint: "Ten cents!" },
  { id: "m94", q: "How many quarters make 1 dollar?", options: ["4", "2", "5", "10"], a: "4", hint: "Four 25-cent coins!" },
  { id: "m95", q: "Which number is an EVEN number?", options: ["6", "7", "9", "5"], a: "6", hint: "Can split evenly!" },
  { id: "m96", q: "Which number is an ODD number?", options: ["7", "4", "8", "2"], a: "7", hint: "Has one left over!" },
  { id: "m97", q: "What is 0 + 15?", options: ["15", "0", "1", "16"], a: "15", hint: "Adding zero changes nothing!" },
  { id: "m98", q: "What is 7 - 0?", options: ["7", "0", "6", "8"], a: "7", hint: "Subtracting zero changes nothing!" },
  { id: "m99", q: "What is double 7?", options: ["14", "12", "15", "16"], a: "14", hint: "7 + 7!" },
  { id: "m100", q: "What is 100 - 50?", options: ["50", "40", "60", "25"], a: "50", hint: "Half of 100!" }
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
  { id: "l10", q: "Fill in the vowel: B __ D 🛏️", options: ["E", "A", "O", "U"], a: "E", hint: "Where you sleep!" },
  { id: "l11", q: "Fill in the vowel: P __ G 🐷", options: ["I", "A", "E", "U"], a: "I", hint: "Pink farm animal!" },
  { id: "l12", q: "Which letter starts 'Elephant'?", options: ["E", "A", "I", "O"], a: "E", hint: "Letter E!" },
  { id: "l13", q: "Which letter starts 'Monkey'?", options: ["M", "N", "W", "V"], a: "M", hint: "Letter M!" },
  { id: "l14", q: "Which letter starts 'Rainbow'?", options: ["R", "B", "P", "D"], a: "R", hint: "Letter R!" },
  { id: "l15", q: "Which letter starts 'Tiger'?", options: ["T", "D", "P", "F"], a: "T", hint: "Letter T!" },
  { id: "l16", q: "Which of these is a VOWEL?", options: ["E", "B", "T", "M"], a: "E", hint: "A, E, I, O, U!" },
  { id: "l17", q: "Which of these is a VOWEL?", options: ["O", "K", "L", "R"], a: "O", hint: "Round vowel!" },
  { id: "l18", q: "What letter comes right after 'M'?", options: ["N", "L", "O", "P"], a: "N", hint: "M, then N!" },
  { id: "l19", q: "What letter comes right before 'Z'?", options: ["Y", "X", "W", "V"], a: "Y", hint: "Second to last!" },
  { id: "l20", q: "What letter comes right after 'G'?", options: ["H", "F", "I", "J"], a: "H", hint: "G, then H!" },
  { id: "l21", q: "What letter starts 'Octopus'?", options: ["O", "U", "C", "A"], a: "O", hint: "Starts with O!" },
  { id: "l22", q: "What letter starts 'Umbrella'?", options: ["U", "V", "W", "Y"], a: "U", hint: "Starts with U!" },
  { id: "l23", q: "What letter starts 'Kangaroo'?", options: ["K", "C", "G", "Q"], a: "K", hint: "Starts with K!" },
  { id: "l24", q: "What letter starts 'Dolphin'?", options: ["D", "B", "P", "T"], a: "D", hint: "Starts with D!" },
  { id: "l25", q: "What letter starts 'Guitar'?", options: ["G", "J", "Q", "C"], a: "G", hint: "Starts with G!" },
  { id: "l26", q: "Unscramble: T A R S 🌟", options: ["STAR", "RATS", "ARTS", "TARS"], a: "STAR", hint: "Shines in space!" },
  { id: "l27", q: "Unscramble: O O N M 🌙", options: ["MOON", "MONO", "NOON", "MOONK"], a: "MOON", hint: "Night sky orb!" },
  { id: "l28", q: "Unscramble: E E R T 🌳", options: ["TREE", "TEER", "REET", "FREE"], a: "TREE", hint: "Has green leaves!" },
  { id: "l29", q: "Unscramble: O K O B 📚", options: ["BOOK", "COOK", "LOOK", "HOOK"], a: "BOOK", hint: "Read stories!" },
  { id: "l30", q: "Unscramble: K I M L 🥛", options: ["MILK", "LIMK", "KLIM", "MICK"], a: "MILK", hint: "White drink!" },
  { id: "l31", q: "Unscramble: S H I F 🐟", options: ["FISH", "SHIF", "HIFS", "WISH"], a: "FISH", hint: "Swims with fins!" },
  { id: "l32", q: "Unscramble: D I R B 🐦", options: ["BIRD", "BRID", "DIRB", "BARD"], a: "BIRD", hint: "Has wings and sings!" },
  { id: "l33", q: "Unscramble: O U H S E 🏠", options: ["HOUSE", "HOES", "SHOUE", "HORSE"], a: "HOUSE", hint: "Where people live!" },
  { id: "l34", q: "Unscramble: T I E K 🪁", options: ["KITE", "TIKE", "TEIK", "BITE"], a: "KITE", hint: "Flies in wind!" },
  { id: "l35", q: "Unscramble: P P L E A 🍎", options: ["APPLE", "PALEP", "LEAPP", "MAPLE"], a: "APPLE", hint: "Crisp red fruit!" },
  { id: "l36", q: "Unscramble: L A L B ⚽", options: ["BALL", "LALL", "ALBL", "CALL"], a: "BALL", hint: "Toy for kicking!" },
  { id: "l37", q: "Unscramble: K A C E 🎂", options: ["CAKE", "BAKE", "LAKE", "MAKE"], a: "CAKE", hint: "Birthday dessert!" },
  { id: "l38", q: "Unscramble: N I A R 🌧️", options: ["RAIN", "IRAN", "NARI", "TRAIN"], a: "RAIN", hint: "Sky water drops!" },
  { id: "l39", q: "Unscramble: N O W S ❄️", options: ["SNOW", "NOWS", "OWNS", "SHOW"], a: "SNOW", hint: "Cold white flakes!" },
  { id: "l40", q: "Unscramble: P I H S 🚢", options: ["SHIP", "PISH", "HIPS", "CHIP"], a: "SHIP", hint: "Big ocean boat!" },
  { id: "l41", q: "Unscramble: O R G F 🐸", options: ["FROG", "FORG", "GROF", "FOG"], a: "FROG", hint: "Green hopper!" },
  { id: "l42", q: "Unscramble: B O R T O 🤖", options: ["ROBOT", "TORBO", "BROTO", "ROOT"], a: "ROBOT", hint: "Mechanical friend!" },
  { id: "l43", q: "Unscramble: E M A G 🎮", options: ["GAME", "MAGE", "MEGA", "FAME"], a: "GAME", hint: "Fun to play!" },
  { id: "l44", q: "Unscramble: L I M E S 😊", options: ["SMILE", "SLIME", "MILES", "LIMES"], a: "SMILE", hint: "Happy face!" },
  { id: "l45", q: "Unscramble: G E T R I 🐯", options: ["TIGER", "GRIEF", "GIERT", "TIGRE"], a: "TIGER", hint: "Orange striped cat!" },
  { id: "l46", q: "Unscramble: L O U C D ☁️", options: ["CLOUD", "COULD", "CLOD", "COLD"], a: "CLOUD", hint: "Fluffy in sky!" },
  { id: "l47", q: "Unscramble: T A P N L 🪴", options: ["PLANT", "PLANTY", "PLAN", "PLAT"], a: "PLANT", hint: "Grows in pots!" },
  { id: "l48", q: "Unscramble: H A E C B 🏖️", options: ["BEACH", "CHBEA", "BACH", "BLEACH"], a: "BEACH", hint: "Sand and waves!" },
  { id: "l49", q: "Unscramble: S C I U M 🎵", options: ["MUSIC", "SCUM", "SUMIC", "MUCIS"], a: "MUSIC", hint: "Songs and tunes!" },
  { id: "l50", q: "Unscramble: E N O Y H 🍯", options: ["HONEY", "HONEYS", "HOEY", "HENY"], a: "HONEY", hint: "Sweet bee syrup!" },
  { id: "l51", q: "Rhymes with 'Frog', barks. What word?", options: ["Dog", "Log", "Fog", "Bog"], a: "Dog", hint: "Tail wagger!" },
  { id: "l52", q: "Rhymes with 'Bake', hisses. What word?", options: ["Snake", "Cake", "Lake", "Rake"], a: "Snake", hint: "Slithering reptile!" },
  { id: "l53", q: "Rhymes with 'Boat', has horns. What word?", options: ["Goat", "Coat", "Moat", "Float"], a: "Goat", hint: "Farm climber!" },
  { id: "l54", q: "Rhymes with 'Star', has wheels. What word?", options: ["Car", "Jar", "Far", "Bar"], a: "Car", hint: "Drives on road!" },
  { id: "l55", q: "Rhymes with 'House', squeaks. What word?", options: ["Mouse", "Blouse", "Louse", "Moose"], a: "Mouse", hint: "Eats cheese!" },
  { id: "l56", q: "Rhymes with 'Box', bushy tail. What word?", options: ["Fox", "Sox", "Rocks", "Locks"], a: "Fox", hint: "Clever red animal!" },
  { id: "l57", q: "Rhymes with 'Hat', purrs. What word?", options: ["Cat", "Bat", "Rat", "Mat"], a: "Cat", hint: "Meowing pet!" },
  { id: "l58", q: "Rhymes with 'Bee', has trunk. What word?", options: ["Tree", "See", "Free", "Knee"], a: "Tree", hint: "Grows tall!" },
  { id: "l59", q: "Rhymes with 'Ring', wears crown. Who?", options: ["King", "Sing", "Wing", "String"], a: "King", hint: "Royal ruler!" },
  { id: "l60", q: "Rhymes with 'Spoon', glows in night. What word?", options: ["Moon", "Noon", "Dune", "Tune"], a: "Moon", hint: "In orbit!" },
  { id: "l61", q: "Rhymes with 'Bed', color of apples. What word?", options: ["Red", "Fed", "Led", "Shed"], a: "Red", hint: "Warm color!" },
  { id: "l62", q: "Rhymes with 'Dish', swims. What word?", options: ["Fish", "Wish", "Swish", "Wash"], a: "Fish", hint: "Has gills!" },
  { id: "l63", q: "Rhymes with 'Bear', you sit on it. What word?", options: ["Chair", "Hair", "Pair", "Stair"], a: "Chair", hint: "Desk seat!" },
  { id: "l64", q: "Rhymes with 'Clock', opened by key. What word?", options: ["Lock", "Sock", "Rock", "Block"], a: "Lock", hint: "Keeps safe!" },
  { id: "l65", q: "Rhymes with 'Train', sky drops. What word?", options: ["Rain", "Grain", "Pain", "Lane"], a: "Rain", hint: "Wet weather!" },
  { id: "l66", q: "Rhymes with 'Pen', lays eggs. What word?", options: ["Hen", "Ten", "Men", "Den"], a: "Hen", hint: "Female chicken!" },
  { id: "l67", q: "Rhymes with 'Bug', friendly squeeze. What word?", options: ["Hug", "Mug", "Rug", "Jug"], a: "Hug", hint: "Warm cuddle!" },
  { id: "l68", q: "Rhymes with 'Pan', blows cool breeze. What word?", options: ["Fan", "Man", "Can", "Van"], a: "Fan", hint: "Spins air!" },
  { id: "l69", q: "Rhymes with 'Cap', short daytime sleep. What word?", options: ["Nap", "Map", "Tap", "Lap"], a: "Nap", hint: "Quick rest!" },
  { id: "l70", q: "Rhymes with 'Pin', get 1st place. What word?", options: ["Win", "Tin", "Fin", "Bin"], a: "Win", hint: "Get victory!" },
  { id: "l71", q: "Rhymes with 'Sock', hard stone. What word?", options: ["Rock", "Lock", "Dock", "Block"], a: "Rock", hint: "Found on ground!" },
  { id: "l72", q: "Rhymes with 'Bun', gives daylight. What word?", options: ["Sun", "Run", "Fun", "Gun"], a: "Sun", hint: "Day star!" },
  { id: "l73", q: "Rhymes with 'Mop', bunny jump. What word?", options: ["Hop", "Top", "Pop", "Stop"], a: "Hop", hint: "Bounce up!" },
  { id: "l74", q: "Rhymes with 'Net', animal friend at home. What word?", options: ["Pet", "Wet", "Set", "Bet"], a: "Pet", hint: "Cat or dog!" },
  { id: "l75", q: "Rhymes with 'Log', morning mist. What word?", options: ["Fog", "Dog", "Jog", "Bog"], a: "Fog", hint: "Hazy air!" },
  { id: "l76", q: "Opposite of 'HOT' is:", options: ["Cold", "Warm", "Dry", "Wet"], a: "Cold", hint: "Like ice!" },
  { id: "l77", q: "Opposite of 'BIG' is:", options: ["Small", "Huge", "Tall", "Long"], a: "Small", hint: "Tiny!" },
  { id: "l78", q: "Opposite of 'HAPPY' is:", options: ["Sad", "Glad", "Joyful", "Excited"], a: "Sad", hint: "Frowning!" },
  { id: "l79", q: "Opposite of 'FAST' is:", options: ["Slow", "Quick", "Speedy", "Rapid"], a: "Slow", hint: "Like a turtle!" },
  { id: "l80", q: "Opposite of 'UP' is:", options: ["Down", "Left", "Right", "High"], a: "Down", hint: "Towards floor!" },
  { id: "l81", q: "Opposite of 'DAY' is:", options: ["Night", "Morning", "Noon", "Sun"], a: "Night", hint: "When stars appear!" },
  { id: "l82", q: "Opposite of 'LIGHT' is:", options: ["Dark", "Bright", "Sunny", "White"], a: "Dark", hint: "No lamps on!" },
  { id: "l83", q: "Opposite of 'OPEN' is:", options: ["Closed", "Ajar", "Inside", "Wide"], a: "Closed", hint: "Shut tight!" },
  { id: "l84", q: "Opposite of 'QUIET' is:", options: ["Loud", "Silent", "Calm", "Soft"], a: "Loud", hint: "Noisy!" },
  { id: "l85", q: "Opposite of 'CLEAN' is:", options: ["Dirty", "Neat", "Tidy", "Fresh"], a: "Dirty", hint: "Muddy!" },
  { id: "l86", q: "Opposite of 'WET' is:", options: ["Dry", "Soaked", "Damp", "Rainy"], a: "Dry", hint: "After towel!" },
  { id: "l87", q: "Opposite of 'IN' is:", options: ["Out", "Under", "Beside", "Near"], a: "Out", hint: "Outside!" },
  { id: "l88", q: "Opposite of 'HARD' is:", options: ["Soft", "Stiff", "Tough", "Solid"], a: "Soft", hint: "Like pillows!" },
  { id: "l89", q: "Opposite of 'HEAVY' is:", options: ["Light", "Huge", "Strong", "Big"], a: "Light", hint: "Easy to lift!" },
  { id: 90, q: "Opposite of 'START' is:", options: ["Finish", "Begin", "Go", "Play"], a: "Finish", hint: "End line!" },
  { id: "l91", q: "A baby dog is called a:", options: ["Puppy", "Kitten", "Calf", "Cub"], a: "Puppy", hint: "Cute little barker!" },
  { id: "l92", q: "A baby cat is called a:", options: ["Kitten", "Puppy", "Chick", "Duckling"], a: "Kitten", hint: "Tiny purrer!" },
  { id: "l93", q: "A baby chicken is called a:", options: ["Chick", "Duckling", "Bunny", "Piglet"], a: "Chick", hint: "Fluffy yellow baby!" },
  { id: "l94", q: "A place full of books to read is a:", options: ["Library", "Bakery", "Gym", "Cinema"], a: "Library", hint: "Quiet book room!" },
  { id: "l95", q: "A doctor for animals is a:", options: ["Vet", "Dentist", "Chef", "Pilot"], a: "Vet", hint: "Short for veterinarian!" },
  { id: "l96", q: "A person who flies planes is a:", options: ["Pilot", "Driver", "Sailor", "Captain"], a: "Pilot", hint: "In the cockpit!" },
  { id: "l97", q: "Cooking bread in an oven is called:", options: ["Baking", "Freezing", "Chopping", "Boiling"], a: "Baking", hint: "Warm oven cooking!" },
  { id: "l98", q: "A lemon tastes:", options: ["Sour", "Sweet", "Salty", "Spicy"], a: "Sour", hint: "Makes lips pucker!" },
  { id: "l99", q: "Candy and honey taste:", options: ["Sweet", "Sour", "Bitter", "Salty"], a: "Sweet", hint: "Sugary!" },
  { id: "l100", q: "A bird builds a home called a:", options: ["Nest", "Cave", "Burrow", "Hive"], a: "Nest", hint: "Made of twigs!" }
];

// 100 MIXED TRIVIA & RIDDLE PUZZLES
const mixedPuzzles100 = [
  { id: "x1", q: "🌧️ + 🏹 = ?", options: ["Rainbow", "Raindrop", "Bow", "Cloud"], a: "Rainbow", hint: "Sky colors after rain!" },
  { id: "x2", q: "🥞 + 🎂 = ?", options: ["Cupcake", "Pancake", "Bakery", "Cookie"], a: "Cupcake", hint: "Cake in a cup!" },
  { id: "x3", q: "🐱 + 🐟 = ?", options: ["Catfish", "Shark", "Goldfish", "Kitten"], a: "Catfish", hint: "Fish named after a pet!" },
  { id: "x4", q: "🧊 + 🍦 = ?", options: ["Ice Cream", "Ice Pop", "Snowman", "Juice"], a: "Ice Cream", hint: "Cold summer treat!" },
  { id: "x5", q: "⚽ + 👟 = ?", options: ["Football Boots", "Sneakers", "Goal", "Socks"], a: "Football Boots", hint: "Soccer shoes!" },
  { id: "x6", q: "🌊 + 🐎 = ?", options: ["Seahorse", "Dolphin", "Starfish", "Shark"], a: "Seahorse", hint: "Ocean pony!" },
  { id: "x7", q: "☀️ + 🌻 = ?", options: ["Sunflower", "Daisy", "Rose", "Cactus"], a: "Sunflower", hint: "Tall yellow flower!" },
  { id: "x8", q: "🔥 + 🪰 = ?", options: ["Firefly", "Mosquito", "Dragon", "Bee"], a: "Firefly", hint: "Glowing night bug!" },
  { id: "x9", q: "🌙 + 🚶 = ?", options: ["Moonwalk", "Sleepwalk", "Night Run", "Star Jump"], a: "Moonwalk", hint: "Backwards dance move!" },
  { id: "x10", q: "🍎 + 🥧 = ?", options: ["Apple Pie", "Fruit Salad", "Cake", "Tart"], a: "Apple Pie", hint: "Baked apple dessert!" },
  { id: "x11", q: "🌲 + 🍎 = ?", options: ["Pineapple", "Apple Tree", "Coconut", "Watermelon"], a: "Pineapple", hint: "Spiky yellow fruit!" },
  { id: "x12", q: "🍯 + 🐝 = ?", options: ["Honeybee", "Wasp", "Butterfly", "Ant"], a: "Honeybee", hint: "Makes honey!" },
  { id: "x13", q: "⭐ + 🐟 = ?", options: ["Starfish", "Jellyfish", "Crab", "Octopus"], a: "Starfish", hint: "Star-shaped sea creature!" },
  { id: "x14", q: "🦆 + 🪺 = ?", options: ["Duck Egg", "Nest", "Duckling", "Bird"], a: "Duck Egg", hint: "Duck egg in nest!" },
  { id: "x15", q: "🥛 + 🍫 = ?", options: ["Chocolate Milk", "Hot Cocoa", "Candy Bar", "Milkshake"], a: "Chocolate Milk", hint: "Brown sweet milk!" },
  { id: "x16", q: "🚪 + 🔔 = ?", options: ["Doorbell", "Knocker", "Alarm", "Key"], a: "Doorbell", hint: "Ring before entering!" },
  { id: "x17", q: "🧲 + ⚙️ = ?", options: ["Magnet", "Clock", "Engine", "Robot"], a: "Magnet", hint: "Pulls metal!" },
  { id: "x18", q: "🫖 + 🥄 = ?", options: ["Teaspoon", "Cup", "Kettle", "Sugar"], a: "Teaspoon", hint: "Stirs tea!" },
  { id: "x19", q: "🍓 + 🍰 = ?", options: ["Strawberry Cake", "Berry Tart", "Pie", "Donut"], a: "Strawberry Cake", hint: "Berry dessert!" },
  { id: "x20", q: "🏎️ + 🏁 = ?", options: ["Finish Line", "Pit Stop", "Race Track", "Go-Kart"], a: "Finish Line", hint: "End of race!" },
  { id: "x21", q: "I have a long trunk and big ears. Who am I?", options: ["Elephant", "Giraffe", "Monkey", "Hippo"], a: "Elephant", hint: "Giant gray mammal!" },
  { id: "x22", q: "I have a very long neck to reach leaves. Who am I?", options: ["Giraffe", "Zebra", "Horse", "Camel"], a: "Giraffe", hint: "Tallest animal!" },
  { id: "x23", q: "I wear a tuxedo, cannot fly, and swim in ice. Who am I?", options: ["Penguin", "Puffin", "Seagull", "Owl"], a: "Penguin", hint: "Waddles on ice!" },
  { id: "x24", q: "I carry my home on my back and move slowly. Who am I?", options: ["Snail", "Turtle", "Crab", "Frog"], a: "Snail", hint: "Leaves a shiny trail!" },
  { id: "x25", q: "I have black and white stripes and run fast. Who am I?", options: ["Zebra", "Tiger", "Panda", "Skunk"], a: "Zebra", hint: "Wild striped horse!" },
  { id: "x26", q: "I sleep upside down in dark caves. Who am I?", options: ["Bat", "Owl", "Sloth", "Koala"], a: "Bat", hint: "Flies at night!" },
  { id: "x27", q: "I have a big mane and roar loudly. Who am I?", options: ["Lion", "Tiger", "Bear", "Cheetah"], a: "Lion", hint: "King of beasts!" },
  { id: "x28", q: "I hop on two legs with a pouch for baby. Who am I?", options: ["Kangaroo", "Rabbit", "Frog", "Wallaby"], a: "Kangaroo", hint: "From Australia!" },
  { id: "x29", q: "I have 8 legs and weave sticky webs. Who am I?", options: ["Spider", "Ant", "Beetle", "Centipede"], a: "Spider", hint: "Eight-legged spinner!" },
  { id: "x30", q: "I say 'Quack' and paddle in water. Who am I?", options: ["Duck", "Goose", "Swan", "Pelican"], a: "Duck", hint: "Has webbed feet!" },
  { id: "x31", q: "I have teeth but cannot eat food. What am I?", options: ["Comb", "Fork", "Saw", "Zipper"], a: "Comb", hint: "Styles hair!" },
  { id: "x32", q: "I have hands and a face, but cannot smile. What am I?", options: ["Clock", "Doll", "Mirror", "Painting"], a: "Clock", hint: "Tells time!" },
  { id: "x33", q: "I have keys that open no doors and a spacebar. What am I?", options: ["Keyboard", "Piano", "Door Lock", "Safe"], a: "Keyboard", hint: "Used for typing!" },
  { id: "x34", q: "The more you take away, the bigger I get. What am I?", options: ["A Hole", "A Box", "A Bag", "A Cloud"], a: "A Hole", hint: "When digging dirt!" },
  { id: "x35", q: "What goes up when rain comes down?", options: ["Umbrella", "Balloon", "Kite", "Sun"], a: "Umbrella", hint: "Keeps you dry!" },
  { id: "x36", q: "I am tall when young, short when old, and melt. What am I?", options: ["Candle", "Tree", "Pencil", "Crayon"], a: "Candle", hint: "On birthday cakes!" },
  { id: "x37", q: "I have pages and a spine, but no bones. What am I?", options: ["Book", "Newspaper", "Notebook", "Magazine"], a: "Book", hint: "Read stories inside!" },
  { id: "x38", q: "I follow you in sunlight, but disappear in dark. What am I?", options: ["Shadow", "Hat", "Shoe", "Puppy"], a: "Shadow", hint: "Dark shape on floor!" },
  { id: "x39", q: "I have an eye in the middle, but cannot see. What am I?", options: ["Needle", "Potato", "Storm", "Button"], a: "Needle", hint: "Thread string through me!" },
  { id: "x40", q: "I have a neck but no head, and hold juice. What am I?", options: ["Bottle", "Shirt", "Guitar", "Vase"], a: "Bottle", hint: "Drink bottle!" },
  { id: "x41", q: "I am full of holes, yet I hold water. What am I?", options: ["Sponge", "Net", "Strainer", "Cloth"], a: "Sponge", hint: "Washes dishes!" },
  { id: "x42", q: "I get wetter the more I dry. What am I?", options: ["Towel", "Hairdryer", "Sun", "Soap"], a: "Towel", hint: "Used after shower!" },
  { id: "x43", q: "I have legs, but cannot walk anywhere. What am I?", options: ["Table", "Cat", "Person", "Spider"], a: "Table", hint: "Eat meals on me!" },
  { id: "x44", q: "I go up and down, but never move. What am I?", options: ["Stairs", "Elevator", "Car", "Swing"], a: "Stairs", hint: "Steps to second floor!" },
  { id: "x45", q: "When you peel my skin, you cry. What am I?", options: ["Onion", "Apple", "Potato", "Banana"], a: "Onion", hint: "Makes eyes water!" },
  { id: "x46", q: "What color do you get mixing Blue + Yellow?", options: ["Green", "Purple", "Orange", "Red"], a: "Green", hint: "Color of grass!" },
  { id: "x47", q: "What color do you get mixing Red + Yellow?", options: ["Orange", "Pink", "Brown", "Purple"], a: "Orange", hint: "Color of carrots!" },
  { id: "x48", q: "What color do you get mixing Red + Blue?", options: ["Purple", "Green", "Black", "Yellow"], a: "Purple", hint: "Violet shade!" },
  { id: "x49", q: "Complete pattern: 🔴 🔵 🔴 🔵 🔴 ___", options: ["🔵 Blue", "🔴 Red", "🟢 Green", "🟡 Yellow"], a: "🔵 Blue", hint: "Alternates blue and red!" },
  { id: "x50", q: "Complete pattern: 🍎 🍌 🍎 🍌 🍎 ___", options: ["🍌 Banana", "🍎 Apple", "🍇 Grapes", "🍊 Orange"], a: "🍌 Banana", hint: "Which fruit comes second!" },
  { id: "x51", q: "Which item does NOT belong: 🍎, 🍌, 🍕, 🍇", options: ["Pizza", "Apple", "Banana", "Grapes"], a: "Pizza", hint: "Three are fruits!" },
  { id: "x52", q: "Which item does NOT belong: 🚗, ✈️, 🚲, 🐶", options: ["Dog", "Car", "Airplane", "Bicycle"], a: "Dog", hint: "Three are vehicles!" },
  { id: "x53", q: "If yesterday was Friday, what day is tomorrow?", options: ["Sunday", "Saturday", "Monday", "Thursday"], a: "Sunday", hint: "Today is Saturday!" },
  { id: "x54", q: "Which animal lays eggs?", options: ["Chicken", "Dog", "Cat", "Cow"], a: "Chicken", hint: "Lives on farm in coop!" },
  { id: "x55", q: "Which planet do we live on?", options: ["Earth", "Mars", "Jupiter", "Venus"], a: "Earth", hint: "Blue and green planet!" },
  { id: "x56", q: "What do bees make that tastes sweet?", options: ["Honey", "Milk", "Juice", "Butter"], a: "Honey", hint: "Golden syrup!" },
  { id: "x57", q: "How many days are in one week?", options: ["7", "5", "10", "12"], a: "7", hint: "Monday to Sunday!" },
  { id: "x58", q: "How many months are in a year?", options: ["12", "10", "11", "14"], a: "12", hint: "January to December!" },
  { id: "x59", q: "What do caterpillars turn into?", options: ["Butterfly", "Dragonfly", "Spider", "Beetle"], a: "Butterfly", hint: "Colorful flying wings!" },
  { id: "x60", q: "What is frozen water called?", options: ["Ice", "Steam", "Juice", "Mist"], a: "Ice", hint: "Cold and solid!" },
  { id: "x61", q: "Which is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Elephant"], a: "Cheetah", hint: "Spotted sprinter!" },
  { id: "x62", q: "How many legs does an insect have?", options: ["6", "8", "4", "10"], a: "6", hint: "Six legs!" },
  { id: "x63", q: "What gas do humans need to breathe to live?", options: ["Oxygen", "Helium", "Carbon", "Nitrogen"], a: "Oxygen", hint: "Fresh air gas!" },
  { id: "x64", q: "What is the hardest natural substance on Earth?", options: ["Diamond", "Gold", "Iron", "Rock"], a: "Diamond", hint: "Shiny gemstone!" },
  { id: "x65", q: "Which ocean animal has 8 arms?", options: ["Octopus", "Shark", "Whale", "Seahorse"], a: "Octopus", hint: "Octo means 8!" },
  { id: "x66", q: "What colors are on a standard zebra?", options: ["Black and White", "Brown and Yellow", "Blue and White", "Red and Black"], a: "Black and White", hint: "Stripes!" },
  { id: "x67", q: "What gives plants their green color?", options: ["Chlorophyll", "Water", "Dirt", "Sugar"], a: "Chlorophyll", hint: "Plant pigment!" },
  { id: "x68", q: "Which planet is closest to the Sun?", options: ["Mercury", "Earth", "Mars", "Saturn"], a: "Mercury", hint: "Smallest planet!" },
  { id: "x69", q: "What is the largest mammal in the world?", options: ["Blue Whale", "Elephant", "Giraffe", "Hippo"], a: "Blue Whale", hint: "Lives in oceans!" },
  { id: "x70", q: "What do pandas eat almost exclusively?", options: ["Bamboo", "Fish", "Meat", "Berries"], a: "Bamboo", hint: "Green stalks!" },
  { id: "x71", q: "How many seasons are in a year?", options: ["4", "3", "5", "12"], a: "4", hint: "Spring, Summer, Fall, Winter!" },
  { id: "x72", q: "What do cows drink?", options: ["Water", "Milk", "Juice", "Soda"], a: "Water", hint: "They produce milk, but drink this!" },
  { id: "x73", q: "What star shines during the day?", options: ["The Sun", "North Star", "Moon", "Mars"], a: "The Sun", hint: "Warms our planet!" },
  { id: "x74", q: "What shape is a classic yield sign?", options: ["Triangle", "Circle", "Octagon", "Square"], a: "Triangle", hint: "Three sides pointing down!" },
  { id: "x75", q: "What color are emeralds?", options: ["Green", "Red", "Blue", "Yellow"], a: "Green", hint: "Gemstone color of grass!" },
  { id: "x76", q: "What color are rubies?", options: ["Red", "Blue", "Purple", "Green"], a: "Red", hint: "Deep crimson stone!" },
  { id: "x77", q: "What color are sapphires usually?", options: ["Blue", "Red", "Yellow", "Orange"], a: "Blue", hint: "Deep ocean color!" },
  { id: "x78", q: "What kind of bird can talk by mimicking words?", options: ["Parrot", "Eagle", "Penguin", "Sparrow"], a: "Parrot", hint: "Colorful tropical bird!" },
  { id: "x79", q: "What do tadpoles grow into?", options: ["Frogs", "Fish", "Lizards", "Snakes"], a: "Frogs", hint: "Green jumpers!" },
  { id: "x80", q: "What sense uses your ears?", options: ["Hearing", "Sight", "Smell", "Taste"], a: "Hearing", hint: "Listening to sounds!" },
  { id: "x81", q: "What sense uses your tongue?", options: ["Taste", "Touch", "Smell", "Hearing"], a: "Taste", hint: "Tasting food!" },
  { id: "x82", q: "What sense uses your eyes?", options: ["Sight", "Hearing", "Taste", "Smell"], a: "Sight", hint: "Seeing colors!" },
  { id: "x83", q: "What sense uses your nose?", options: ["Smell", "Touch", "Sight", "Taste"], a: "Smell", hint: "Sniffing flowers!" },
  { id: "x84", q: "What do birds have that no other animal has?", options: ["Feathers", "Wings", "Eggs", "Eyes"], a: "Feathers", hint: "Fluffy plumage!" },
  { id: "x85", q: "Which animal is known for building river dams?", options: ["Beaver", "Otter", "Duck", "Bear"], a: "Beaver", hint: "Chews wood logs!" },
  { id: "x86", q: "What is a baby kangaroo called?", options: ["Joey", "Cub", "Pup", "Calf"], a: "Joey", hint: "Lives in mum's pouch!" },
  { id: "x87", q: "What instrument has 88 black and white keys?", options: ["Piano", "Guitar", "Flute", "Drums"], a: "Piano", hint: "Keyboard instrument!" },
  { id: "x88", q: "What color are school buses usually?", options: ["Yellow", "Blue", "Green", "Red"], a: "Yellow", hint: "Bright yellow-orange!" },
  { id: "x89", q: "Which fruit has seeds on the outside?", options: ["Strawberry", "Apple", "Banana", "Orange"], a: "Strawberry", hint: "Red berry!" },
  { id: "x90", q: "How many legs does a spider have?", options: ["8", "6", "10", "4"], a: "8", hint: "Eight arachnid legs!" },
  { id: "x91", q: "How many primary colors are there (Red, Blue, Yellow)?", options: ["3", "4", "5", "7"], a: "3", hint: "Three base colors!" },
  { id: "x92", q: "What falls from the sky during a thunderstorm?", options: ["Rain", "Sand", "Leaves", "Apples"], a: "Rain", hint: "Water drops!" },
  { id: "x93", q: "What color is a ripe banana?", options: ["Yellow", "Red", "Blue", "Purple"], a: "Yellow", hint: "Classic peel color!" },
  { id: "x94", q: "What do you use to brush your teeth?", options: ["Toothbrush", "Fork", "Comb", "Pencil"], a: "Toothbrush", hint: "With toothpaste!" },
  { id: "x95", q: "What is a group of lions called?", options: ["A Pride", "A Pack", "A Herd", "A Flock"], a: "A Pride", hint: "Lion family group!" },
  { id: "x96", q: "What shape is a real stop sign?", options: ["Octagon", "Hexagon", "Circle", "Square"], a: "Octagon", hint: "8 sides!" },
  { id: "x97", q: "Which animal has a shell and moves on land?", options: ["Tortoise", "Crab", "Fish", "Lizard"], a: "Tortoise", hint: "Slow land reptile!" },
  { id: "x98", q: "Which food is made by churning cream/milk?", options: ["Butter", "Bread", "Juice", "Jam"], a: "Butter", hint: "Spread on toast!" },
  { id: "x99", q: "What do solar panels collect energy from?", options: ["The Sun", "Wind", "Water", "Fire"], a: "The Sun", hint: "Daylight rays!" },
  { id: "x100", q: "What do you call a baby frog before it grows legs?", options: ["Tadpole", "Caterpillar", "Minnow", "Larva"], a: "Tadpole", hint: "Swims with a tail!" }
];

// Supabase Persistent Client Configuration
const SUPABASE_URL = 'https://YOUR_SUPABASE_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

let supabaseClient = null;
if (window.supabase && typeof window.supabase.createClient === 'function' && SUPABASE_URL !== 'https://YOUR_SUPABASE_PROJECT.supabase.co') {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (e) {
    console.log('Supabase sync disabled - using localStorage backup');
  }
}

// Get User Identifier
function getPlayerUserId() {
  let uId = localStorage.getItem('bq_user_id');
  if (!uId) {
    uId = 'raza_explorer_' + Math.random().toString(36).substring(2, 9);
    localStorage.setItem('bq_user_id', uId);
  }
  return uId;
}

// Asynchronous Supabase Persistence Sync Helper
async function syncStatsToSupabase(diamonds, wins) {
  if (!supabaseClient) return;
  try {
    const userId = getPlayerUserId();
    await supabaseClient
      .from('brainquest_stats')
      .upsert({
        user_id: userId,
        diamonds: diamonds,
        wins: wins,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
  } catch (err) {
    console.log('Supabase background sync info:', err);
  }
}

// Asynchronous Supabase Stats Recovery on Page Load / Reopen
async function loadStatsFromSupabase() {
  if (!supabaseClient) return;
  try {
    const userId = getPlayerUserId();
    const { data, error } = await supabaseClient
      .from('brainquest_stats')
      .select('diamonds, wins')
      .eq('user_id', userId)
      .single();

    if (data && !error) {
      if (data.diamonds > getLifetimeCrystals()) {
        localStorage.setItem('bq_lifetime_crystals', data.diamonds.toString());
      }
      if (data.wins > getLifetimeWins()) {
        localStorage.setItem('bq_total_wins', data.wins.toString());
      }
    }
  } catch (err) {
    console.log('Supabase recovery info:', err);
  }
}

// Available Pet Buddies Dictionary
const PET_DICTIONARY = {
  dragon: { id: "dragon", name: "Sparky the Dragon", icon: "🐉" },
  fox: { id: "fox", name: "Rusty the Fox", icon: "🦊" },
  cat: { id: "cat", name: "Luna the Cosmic Cat", icon: "🐱" },
  dog: { id: "dog", name: "Buster the Space Pup", icon: "🐶" },
  panda: { id: "panda", name: "Pandy the Panda", icon: "🐼" },
  bot: { id: "bot", name: "Beep the Bot", icon: "🤖" }
};

let audioCtx = null;
let isMuted = false;

// Modular Virtual Sidekick Pet Controller Object
const petController = {
  activePet: PET_DICTIONARY.dragon,
  speechBubbleEl: null,
  sidekickSpeechBubbleEl: null,
  avatarEl: null,
  sidekickAvatarEl: null,
  nameEl: null,
  sidekickNameEl: null,

  init(pet) {
    if (pet) this.activePet = pet;
    this.speechBubbleEl = document.getElementById('pet-speech-bubble');
    this.sidekickSpeechBubbleEl = document.getElementById('sidekick-speech-bubble');
    this.avatarEl = document.getElementById('pet-avatar');
    this.sidekickAvatarEl = document.getElementById('sidekick-pet-avatar');
    this.nameEl = document.getElementById('pet-name');
    this.sidekickNameEl = document.getElementById('sidekick-pet-name');

    this.updateDisplay();
    this.bindClick();
  },

  setPet(pet) {
    if (!pet) return;
    this.activePet = pet;
    this.updateDisplay();
    this.say(`Hi, I'm ${pet.name.split(' ')[0]}! Let's win crystals! 🚀`, 'correct');
  },

  updateDisplay() {
    if (!this.activePet) return;
    const shortName = this.activePet.name.split(' ')[0];
    
    if (this.avatarEl) this.avatarEl.textContent = this.activePet.icon;
    if (this.sidekickAvatarEl) this.sidekickAvatarEl.textContent = this.activePet.icon;
    if (this.nameEl) this.nameEl.textContent = this.activePet.name;
    if (this.sidekickNameEl) this.sidekickNameEl.textContent = shortName;
  },

  say(message, mood = 'idle') {
    // Update speech bubbles
    if (this.speechBubbleEl) this.speechBubbleEl.textContent = message;
    if (this.sidekickSpeechBubbleEl) {
      this.sidekickSpeechBubbleEl.textContent = message;
      this.sidekickSpeechBubbleEl.classList.remove('animate-pop');
      void this.sidekickSpeechBubbleEl.offsetWidth; // Force reflow
      this.sidekickSpeechBubbleEl.classList.add('animate-pop');
    }

    // Trigger Keyframe Animations (@keyframes petJump & @keyframes petWobble)
    [this.avatarEl, this.sidekickAvatarEl].forEach(el => {
      if (!el) return;
      el.classList.remove('pet-jump-anim', 'pet-wobble-anim');
      void el.offsetWidth; // Force reflow

      if (mood === 'correct') {
        el.classList.add('pet-jump-anim');
      } else if (mood === 'wrong') {
        el.classList.add('pet-wobble-anim');
      }
    });

    // Voice Synthesis Read Aloud if Sound ON
    if (!isMuted && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 1.05;
      utterance.pitch = 1.25;
      window.speechSynthesis.speak(utterance);
    }
  },

  onCorrect() {
    const praiseList = [
      "Awesome job! 🎉",
      "You're a genius! 🌟",
      "+1 Diamond earned! 💎",
      "Super fast! 🚀",
      "Spot on! 🎯",
      "You rock! ⚡"
    ];
    const msg = praiseList[Math.floor(Math.random() * praiseList.length)];
    this.say(msg, 'correct');
  },

  onWrong() {
    const encouragementList = [
      "Oops! Try again! 🤔",
      "You got this, don't worry! 💪",
      "Check the hint! 💡",
      "Almost got it! ✨",
      "Keep going! ⭐"
    ];
    const msg = encouragementList[Math.floor(Math.random() * encouragementList.length)];
    this.say(msg, 'wrong');
  },

  bindClick() {
    const sidekickCard = document.getElementById('sidekick-pet-card');
    if (sidekickCard) {
      sidekickCard.onclick = () => {
        const playfulLines = [
          "I'm cheering for you! 📣",
          "Tap the right answer! 🎯",
          "Let's win another crystal! 💎",
          "High five! 🐾",
          "You're doing amazing! 🌟"
        ];
        const line = playfulLines[Math.floor(Math.random() * playfulLines.length)];
        this.say(line, 'correct');
      };
    }

    if (this.avatarEl) {
      this.avatarEl.onclick = () => {
        this.say("Yay! Let me help you solve this! 🚀", 'correct');
      };
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, duration, type = 'sine', delay = 0) {
    if (isMuted) return;
    initAudio();
    if (!audioCtx) return;

    setTimeout(() => {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch (e) {
        // Audio fallback
      }
    }, delay);
  }

  function playPetJumpingSound() {
    playTone(587.33, 0.1, 'sine', 0);
    playTone(880.00, 0.25, 'triangle', 80);
  }

  function playCorrectSound() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      playTone(freq, 0.25, 'triangle', idx * 80);
    });
  }

  function playWrongSound() {
    playTone(220, 0.2, 'sawtooth', 0);
    playTone(160, 0.3, 'sawtooth', 120);
  }

  function playVictorySound() {
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      playTone(freq, 0.4, 'sine', idx * 120);
    });
  }

  // Local Storage Stats & Cloud Backup
  function getLifetimeCrystals() {
    return parseInt(localStorage.getItem('bq_lifetime_crystals') || '0', 10);
  }

  function getLifetimeWins() {
    return parseInt(localStorage.getItem('bq_total_wins') || '0', 10);
  }

  function addLifetimeCrystals(amount) {
    const current = getLifetimeCrystals();
    const updated = current + amount;
    localStorage.setItem('bq_lifetime_crystals', updated.toString());
    updateStatsUI();
    syncStatsToSupabase(updated, getLifetimeWins());
  }

  function addLifetimeWin() {
    const current = getLifetimeWins();
    const updated = current + 1;
    localStorage.setItem('bq_total_wins', updated.toString());
    updateStatsUI();
    syncStatsToSupabase(getLifetimeCrystals(), updated);
  }

  function updateStatsUI() {
    const statCrystals = document.getElementById('stat-crystals');
    const statWins = document.getElementById('stat-wins');
    if (statCrystals) statCrystals.textContent = getLifetimeCrystals();
    if (statWins) statWins.textContent = getLifetimeWins();
  }

  // Recover stats from Supabase on launch
  loadStatsFromSupabase().then(() => updateStatsUI());

  // Save stats on tab close / reload
  window.addEventListener('beforeunload', () => {
    syncStatsToSupabase(getLifetimeCrystals(), getLifetimeWins());
  });

  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      syncStatsToSupabase(getLifetimeCrystals(), getLifetimeWins());
    }
  });

  // Shuffle Utility
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Category & Pet Selection State
  let currentCategory = 'mixed'; // 'math', 'letter', or 'mixed'

  function getPoolForCategory(cat) {
    if (cat === 'math') return mathPuzzles100;
    if (cat === 'letter') return letterPuzzles100;
    return mixedPuzzles100;
  }

  function generateGameStages() {
    const pool = getPoolForCategory(currentCategory);
    const shuffledPool = shuffleArray(pool);
    const final8 = shuffledPool.slice(0, 8);

    return final8.map((item, idx) => {
      const categoryIcon = currentCategory === 'math' ? '🔢 MATH PUZZLE' : (currentCategory === 'letter' ? '🔤 LETTER PUZZLE' : '🎲 TRIVIA PUZZLE');
      const badgeText = `STAGE ${idx + 1} OF 8 • ${categoryIcon}`;
      
      const shuffledOptions = shuffleArray(item.options);
      const choices = shuffledOptions.map(opt => ({
        text: opt,
        isCorrect: (opt === item.a)
      }));

      let visualContent = '';
      let visualHtml = '';

      if (item.q.includes('=')) {
        const parts = item.q.split('=');
        visualContent = parts[0] ? parts[0].trim() + ' = ?' : item.q;
      } else if (item.q.startsWith('Unscramble:')) {
        visualHtml = `<div class="scramble-box">${item.q.replace('Unscramble: ', '')}</div>`;
      } else {
        visualContent = currentCategory === 'math' ? '🔢 🧮 ❓' : '🧩 🔍 ❓';
      }

      return {
        stageNumber: idx + 1,
        badge: badgeText,
        question: item.q,
        visual: visualContent,
        visualHtml: visualHtml,
        choices: choices,
        hint: item.hint
      };
    });
  }

  // Game State Variables
  let currentStages = generateGameStages();
  let currentStageIndex = 0;
  let crystalsCollected = 0;
  let isWandUsed = false;

  // DOM Elements
  const soundBtn = document.getElementById('sound-btn');
  const soundIcon = document.getElementById('sound-icon');
  const soundText = document.getElementById('sound-text');
  
  const activeCategoryBadge = document.getElementById('active-category-badge');
  const changeCategoryBtn = document.getElementById('change-category-btn');
  const categoryModal = document.getElementById('category-modal');
  const categoryOptionBtns = document.querySelectorAll('.category-option-btn');
  const petSelectCards = document.querySelectorAll('.pet-select-card');
  const startQuestBtn = document.getElementById('start-quest-btn');

  const crystalCountEl = document.getElementById('crystal-count');
  const crystalSlotsContainer = document.getElementById('crystal-slots');

  const wandBtn = document.getElementById('wand-btn');
  const hintBtn = document.getElementById('hint-btn');
  const readAloudBtn = document.getElementById('read-aloud-btn');

  const puzzleCard = document.getElementById('puzzle-card');
  const stageBadge = document.getElementById('stage-badge');
  const puzzleQuestion = document.getElementById('puzzle-question');
  const puzzleVisual = document.getElementById('puzzle-visual');
  const choicesGrid = document.getElementById('choices-grid');

  const petStatus = document.getElementById('pet-status');
  const petStageBadge = document.getElementById('pet-stage-badge');

  const hintModal = document.getElementById('hint-modal');
  const hintTextBox = document.getElementById('hint-text-box');
  const tryAgainBtn = document.getElementById('try-again-btn');

  const winModal = document.getElementById('win-modal');
  const playAgainBtn = document.getElementById('play-again-btn');

  // Initialize petController
  petController.init(PET_DICTIONARY.dragon);

  // Sound Toggle Handler
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      if (isMuted) {
        if (soundIcon) soundIcon.textContent = '🔇';
        if (soundText) soundText.textContent = 'Sound OFF';
        soundBtn.classList.remove('from-orange-400', 'to-orange-600');
        soundBtn.classList.add('from-slate-600', 'to-slate-700');
      } else {
        if (soundIcon) soundIcon.textContent = '🔊';
        if (soundText) soundText.textContent = 'Sound ON';
        soundBtn.classList.remove('from-slate-600', 'to-slate-700');
        soundBtn.classList.add('from-orange-400', 'to-orange-600');
        initAudio();
        playTone(523.25, 0.15, 'sine');
      }
    });
  }

  // Pet Selection Screen Grid Listeners
  petSelectCards.forEach(card => {
    card.addEventListener('click', () => {
      petSelectCards.forEach(c => c.classList.remove('selected-pet'));
      card.classList.add('selected-pet');

      const petId = card.dataset.petId || 'dragon';
      if (PET_DICTIONARY[petId]) {
        petController.setPet(PET_DICTIONARY[petId]);
      }
      initAudio();
      playTone(700, 0.15, 'sine');
    });
  });

  // Category Selection Buttons
  categoryOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryOptionBtns.forEach(b => b.classList.remove('ring-4', 'ring-yellow-400'));
      btn.classList.add('ring-4', 'ring-yellow-400');
      currentCategory = btn.dataset.category || 'mixed';
    });
  });

  // Change Settings Re-open Handler
  if (changeCategoryBtn) {
    changeCategoryBtn.addEventListener('click', () => {
      categoryModal.classList.remove('hidden');
    });
  }

  // Start Quest Action Handler
  if (startQuestBtn) {
    startQuestBtn.addEventListener('click', () => {
      const badgeLabels = {
        math: '🔢 Math Puzzles',
        letter: '🔤 Letter Puzzles',
        mixed: '🎲 Mixed Adventure'
      };
      if (activeCategoryBadge) {
        activeCategoryBadge.textContent = badgeLabels[currentCategory] || '🎲 Mixed Adventure';
      }

      categoryModal.classList.add('hidden');
      resetAndStartGame();
    });
  }

  // Update Pet Companion HUD Card Status
  function updatePetEvolution(crystals) {
    petController.updateDisplay();
    if (!petStatus || !petStageBadge) return;

    const petNameShort = petController.activePet.name.split(' ')[0];
    const petIcon = petController.activePet.icon;

    if (crystals < 4) {
      petStatus.textContent = `Collect 4 crystals to evolve ${petNameShort}! 🦊`;
      petStageBadge.textContent = `Stage 1: ${petNameShort} ${petIcon}`;
    } else if (crystals < 7) {
      petStatus.textContent = `Collect 7 crystals for Legendary ${petNameShort} form! 🐉`;
      petStageBadge.textContent = `Stage 2: Evolved ${petIcon}`;
    } else {
      petStatus.textContent = `MAX EVOLUTION! Ancient Portal Unlocked! 🌌✨`;
      petStageBadge.textContent = `Stage 3: Legendary ${petIcon}`;
    }
  }

  // Render Power Crystals Progress Bar
  function updateCrystalsUI() {
    if (crystalCountEl) crystalCountEl.textContent = `${crystalsCollected} / 8`;
    if (crystalSlotsContainer) {
      const slots = crystalSlotsContainer.querySelectorAll('.crystal-slot');
      slots.forEach((slot, index) => {
        if (index < crystalsCollected) {
          slot.classList.add('collected');
        } else {
          slot.classList.remove('collected');
        }
      });
    }

    updatePetEvolution(crystalsCollected);
  }

  // Render Current Stage Puzzle
  function loadStage(index) {
    if (index >= currentStages.length) {
      showVictoryScreen();
      return;
    }

    const data = currentStages[index];
    isWandUsed = false;
    if (wandBtn) {
      wandBtn.disabled = false;
      wandBtn.style.opacity = '1';
    }

    // Speech Bubble Message per stage
    petController.say(`Stage ${index + 1}: Let's solve this! 🚀`);

    // Card transition effect
    puzzleCard.style.opacity = '0';
    puzzleCard.style.transform = 'translateY(15px)';

    setTimeout(() => {
      if (stageBadge) stageBadge.innerHTML = `<span class="stage-badge-icon">⭐</span> ${data.badge}`;
      if (puzzleQuestion) puzzleQuestion.textContent = data.question;

      // Render Visual
      if (puzzleVisual) {
        if (data.visualHtml) {
          puzzleVisual.innerHTML = data.visualHtml;
        } else {
          puzzleVisual.textContent = data.visual || '';
        }
      }

      // Render Choices
      if (choicesGrid) {
        choicesGrid.innerHTML = '';
        data.choices.forEach((choice) => {
          const btn = document.createElement('button');
          btn.className = 'choice-btn';
          btn.innerHTML = `<span>${choice.text}</span>`;
          btn.dataset.correct = choice.isCorrect;
          btn.addEventListener('click', () => handleChoiceClick(choice, btn, data));
          choicesGrid.appendChild(btn);
        });
      }

      puzzleCard.style.opacity = '1';
      puzzleCard.style.transform = 'translateY(0)';
    }, 200);
  }

  // Lifeline 1: 50/50 Magic Wand 🪄
  if (wandBtn) {
    wandBtn.addEventListener('click', () => {
      if (isWandUsed) return;
      initAudio();
      playTone(880, 0.2, 'sine');

      const allBtns = Array.from(choicesGrid.querySelectorAll('.choice-btn'));
      const wrongBtns = allBtns.filter(b => b.dataset.correct === 'false');

      const shuffledWrong = shuffleArray(wrongBtns);
      const toHide = shuffledWrong.slice(0, 2);

      toHide.forEach(b => {
        b.style.visibility = 'hidden';
      });

      isWandUsed = true;
      wandBtn.disabled = true;
      wandBtn.style.opacity = '0.5';

      petController.say("🪄 Poof! 2 wrong answers vanished!");
    });
  }

  // Lifeline 2: Lightbulb Clue 💡
  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      initAudio();
      playTone(660, 0.2, 'sine');
      const currentData = currentStages[currentStageIndex];
      if (currentData) {
        showHintModal(currentData.hint);
        petController.say("💡 Owl clue is ready for you!");
      }
    });
  }

  // Lifeline 3: Text-to-Speech Read Aloud 🗣️
  if (readAloudBtn) {
    readAloudBtn.addEventListener('click', () => {
      initAudio();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const currentData = currentStages[currentStageIndex];
        if (!currentData) return;

        const optionsText = currentData.choices.map((c, i) => `Option ${i + 1}: ${c.text}`).join('. ');
        const fullSpeechText = `${currentData.question}. Your choices are: ${optionsText}`;

        const utterance = new SpeechSynthesisUtterance(fullSpeechText);
        utterance.rate = 0.95;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
      }
    });
  }

  // Handle Choice Click
  function handleChoiceClick(choice, btnElement, stageData) {
    initAudio();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    if (choice.isCorrect) {
      btnElement.classList.add('correct-anim');
      playCorrectSound();
      playPetJumpingSound();
      petController.onCorrect();

      // Trigger Confetti Burst
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.65 }
        });
      }

      // INSTANT +1 DIAMOND AND +1 WIN ON EVERY CORRECT ANSWER!
      crystalsCollected++;
      addLifetimeCrystals(1);
      addLifetimeWin(); // Instant Win!

      // Trigger floating +1 WIN! toast animation
      triggerWinToast();

      updateCrystalsUI();

      // Check 10-Win Milestone
      const totalWins = getLifetimeWins();
      if (totalWins > 0 && totalWins % 10 === 0) {
        setTimeout(() => {
          showMilestoneModal(totalWins);
        }, 600);
      }

      const allBtns = choicesGrid.querySelectorAll('.choice-btn');
      allBtns.forEach(b => b.style.pointerEvents = 'none');

      setTimeout(() => {
        currentStageIndex++;
        if (currentStageIndex < currentStages.length) {
          loadStage(currentStageIndex);
        } else {
          showVictoryScreen();
        }
      }, 1200);

    } else {
      playWrongSound();
      petController.onWrong();
      showHintModal(stageData.hint);
    }
  }

  // Floating Toast +1 WIN! Animation
  function triggerWinToast() {
    const toast = document.getElementById('win-float-toast');
    if (!toast) return;

    toast.classList.remove('toast-animate');
    void toast.offsetWidth; // Force reflow
    toast.classList.add('toast-animate');
  }

  // Milestone Modal Handler
  const milestoneModal = document.getElementById('milestone-modal');
  const milestoneTitle = document.getElementById('milestone-title');
  const milestoneBadgeBox = document.getElementById('milestone-badge-box');
  const milestoneClaimBtn = document.getElementById('milestone-claim-btn');

  function showMilestoneModal(winsCount) {
    if (!milestoneModal) return;
    
    if (milestoneTitle) milestoneTitle.textContent = `${winsCount} WINS UNLOCKED! 🎉`;

    const badges = {
      10: '🥉 BRONZE EXPLORER BADGE',
      20: '🥈 SILVER CRYSTAL MASTER',
      30: '🥇 GOLD PORTAL HERO',
      40: '💎 DIAMOND LEGEND BADGE',
      50: '👑 ROYAL PUZZLE KING'
    };

    if (milestoneBadgeBox) milestoneBadgeBox.textContent = badges[winsCount] || `🏆 ${winsCount} WINS CHAMPION BADGE`;
    milestoneModal.classList.remove('hidden');
    playVictorySound();
  }

  if (milestoneClaimBtn) {
    milestoneClaimBtn.addEventListener('click', () => {
      initAudio();
      milestoneModal.classList.add('hidden');
    });
  }

  // Hint Modal Handler
  function showHintModal(hintText) {
    if (hintTextBox) hintTextBox.textContent = hintText;
    if (hintModal) hintModal.classList.remove('hidden');
  }

  if (tryAgainBtn) {
    tryAgainBtn.addEventListener('click', () => {
      initAudio();
      if (hintModal) hintModal.classList.add('hidden');
    });
  }

  // Victory Screen Handler
  function showVictoryScreen() {
    playVictorySound();
    petController.say("WE WON! Ancient Portal Unlocked! 🌌✨", 'correct');
    if (winModal) winModal.classList.remove('hidden');

    if (typeof confetti === 'function') {
      const duration = 3.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }
  }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function resetAndStartGame() {
    currentStages = generateGameStages();
    currentStageIndex = 0;
    crystalsCollected = 0;
    updateCrystalsUI();
    loadStage(currentStageIndex);
  }

  // Play Again Handler
  if (playAgainBtn) {
    playAgainBtn.addEventListener('click', () => {
      initAudio();
      if (winModal) winModal.classList.add('hidden');
      resetAndStartGame();
    });
  }

  // Initial Setup
  updateStatsUI();
  updateCrystalsUI();
  loadStage(currentStageIndex);
  if (categoryModal) categoryModal.classList.remove('hidden');
});
