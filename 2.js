function alphabetOrder(str) {
    return str.split('').sort().join('');
  }

  const result = alphabetOrder('bina');
  document.getElementById("output").innerText = `Alphabetical Order: ${result}`;