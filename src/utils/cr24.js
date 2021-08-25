import { Suspense, useCallback, useEffect } from "react";
import axios from "../axios";

const removeDuplicate = (arr) => {
  const unique = [...new Set(arr)];
  // arr.filter((item, index) => arr.indexOf(item) === index)
  return unique
}
const arr = [1, 2, 2, 3, 4, 5, 2];

console.log(removeDuplicate(arr));
// [1,2,3,4,5]


useEffect(() => {

 
 return function(){
    const clearTimeout = () =>{
    
    }
 }
}, []);
const Child1 = React.lazy(import(''...));
const [count, setCpount] = useState();
const handleClick = useCallback(() => {} , [count]);
return(
    <>
      <Suspense fallback="loading">
         <Child1 />
      </Suspense>
      <Child2 onClick={handleClick}/>
      <Child3 onClick={handleClick}/>
    </>
)

