function getWeekend() {
    let today = new Date();
    let day = today.getDay();
    let weekend = day === 6 ? today : new Date(today.setDate(today.getDate() + (6 - day)));
    return weekend.toDateString();
  }
  document.getElementById("result").innerText = `Next Weekend: ${getWeekend()}`;