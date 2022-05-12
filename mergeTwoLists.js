/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 var mergeTwoLists = function(list1, list2) {
  // if one of the lists is null, return the non-null list, or return null if both null
  if (!list1 || !list2) return list1 || list2
  let pointer1 = list1;
  let pointer2 = list2;
  let result;
  let resultPointer;
  // instantiate merged list with lowest value
  if (pointer1.val < pointer2.val) {
      result = new ListNode(pointer1.val);
      pointer1 = pointer1.next;
      resultPointer = result;
  } else {
      result = new ListNode(pointer2.val);
      pointer2 = pointer2.next;
      resultPointer = result;
  }
  // add the next smallest node while both pointers are not null
  while (pointer1 && pointer2) {
      if (pointer1.val < pointer2.val) {
          resultPointer.next = pointer1
          pointer1 = pointer1.next;
          resultPointer = resultPointer.next;
      } else {
          resultPointer.next = pointer2
          pointer2 = pointer2.next;
          resultPointer = resultPointer.next;
      }
  };
  // add remaining nodes
  resultPointer.next = pointer1 || pointer2
  return result;
};



// var mergeTwoLists = function(list1, list2) {
//     let mergeList = [];

//   let count1 = 0;
//   let count2 = 0;
//     while (count1 < list1.length) {
//       // check if equal
//       if (list1[count1] === list2[count2]){
//         mergeList.push(list1[count1])
//         mergeList.push(list2[count2])
//         count1++;
//         count2++;
//       }
//         // check if list2 > list1
//       else if (list1[count1] < list2[count2]) {
//         mergeList.push(list1[count1])
//         count1++;
//       }
//        // check if list1 > list2
//       else if (list1[count1] > list2[count2]) {
//         mergeList.push(list2[count2])
//         count2++;
//       }
//     }
//   const list2Sliced = list2.slice(count2)
//     mergeList = [...mergeList, ...list2Sliced];
//       return mergeList;
//     }
    
// console.log(mergeTwoLists(list1, list2));

// const list1 = [1,10,15];
// const list2 = [1,3,8,8 , 9, 20, 20, 20];
