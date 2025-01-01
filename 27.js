// a. Get the first paragraph by using querySelector
let firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent);

// b. Get paragraphs by ID
let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let para3 = document.querySelector("#para3");
let para4 = document.querySelector("#para4");

// c. Get all paragraphs as nodeList
let allParagraphs = document.querySelectorAll("p");

// d. Loop through the nodeList and get the text content
allParagraphs.forEach(para => {
  console.log(para.textContent);
});

// e. Set text content for the fourth paragraph
para4.textContent = "Updated Fourth Paragraph"; // Corrected the text

// f. Set id and class for all paragraphs
allParagraphs.forEach((para, index) => {
  para.id = `newPara${index + 1}`; // Unique id for each paragraph
  para.classList.add(`classPara${index + 1}`); // Unique class for each paragraph
});

// g. Change style of each paragraph
allParagraphs.forEach(para => {
  para.style.color = "blue";
  para.style.backgroundColor = "yellow";
  para.style.border = "2px solid black";
  para.style.fontSize = "16px";
  para.style.fontFamily = "Arial";
});

// h. Set different colors for paragraphs
allParagraphs.forEach((para, index) => {
  if (index % 2 === 0) {
    para.style.color = "green";
  } else {
    para.style.color = "red";
  }
});

// i. Set text content, id, and class to each paragraph
allParagraphs.forEach((para, index) => {
  para.textContent = `Updated Paragraph ${index + 1}`; // Updated text content
  para.id = `paragraph-${index + 1}`; // Updated id
  para.className = `class-${index + 1}`; // Updated class
});