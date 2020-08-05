let timeNode2 = document.getElementById('time-node2');
function getCurrentTimeString2(dots) {
  let timeString = new Date().toTimeString().replace(/:[0-9]{2} .*/, '');
  return dots ? timeString : timeString.replace(/:/, ' ');
}
setInterval(
  function() { 
    timeNode2.innerHTML = getCurrentTimeString2(Math.round(Date.now() / 1000) % 2);
  },
  1000
);