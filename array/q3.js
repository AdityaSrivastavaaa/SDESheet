// next_permutation : find next lexicographically greater permutation

// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).



function nextGreaterPermutation(A){
    let n = A.length;

    // Step 1:Find the break point:
    let ind = -1;
    for(let i=n-2;i>=0;i--){
        if(A[i] < A[i+1]){
            ind = i;
            break;
        }
    }
    if(ind == -1){
        A.reverse();
        return A;
    }
    for(let i=n-1;i>ind;i--){
        if(A[i]>A[ind]){
            [A[i],A[ind]] = [A[ind],A[i]];
            break;
        }
    }
    // reverse the right half;
    A.splice(ind + 1, n - ind - 1, ...A.slice(ind + 1).reverse());
    return A;
}

let A = [2, 1, 5, 4, 3, 0, 0];
let ans = nextGreaterPermutation(A);

console.log("The next permutation is: [" + ans.join(" ") + "]");
