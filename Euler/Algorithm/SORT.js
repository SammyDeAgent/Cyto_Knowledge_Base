// Sorting alogrithm files

function swap (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

exports.BubbleSort = (arr, size) => {
  /*
    Comparison of a and a+1 index element until end of length
    where each pass will sort at least the last+1 element
  */
  for(let i = 0; i < size-1; i++) {
    for(let j = 0; j < size-i-1; j++) {
      if(arr[j] > arr[j+1]) swap(arr, j, j+1);
    }
  }
  return arr;
}

exports.SelectionSort = (arr, size) => {
  /*
    For each pass, always puts the smallest unsorted to the pass's initial position
  */
  for(let i = 0; i < size-1; i++) {
    let smallestUnsortedIndex = i;
    for(let j = i + 1; j < size; j++) {
      if(arr[j] < arr[smallestUnsortedIndex]) smallestUnsortedIndex = j;
    }
    swap(arr, i, smallestUnsortedIndex);
  }
  return arr;
}

exports.InsertionSort = (arr, size) => {
  /*
    Compare the current element (key) to its predecessor. 
    If the key element is smaller than its predecessor, compare it to the elements before. 
    Move the greater elements one position up to make space for the swapped element.
  */
  for(let i = 0; i < size; i++) {
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

exports.MergeSort = (arr, leftIndex, rightIndex) => {
  /*
    Divide and conquer, divide arr into smaller lengths until it is only atleast 2 (or 1)
    Then sort from there and keep merging the pieces into bigger one
    This sort uses recursion technique
  */
  if(leftIndex >= rightIndex) return;
  var midIndex = leftIndex + parseInt((rightIndex-leftIndex)/2);
  this.MergeSort(arr, leftIndex, midIndex);
  this.MergeSort(arr, midIndex+1, rightIndex);
  Merge(arr, leftIndex, midIndex, rightIndex);
  return arr;
}

function Merge (arr, leftIndex, midIndex, rightIndex) {
  var n1 = midIndex - leftIndex + 1;
  var n2 = rightIndex - midIndex;

  var left = [];
  var right = [];

  for(let i = 0; i < n1; i++) left.push(arr[leftIndex + i]);
  for(let i = 0; i < n2; i++) right.push(arr[midIndex + 1 + i]);

  // Merging of array

  var iter_left = 0;
  var iter_right = 0;
  var mergedIndex = leftIndex;
  
  while(iter_left < n1 && iter_right < n2) {
    if(left[iter_left] <= right[iter_right]) {
      arr[mergedIndex] = left[iter_left];
      iter_left++;
    }else{
      arr[mergedIndex] = right[iter_right];
      iter_right++;
    }
    mergedIndex++;
  }

  // In the case of splitting into remainders

  while(iter_left < n1) {
    arr[mergedIndex] = left[iter_left];
    iter_left++;
    mergedIndex++;
  }

  while(iter_right < n2) {
    arr[mergedIndex] = right[iter_right];
    iter_right++;
    mergedIndex++;
  }
}

exports.QuickSort = (arr, low, high) => {
  /*
    Takes a pivot (either random or fixed position) and sort the pivot as a mid for left and right sorting
    Just like merge sort, it will branch out until element < 1
    This is also called partitions
    The following thats the last element as pivot
  */
  if (low < high) {
    let pi = partition(arr, low, high);

    this.QuickSort(arr, low, pi - 1);
    this.QuickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition (arr, low, high) {

  let pivot = arr[high];
  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}