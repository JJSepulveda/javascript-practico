/*

*/

// Helpers o utils
function calcularMediaAritmetica(lista) {
	const sumaLista = lista.reduce(
		// valorAcomulado -> 
		function (valorAcomulado = 0, nuevoElemento) {
			return valorAcomulado + nuevoElemento
		}
	);

	const promedioLista = sumaLista / lista.length

	return promedioLista
}

function esPar(numero)
{
	return (numero % 2 === 0)
}


const salariosCol = colombia.map(
	function (person) {
		return person.salary
	}
)

const salariosColSorted = salariosCol.sort(
	function (salaryA, salaryB) {
		salaryA - salaryB
	}
)

function medianaSalarios(lista)
{
	const mitad = parseInt(lista.length / 2)

	if (esPar(lista.length))
	{
		const personaMitad1 = lista[mitad]
		const personaMitad2 = lista[mitad - 1]
		const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])

		return mediana
	}
	else 
	{
		const personaMitad = lista[mitad]
		return personaMitad
	}
}

medianaGeneralCol = medianaSalarios(salariosColSorted)

/* 
	Separar al top 10% y calcular su mediana 
*/
const spliceStart = (salariosColSorted.length * 90) / 100
const splcieCount = salariosColSorted.length - spliceStart

const salariosColTop10 = salariosColSorted.splice(
	spliceStart,
	splcieCount
)

const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log(
	medianaGeneralCol,
	medianaTop10Col,
)