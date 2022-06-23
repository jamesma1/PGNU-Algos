// Insertion Sort is a simple, stable, in-place, comparison sorting algorithm.
// It just inserts the given elements one by one.

// time: O(n^2)
// space: O(1)
const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    const currentEle = array[i];

    while (j > -1 && currentEle < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentEle;
  }
  return array;
};

const array = [1, 20, 9, -1, 0, -100];
console.log(insertionSort(array));

// The iteration starts at the second element. We consider the first element sorted by default.
// For each iteration, we keep track of the current element. Each current element will be the first
// element of the unsorted array - and each element before it will belong to the sorted array.

// Through a while loop, we go through the sorted array and shift elements to the right, opening up
// a space for the current element to be inserted.

// Once we find the proper place for it, the current element is inserted into the newly-opened slot.
// This process is repeated for each iteration until the array is sorted.

/* 
When to use insertion sort:
-When the array is nearly sorted - since insertion sort is adaptive
-When we have memory usage constraints
-When a simple sorting implementation is desired
-When the array to be sorted is relatively small
-When you need to add more elements in an already sorted array, because insertion sort 
will add the new elements in their proper place without resorting the entire collection

When to avoid using insertion sort:
-The array to be sorted has a large number of elements
-The array is completely unsorted
-You want a faster run time and memory is not a concern.
*/
