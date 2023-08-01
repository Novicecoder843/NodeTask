function Sum_of_arr_integers(arr) {
  
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
  
    return sum;
  }
  
  // Example 
  const new_array = [45,677,22,3456];
  const result = Sum_of_arr_integers(new_array);
  console.log('Sum of integers of array:', result); // Output: Sum of integers of array: 4200
  