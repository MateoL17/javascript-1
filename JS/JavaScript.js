function verificarPromedio() {
    const notas = [
      parseFloat(document.getElementById('nota1').value),
      parseFloat(document.getElementById('nota2').value),
      parseFloat(document.getElementById('nota3').value),
      parseFloat(document.getElementById('nota4').value),
      parseFloat(document.getElementById('nota5').value)
    ];
  
    // Validar que todas las notas esten en el rango de 0 a 10
    for (let i = 0; i < notas.length; i++) {
      if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
        document.getElementById('resultado').textContent =
          `La nota ${i + 1} no es válida. Debe estar entre 0 y 10.`;
        return;
      }
    }
  
    const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    let mensaje = `Promedio: ${promedio.toFixed(2)} - `;
  
    if (promedio >= 7) {
      mensaje += "Pasa de año";
    } else if (promedio >= 3.5) {
      mensaje += "Está suspenso.";
    } else {
      mensaje += "Pierde el semestre.";
    }
  
    document.getElementById('resultado').textContent = mensaje;
}
  