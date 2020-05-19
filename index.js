/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let str = timeString.slice(0,2)
  parseInt(str);
  if ( str < 12){
    return "Good Morning";
  }
  if ( str < 12 && str < 17 ){
    return "Good Afternoon";
  }
  if ( str > 17){
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string){
  document.querySelector('#greeting').innerText = `${string}`
}
