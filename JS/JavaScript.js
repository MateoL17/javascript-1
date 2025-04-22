// Se declara la función
function verificarPromedio() {
    // Un array o arreglo con el valor de las 5 notas ingresadas
    const notas = [
      parseFloat(document.getElementById('nota1').value),
      parseFloat(document.getElementById('nota2').value),
      parseFloat(document.getElementById('nota3').value),
      parseFloat(document.getElementById('nota4').value),
      parseFloat(document.getElementById('nota5').value)
    ];
  
    // Esta sección de codigo valida que todas las notas esten en el rango de 0 a 10
    for (let i = 0; i < notas.length; i++) {
      if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
        document.getElementById('resultado').textContent =
          "La nota ${i + 1} no es válida. Debe estar entre 0 y 10.";
        return;
      }
    }
  
    // Suma todos los valores con el .reduce y da el promedio dividiendo entre la cantidad de notas ingresadas
    const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    let mensaje = `Promedio: ${promedio.toFixed(2)} - `;
  
    // Y con el valor del promedio se verifica si tienes mas, igual o menos de 7 y menos o igual de 3.5
    if (promedio >= 7) {
      mensaje += "Pasa de año";
    } else if (promedio >= 3.5) {
      mensaje += "Está suspenso.";
    } else {
      mensaje += "Pierde el semestre.";
    }
  
    // Se imprime el resultado en el documento
    document.getElementById('resultado').textContent = mensaje;
}
  