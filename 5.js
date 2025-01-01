const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const output = `
  mm-dd-yyyy: ${mm}-${dd}-${yyyy} <br>
  mm/dd/yyyy: ${mm}/${dd}/${yyyy} <br>
  dd-mm-yyyy: ${dd}-${mm}-${yyyy} <br>
  dd/mm/yyyy: ${dd}/${mm}/${yyyy}
`;

document.getElementById("output").innerHTML = output;