
function PromiseAll(arr){
    let results = [];
    let fullFilled = 0;

     
    return new Promise(function(resolve, reject){
      arr.forEach((element, indx) => {
          element.then((res)=> {
              fullFilled++;
              results[indx] = res;
          })
          .catch((err) => reject(err))
      });
      if(fullFilled === arr.length){
        resolve(results);
      }
    });
}


function PromiseAllNew(arr){
    const results = [];
    let fullFilled = 0;
    return new Promise((resolve, reject) => {
        arr.forEach((element, index) => {
            element.then((res) => {
               fullFilled++;
               results[index] = res;
            })
            .catch((err) => reject(err))
        })
        if(fullFilled === arr.length){
            resolve(results);
        }
    })
}

// const resolvePromise = new Promise();

// resolvePromise.then(() => setTimeout(() => {
//     console.log("show a after 1000");
// }, 1000))

// resolvePromise();

function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms)
    })
}

delay(5000).then((ms) =>  console.log("i will come after", ms, "ms"))



function promiseAll(arr){
    let fullFilled = 0;
    let results = [];
    return new Promise((resolve, reject) => {
        arr.forEach((item) =>{
            item.then((res) => {
                fullFilled++;
                results.push(res);
            })
            .catch((err) => reject(err));
        })
        if(fullFilled === arr.length){
            resolve(results);
        }
    })
}

function delayTwice(ms){
  return new Promise((resolve, reject) => {
      setTimeout(() => resolve(ms), ms);
  })
}

delay(5000).then((res) => console.log("promise delayed by ms", res));


function debounce(func, wait){
    let timer = 0;
   return (args) => {
      clearTimeout(timer); 
      timer = setTimeout(() => func(...args), wait);
   }
}

class HashMap{
 constructor(){
    this.Map = {}
 }

 getIndx(val){
   
 }



}