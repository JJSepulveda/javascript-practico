/*
	codigo para calcular la mediana de una lista
	Falta ordenar la lista (puedes usar el metodo sort de los arrays).
*/

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


const lista1 = [
	100,
	200,
	300,
	500,
	800,
	4000000,
]

const mitadLista1 = parseInt(lista1.length / 2)

function esPar(numero)
{
	if (numero % 2 === 0)
	{
		return true
	}
	else
	{
		return false
	}
}

let mediana;

if(esPar(lista1.length))
{
	const element1 = lista1[mitadLista1]
	const element2 = lista1[mitadLista1 - 1]

	const promedioElemento1y2 = calcularMediaAritmetica([element1, element2])

	mediana = promedioElemento1y2
}
else 
{
	mediana = lista1[mitadLista1]
}