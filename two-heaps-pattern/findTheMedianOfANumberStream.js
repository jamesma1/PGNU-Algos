/* Design a class to calculate the median of a number stream. The class should have the following two methods:

insertNum(int num): stores the number in the class
findMedian(): returns the median of all numbers inserted in the class
If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

level: medium
*/

/*
The best data structure that comes to mind to find the smallest or largest number among a list of numbers is a Heap.

We can store the first half of numbers (i.e., smallNumList) in a Max Heap. We should use a Max Heap as we are interested in knowing the largest number in the first half.
We can store the second half of numbers (i.e., largeNumList) in a Min Heap, as we are interested in knowing the smallest number in the second half.
Inserting a number in a heap will take O(logN), which is better than the brute force approach.
At any time, the median of the current list of numbers can be calculated from the top element of the two heaps. */

const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b); // containing first half of numbers
    this.minHeap = new Heap([], null, (a, b) => b - a); // containing second half of numbers
  }

  insert_num(num) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    // either both the heaps will have equal number of elements or max-heap will have one
    // more element than the min-heap
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_median() {
    if (this.maxHeap.length === this.minHeap.length) {
      // we have even number of elements, take the average of middle two elements
      return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
    }

    // because max-heap will have one more element than the min-heap
    return this.maxHeap.peek();
  }
}

const medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);

/*
Time complexity:
The time complexity of the insertNum() will be O(logN), due to the insertion in the heap. T
The time complexity of the findMedian() will be O(1) as we can find the median from the top elements of the heaps.

Space complexity:
The space complexity will be O(N) because, as at any time, we will be storing all the numbers.

 */
