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
  jobs.sort((a, b) => a - b);
  const maxLoad = 0;
  const activeJobs = [jobs[0]];
};

console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 3),
    new Job(2, 5, 4),
    new Job(7, 9, 6),
  ])}`
);
console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(6, 7, 10),
    new Job(2, 4, 11),
    new Job(8, 12, 15),
  ])}`
);
console.log(
  `"Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 2),
    new Job(2, 4, 1),
    new Job(3, 6, 5),
  ])}`
);
