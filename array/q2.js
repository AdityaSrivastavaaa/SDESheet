// Program to generate Pascal's Triangle


// Problem Statement: This problem has 3 variations. They are stated below:

// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

// In Pascal’s triangle, each number is the sum of the two numbers directly above it as shown in the figure below:

// Example 1:
// Input Format:
//  N = 5, r = 5, c = 3
// Result:
//  6 (for variation 1)
// 1 4 6 4 1 (for variation 2)

// 1 
// 1 1 
// 1 2 1 
// 1 3 3 1 
// 1 4 6 4 1    (for variation 3)

// Explanation:
//  There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.



// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

// Solution 
function nCr(n,r){
    let res = 1;
    for(let i=0;i<r;i++){
        res = res*(n-i);
        res = res/(i+1);

    }
    return res
}
function pascalTriangle(n,r){
    const element = nCr(n-1,r-1);
    return element;
}
const n = prompt("Enter Row number : ")
// const r = prompt("Enter Col Number : ");
// const result = pascalTriangle(n,r);
// console.log(result)


// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

function nRow(n){
   let ans =1 ;
   let ansRow = [1];
//    console.log(ans + " ");

   for(let i=1;i<n;i++){
    ans = ans*(n-i);
    ans=ans/i;
 ansRow.push(ans);
    //  console.log(ans + " ");
   }
//    console.log(n);
return ansRow;
}
// nRow(n);

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

function pascalTriangle2(n){
    let ans = []
      for(let i=1;i<=n;i++){
         ans.push(nRow(i));
      }
    return ans;
}

let ans = pascalTriangle2(n);
for(let i=0;i<ans.length;i++){
    console.log(ans[i].join(""));
   
}

// leetcode solutioon 
var generate = function(numRows) {
    var triangle = [];

//First base case
    if(numRows == 0) { 
        return triangle
    }

    for (var i = 0; i < numRows; i++) {

        triangle[i] = [];
//Second base case
        triangle[i][0] = 1;

        for (var j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        }
//The last element of all rows are always 1.
        triangle[i][i] = 1;
    }

    return triangle;
}