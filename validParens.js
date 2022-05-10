/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  //     have a stack (LIFO) data structure to keep track of closing brackets in order
      const stack = [];
  //     for loop to iterate over the cahracters of the string
      for (const character of s){
  //     set of conditionals to keep track of opening parentheses
  //         push corresoponding closing parens into queue
          if (character === '('){
              stack.push(')');
          } else if (character === '['){
              stack.push(']');
          } else if (character === '{'){
              stack.push('}');
          }
  //     set of conditionals to handle closing parens
  //         keep track of and shift the first element in the stack off
  //         if not matching return false
          if (character === ')' || character === ']' || character === '}'){
              const shiftedChar = stack.pop();
              if (shiftedChar !== character) return false;
          }
      }
  //     if anything left in stack at end of loop return false
      if (stack.length !== 0) return false;
  //     return true
      return true;
  };
