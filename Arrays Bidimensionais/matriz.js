const matriz = [
    ["linha 1, coluna 1", "linha 1, coluna 2", "linha 1, coluna 1"],
    ["linha 2, coluna 1", "linha 2, coluna 2", "linha 2, coluna 3"],
    ["linha 3, coluna 1", "linha 3, coluna 2", "linha 3, coluna 3"],
]

// console.table(matriz)

matriz.push(["Nova Linha 1"])
matriz.push(["Nova Linha 2"])
matriz.push(["Nova Linha 3"])
// matriz[0].push("Nova Coluna")
// matriz[1].push("Nova Coluna")
// matriz[2].push("Nova Coluna")

console.table(matriz)