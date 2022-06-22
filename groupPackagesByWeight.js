// question from amazon assessment

// To increase efficiency, the Amazon
// shipping team will group packages being
// shipped according to weight. They will
// merge a lighter package with a heavier®
// package, which eliminates the need for
// separate shipments.
// More formally, consider n packages, where
// packageWeights(i] represents the weight
// of the jth package. You can combine the th
// and (i+ 1)th package if packageWeightsti] <
// packageWeightsli+1], then discard the th
// package. After this operation, the number
// of packages is reduced by 1 and the
// weight of the (/+1)t package increases by
// packageWeights[I]. You can merge the
// packages any number of times.

const getHeaviestPackage = (packageWeights) => {
  const combinedPackages = [];

  let firstPointer = 0;
  let secondPointer = 1;
  while (secondPointer < packageWeights.length) { 
    if (packageWeights[firstPointer] >= packageWeights[secondPointer]) {
      combinedPackages.push(packageWeights[firstPointer]);
    }
    else {
      const subset = [packageWeights[firstPointer]];
      
      while (packageWeights[firstPointer] < packageWeights[secondPointer]) {
        subset.push(packageWeights[secondPointer]);
        firstPointer++;
        secondPointer++;
      }
      console.log('subset', subset)
      let sum = subset.pop();
      let lastEle;
      while (subset.length > 0) {
        lastEle = subset.pop();
        sum += lastEle;
      }
      console.log('sum', sum)
      combinedPackages.push(sum);
      firstPointer = secondPointer;
      secondPointer = firstPointer + 1;
      console.log('firstPointer', firstPointer)
      console.log('secondPointer', secondPointer)
    }
  }
  console.log('combinedPackages', combinedPackages)
  return Math.max(...combinedPackages);
}

// // fernando's solution: 
// function intervals(arr) {
//   let res = [0];
//   let max = 0;
//   let idx = 0;
//   arr.forEach(element => {
//     if (element > max) res[idx] += element;
//     else res[++idx] = element;

//     max = element;
//   })
//   return res;
// }


const packages = [1, 2, 49, 192, 8, 8, 10, 2, 1, 80, 0];
// [244, 26, 2, 81, 0] // 244
console.log(getHeaviestPackage(packages));