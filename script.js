// Código para achar um número aleatório//
var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    // está puxando a tag do HTML//
    elementoResultado.innerHTML = "Você acertou";
    console.log("Acertou");
    // O else significa se não//
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número entre 0 e 10 ";
  } else {
    elementoResultado.innerHTML = "Errou, tente novamente ";
  }
}