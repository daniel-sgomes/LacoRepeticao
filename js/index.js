let n = parseFloat(prompt("Escolha uma tabuada:"));

for (let i = 0; i <= 50; i++) {
  document.write(n + " x " + i + " = " + n * i + "<br>");

  if (i % 10 === 0 && i > 0) {
    document.write("<hr>");
  }
}