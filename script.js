// Evento que é executado quando o DOM é totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Obter elementos do DOM
    const output = document.getElementById("output");
    const inputForm = document.getElementById("input-form");
    const calcularButton = document.getElementById("calcular");
    const voltarButton = document.getElementById("voltar");
  
    // Função para calcular o consumo de combustível por km/l
    function calculoConsumo(valor1, valor2) {
      return valor1 / valor2;
    }
  
    // Função para calcular o gasto com combustível em reais
    function gasto(valor1, valor2, valor3) {
      return Math.round((valor1 * valor2) / valor3);
    }
  
    // Evento de clique do botão "Calcular"
    calcularButton.addEventListener("click", function () {
      // Obter os valores dos campos de entrada
      const tanque = parseFloat(document.getElementById("tanque").value);
      const gasolinaKm = parseFloat(document.getElementById("gasolinaKm").value);
      const precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
      const alcoolKm = parseFloat(document.getElementById("alcoolKm").value);
      const precoAlcool = parseFloat(document.getElementById("precoAlcool").value);
  
      // Verificar se todos os campos estão preenchidos
      if (!tanque || !gasolinaKm || !precoGasolina || !alcoolKm || !precoAlcool) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      // Calcular o consumo de gasolina e álcool
      const gasolina = calculoConsumo(gasolinaKm, tanque);
      const alcool = calculoConsumo(alcoolKm, tanque);
  
      // Calcular o gasto com gasolina e álcool
      const gastoComGasolina = gasto(gasolinaKm, precoGasolina, gasolina);
      const gastoComAlcool = gasto(alcoolKm, precoAlcool, alcool);
  
      // Gerar a saída HTML com os resultados
      let outputHTML = "";
      outputHTML += "<p>O consumo de gasolina do seu carro é de: " + gasolina.toFixed(2) + " Km/l.</p>";
      outputHTML += "<p>O consumo de álcool do seu carro é de: " + alcool.toFixed(2) + " Km/l.</p>";
      outputHTML += "<p>O gasto com gasolina em reais será de: R$ " + gastoComGasolina + ",00.</p>";
      outputHTML += "<p>O gasto com Álcool em reais será de: R$ " + gastoComAlcool + ",00.</p>";
      outputHTML +=
  
      // Exibir os resultados no elemento de saída
      output.innerHTML = outputHTML;
  
      // Mostrar botão de voltar e esconder o formulário de entrada
      voltarButton.style.display = "block";
      inputForm.style.display = "none";
  
      // Adicionar classe de "feed" para o efeito visual
      output.classList.add("feed");
    });
  
    // Evento de clique do botão "Voltar"
    voltarButton.addEventListener("click", function () {
      // Esconder a saída e mostrar o formulário de entrada novamente
      output.innerHTML = "";
      inputForm.style.display = "grid";
      voltarButton.style.display = "none";
  
      // Remover a classe de "feed" para futuros cálculos
      output.classList.remove("feed");
    });
  });  