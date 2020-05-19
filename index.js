/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  timeString.parseInt(slice(0,2));
  if ( timeString < 12){
    return "Good Morning";
  }
  if ( timeString < 12 && timeString < 17 ){
    return "Good Afternoon";
  }
  if ( timeString > 17){
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string){
  document.querySelector('#greeting').innerText = '${string}'
}
