// Comparing Sorting with comparison in complexity and time usage
const SORT = require("./SORT");

const arr = [];
const size = 250000;

for(let i = 0; i < size; i++) {
  arr.push(i);
}

function elapsedMsg(sort_name, start, end) {
  console.log(`${sort_name.padEnd(16)} - elapsed time(s):\t\t${((end - start) / 1000).toFixed(8)}`)
}

// Scramble of the array
const scrambled = Object.freeze(arr.sort(() => Math.random() - 0.5));
console.log(scrambled);

/* Comparisons - Remember to shallow copy the scrambled array! */
var start;
var end;

// Bubble Sort
// Time Complexity -> O(n^2)
// Auxiliary Space -> O(1)
start = performance.now();
SORT.BubbleSort(scrambled.slice(0), size);
end = performance.now();
elapsedMsg("Bubble sort", start, end);

// Selection Sort
// Time Complexity -> O(n^2)
// Auxiliary Space -> O(1)
start = performance.now();
SORT.SelectionSort(scrambled.slice(0), size);
end = performance.now();
elapsedMsg("Selection sort", start, end);

// Insertion Sort
// Time Complexity -> O(n^2)
// Auxiliary Space -> O(1)
start = performance.now();
SORT.InsertionSort(scrambled.slice(0), size);
end = performance.now();
elapsedMsg("Insertion sort", start, end);

// Merge Sort
// Time Complexity -> O(nlog(n))
// Auxiliary Space -> O(n)
start = performance.now();
SORT.MergeSort(scrambled.slice(0), 0, size-1);
end = performance.now();
elapsedMsg("Merge sort", start, end);

// Quick Sort
// Time Complexity -> O(nlog(n))
// Auxiliary Space -> O(1)
start = performance.now();
SORT.QuickSort(scrambled.slice(0), 0, size-1);
end = performance.now();
elapsedMsg("Quick sort", start, end);

// Javascript array sort
// This depends on browser
start = performance.now();
scrambled.slice(0).sort((a, b) => a - b);
end = performance.now();
elapsedMsg("JS Array sort", start, end);

