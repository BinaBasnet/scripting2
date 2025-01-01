function countVowels(str) {
    const vowels = 'beenaa';
    return [...str].filter(char => vowels.includes(char)).length;
  }

  const result = countVowels('webmaster');
  document.getElementById("output").innerText = `Vowel Count: ${result}`;