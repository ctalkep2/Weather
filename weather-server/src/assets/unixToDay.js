const days = [
  'ВОСКРЕСЕНЬЕ','ПОНЕДЕЛЬНИК','ВТОРНИК','СРЕДА','ЧЕТВЕРГ','ПЯТНИЦА','СУББОТА'
];

const unixToDay =  function(unix) {
  let date = new Date(unix * 1000);
  
  return days[date.getDay()];
}

module.exports = unixToDay;