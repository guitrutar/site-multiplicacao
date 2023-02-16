function getValue() {
  let n1 = document.getElementById("numero");
  let n2 = document.getElementById("multiplicar");

  let v1 = n1.value;
  let v2 = n2.value;


  const result = document.getElementById("result");
  result.innerText = v1 * v2;
}