// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running.
// Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.
// level: hard

class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
}

const find_max_cpu_load = function (jobs) {
  jobs.sort((a, b) => a.start - b.start);

  let maxLoad = 0;
  const activeJobs = [jobs[0]];

  let currentLoad = jobs[0].cpu_load;
  for (let i = 1; i < jobs.length; i++) {
    while (activeJobs.length && jobs[i].start > activeJobs[0].end) {
      currentLoad -= activeJobs[0].cpu_load;
      activeJobs.pop();
      console.log(activeJobs);
    }

    activeJobs.push(jobs[i]);
    currentLoad += jobs[i].cpu_load;

    maxLoad = Math.max(maxLoad, currentLoad);
  }
  return maxLoad;
};

// // heap solution:
// const Heap = require('./collections/heap'); //http://www.collectionsjs.com
// function find_max_cpu_load(jobs) {
//     // sort the jobs by start time
//     jobs.sort((a, b) => a.start - b.start);

//     let maxCPULoad = 0,
//       currentCPULoad = 0;
//     const minHeap = new Heap([], null, ((a, b) => b.end - a.end));

//     for (j = 0; j < jobs.length; j++) {
//       // remove all the jobs that have ended
//       while (minHeap.length > 0 && jobs[j].start >= minHeap.peek().end) {
//         currentCPULoad -= minHeap.pop().cpuLoad;
//       }
//       // add the current job into min_heap
//       minHeap.push(jobs[j]);
//       currentCPULoad += jobs[j].cpuLoad;
//       maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
//     }
//     return maxCPULoad;
//   }

// console.log(
//   `Maximum CPU load at any time: ${find_max_cpu_load([
//     new Job(1, 4, 3),
//     new Job(2, 5, 4),
//     new Job(7, 9, 6),
//   ])}`
// ); // 7
// console.log(
//   `Maximum CPU load at any time: ${find_max_cpu_load([
//     new Job(6, 7, 10),
//     new Job(2, 4, 11),
//     new Job(8, 12, 15),
//   ])}`
// ); // 15
// console.log(
//   `"Maximum CPU load at any time: ${find_max_cpu_load([
//     new Job(1, 4, 2),
//     new Job(2, 4, 1),
//     new Job(3, 6, 5),
//   ])}`
// ); // 8

/* 
Time complexity (heap solution): 
The time complexity of the above algorithm is O(N*logN), where ‘N’ is the total number of jobs. 
This is due to the sorting that we did in the beginning. 
Also, while iterating the jobs, we might need to poll/offer jobs to the priority queue. 
Each of these operations can take O(logN). Overall our algorithm will take O(NlogN).

Space complexity:
The space complexity of the above algorithm will be O(N), which is required for sorting. 
Also, in the worst case, we have to insert all the jobs into the priority queue (when all jobs overlap) 
which will also take O(N) space. The overall space complexity of our algorithm is O(N).
*/
