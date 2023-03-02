// Create a higher order function and invoke the callback function to test your work. 
//You have been provided an example of a problem and a solution to see how this works
// with our items array.  Study both the problem and the solution to figure out the rest
// of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 /*
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/
// ------TASK 1--------
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}
function getLength(arr, cb) {
return cb(arr.length)
}
getLength(items,function(ind){
  console.log(ind)
})

// ------TASK 2--------
function last(arr, cb) {
  // last passes the last item of the array into the callback.
}
function last (arr,cb){
  return cb(arr[3])
}
last(items,function(lasItem){
  console.log(lasItem)
});

// ------TASK 3--------
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y)
}
function add(x, y) {
  return x + y;

}
console.log(sumNums(10, 90, add));

// ------TASK 4--------
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return mult(x,y);
}
function mult(x,y){
  return x * y;
}
console.log(multiplyNums(8,6,mult));


// ------TASK 5--------
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes (item)){
    cb(true);
  } else{
    cb(false);
  }
}
contains('Notebook',items,function(result){
  console.log(result)//true
});
contains('pen',items,function(result){
  console.log(result)//false
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}