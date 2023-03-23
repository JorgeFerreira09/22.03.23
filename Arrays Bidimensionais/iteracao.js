const matriz = [
    ["linha 1, coluna 1", "linha 1, coluna 2", "linha 1, coluna 1"],
    ["linha 2, coluna 1", "linha 2, coluna 2", "linha 2, coluna 3"],
    ["linha 3, coluna 1", "linha 3, coluna 2", "linha 3, coluna 3"],
]

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
  }

  // Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz