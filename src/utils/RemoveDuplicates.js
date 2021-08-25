//cars24

const removeDuplicate = (arr, key) => {

    const firstMethod = () => {
       const singlesArr = arr.length && [...new Set(arr.filter((item, index) => arr.indexOf(item) === index))];
       console.log(singlesArr);
       return singlesArr;
    }
    
    const secondMethod = () => {
        const unique = [];
        for(let i = 0; i < arr.length; i++){
            if(unique.indexOf(arr[i]) < 0){
                unique.push(arr[i])
            }
        }
        return unique;
    }

    const thirdMethod = () =>{
      const unique = new Map(arr.map((item) => {
          return [key(item), item]
      }))
      return [...unique.values()]
    }

    const forthMethod = () => {
      const unique = [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];
      return unique;
    }

    const fifthMethod = () => {
        const unique = [];
        let lp = 0;
        let hp = arr.length;
        for(let i = 0; i < arr.length ; i++){
           const indx1 = arr[lp];
           const indx2 = arr[hp];
           console.log(indx2, indx1);
           if(indx1 === indx2){
               unique.push(indx1)
               lp++;
               hp--;
           } else if(indx1 > indx2){
               lp++;
           } else{
               hp--
           }
        }
        console.log("inside 3");
        return unique;
      }
    return fifthMethod();
}

const 
arr = [1,2,1,3,4,2,2];
const arrObj = [{name: "surbhi", age: "28"}, {name: "surbhi", age: "45"}, {name: "vivek", age: "28"}, {name: "diksha", age: "54"}];

// console.log(removeDuplicate(arrObj, it => it.name));
console.log(removeDuplicate(arr));
// console.log(removeDuplicate.firstMethod);
// console.log(removeDuplicate(arrObj));

