let nums1 = [1,2,2,1,4, 9], nums2 = [1,4,9];

function getIntersection(nums1, nums2){
    let preProcessTarget = nums1, loopTarget = nums2;
    const countMap = new Map();
    const result = [];
    if(nums1.length > nums2.length){
        preProcessTarget = nums2;
        loopTarget = nums1
    }
    
    for(let num of preProcessTarget){
        const count = countMap.get(num);
        if(countMap.has(num)){
            countMap.set(num, count + 1)
        } else{
            countMap.set(num, 1)
        }
    }
   
    for(let num of loopTarget){
        const count = countMap.get(num);
        if(countMap.has(num)){
            result.push(num);
            if(count === 1){
               countMap.delete(num)
            } else {
                countMap.set(num, count - 1)
            }
        }
    }

    return result;
    
}

console.log(getIntersection(nums1, nums2));