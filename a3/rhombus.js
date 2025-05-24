function createRhombus() {
  const height = 5; 
  const colorEven = document.getElementById("colorEven").value;
  const colorOdd = document.getElementById("colorOdd").value;
  const symbol = document.getElementById("symbol").value;

  let output = "";

  // top
  for (let i = 0; i < height; i++) {
    output += "<p>" + "&nbsp;".repeat(height - i - 1);
    for (let j = 0; j < (2 * i + 1); j++) {
      const color = j % 2 === 0 ? colorOdd : colorEven;
      output += `<span style="color:${color}">${symbol}</span>`;
    }
    output += "</p>";
  }

  // buttom
  for (let i = height - 2; i >= 0; i--) {
    output += "<p>" + "&nbsp;".repeat(height - i - 1);
    for (let j = 0; j < (2 * i + 1); j++) {
      const color = j % 2 === 0 ? colorOdd : colorEven;
      output += `<span style="color:${color}">${symbol}</span>`;
    }
    output += "</p>";
  }

  document.getElementById("rhombusOutput").innerHTML = output;
}
