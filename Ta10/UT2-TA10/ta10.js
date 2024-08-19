function getSums (nums) {
  const suma = nums.reduce((resultado,num) => resultado + num , 0);
  console.log(suma);
}

getSums([1,2,3]) ;