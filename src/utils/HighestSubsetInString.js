//intuit

const str1 = "aabcdghfahjkliyu"
function largestSequence(str){
    let longestSeq = "";
    let resultSeq = "";
    for(let i = 0; i < str.length; i++){
        const idx = longestSeq.indexOf(str[i])
        if(idx === -1){
            longestSeq += str[i]
        } else {
            if(resultSeq.length < longestSeq.length){
                resultSeq = longestSeq;
            }
            longestSeq = "";
        }
    }
    console.log(resultSeq);
    return resultSeq;
}

const str2 = "ssrshigh";
largestSequence(str2);