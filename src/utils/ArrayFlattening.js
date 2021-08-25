// freshwork
function flatten(array){
    let arr = [];
    function helper(array){
      for(let i  = 0 ; i < array.length; i++){
          if(Array.isArray(array[i])){
            helper(array[i]);
          } else {
            arr.push(array[i]);
          }
      }
    }
    helper(array);
    return arr;
}

console.log(flatten([1,2,3,[3,5,[3,2,6,[7,8,9]]]]));