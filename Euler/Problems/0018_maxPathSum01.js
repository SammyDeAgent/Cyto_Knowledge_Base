// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

//    3
//   7 4
//  2 4 6
// 8 5 9 3

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom of the triangle below:

//                            75
//                          95 64
//                        17 47 82
//                      18 35 87 10
//                    20 04 82 47 65
//                  19 01 23 75 03 34
//                88 02 77 73 07 63 67
//              99 65 04 28 06 16 70 92
//            41 41 26 56 83 40 80 70 33
//          41 48 72 33 47 32 37 16 94 29
//        53 71 44 65 25 43 91 52 97 51 14
//      70 11 33 28 77 73 17 78 39 68 17 57
//    91 71 52 38 17 14 91 43 58 50 27 29 48
//  63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

// NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, 
// Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, 
// and requires a clever method! ;o)

// Using Brute Force

const input = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

var temp = input.split("\n");
// console.log(temp);
var pyramid = [];

for(row of temp) {
  pyramid.push(row.split(" ").map(item => parseInt(item)));
}

for (let y = pyramid.length - 2; y >= 0; y--) {
  let breathSum = [];
  for(let x = 0; x < pyramid[y].length; x++) {
    breathSum.push(Math.max(pyramid[y+1][x], pyramid[y+1][x+1])+pyramid[y][x]);
    pyramid[y][x] += Math.max(pyramid[y+1][x], pyramid[y+1][x+1]);
  }
  console.log(breathSum);
}

// const {Tree} = require("./DT");

// var tree = new Tree("0-0", pyramid[0][0]);

// for(let y = 0; y < pyramid[y].length; y++) {
//   if(y+1 >= pyramid.length) break;
//   var rootX = 0;
//   var nodeLimit = 0;
//   for(let x = 0; x < pyramid[y+1].length; x++) {
//     if(nodeLimit >= 2) {
//       nodeLimit = 0;
//       rootX++;
//       x -= 1;
//     }
//     tree.add(`${y+1}-${x}`, pyramid[y+1][x], `${y}-${rootX}`);
//     // console.log(tree.find(`${y}-${rootX}`).getDetails());
//     nodeLimit++;
//   }
// }

// // const id = `5-2`;

// // console.log(tree.find(id).getDetails());

// let arr = tree.getMaxChain();

// console.log(arr);
// console.log(arr.reduce((a, b) => {return a + b}))

// ============================================================ //

// var input2 = `75
// 95 64
// 17 47 82
// 18 35 87 10
// 20 04 82 47 65`;

// var temp2 = input2.split("\n");
// var pyramid2 = [];
// for(row of temp2) {
//   pyramid2.push(row.split(" ").map(item => parseInt(item)));
// } 

// var tree2 = new Tree("0-0", pyramid2[0][0]);

// for(let y = 0; y < pyramid2[y].length; y++) {
//   if(y+1 >= pyramid2.length) break;
//   var rootX = 0;
//   var nodeLimit = 0;
//   for(let x = 0; x < pyramid2[y+1].length; x++) {
//     if(nodeLimit >= 2) {
//       nodeLimit = 0;
//       rootX++;
//       x -= 1;
//     }
//     tree2.add(`${y+1}-${x}`, pyramid2[y+1][x], `${y}-${rootX}`);
//     // console.log(tree.find(`${y}-${rootX}`).getDetails());
//     nodeLimit++;
//   }
// }

// let arr2 = tree2.getMaxChain();

// console.log(arr2);
// console.log(arr2.reduce((a, b) => {return a + b}))