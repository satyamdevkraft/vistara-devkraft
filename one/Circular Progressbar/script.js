console.clear();

// Get all the Meters
const meters = document.querySelectorAll('svg[data-value] .meter');


meters.forEach( (path) => {
  console.log(path)
  
  let length = path.getTotalLength();
  console.log(length)
  
  path.style.strokeDashoffset = length;
  path.style.strokeDasharray = length;

  // Get the value of the meter
 
 let value=parseInt(document.querySelector('.points').innerText)
 
 console.log(value)
  
  // Calculate the percentage of the total length
  let total = length * ((25000 - value) / 25000);
  console.log(total)
  
  path.getBoundingClientRect();
  path.style.strokeDashoffset = Math.max(0, total);  
});
