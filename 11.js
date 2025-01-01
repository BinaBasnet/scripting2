function findSmallest() {
    const arr = document.getElementById("array").value.split(',').map(Number);
    const smallest = Math.min(...arr);
    document.getElementById("result").innerText = `Smallest: ${smallest}`;
  }