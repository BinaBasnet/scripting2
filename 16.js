let result = "";
    for (let i = 0; i <= 5; i++) {
      result += `${i} is ${i % 2 === 0 ? "even" : "odd"}.\n`;
    }
    document.getElementById("result").innerText = result;