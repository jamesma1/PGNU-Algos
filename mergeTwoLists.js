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
    let mergeList = [];

  let count1 = 0;
  let count2 = 0;
    while (count1 < list1.length) {
      // check if equal
      if (list1[count1] === list2[count2]){
        mergeList.push(list1[count1])
        mergeList.push(list2[count2])
        count1++;
        count2++;
      }
        // check if list2 > list1
      else if (list1[count1] < list2[count2]) {
        mergeList.push(list1[count1])
        count1++;
      }
       // check if list1 > list2
      else if (list1[count1] > list2[count2]) {
        mergeList.push(list2[count2])
        count2++;
      }
    }
  const list2Sliced = list2.slice(count2)
    mergeList = [...mergeList, ...list2Sliced];
      return mergeList;
    }
    
console.log(mergeTwoLists(list1, list2));

const list1 = [1,10,15];
const list2 = [1,3,8,8 , 9, 20, 20, 20];
