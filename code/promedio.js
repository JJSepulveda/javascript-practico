/*
	Falta integrar con html
*/
const lista1 = [
	100,
	200,
	300,
	400,
	500,
];

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++)
{
	sumaLista1 = sumaLista1 + lista1[i]
}

const promedioLista1 = sumaLista1 / lista1.length

function calcularMediaAritmetica(lista) {
	// let sumaLista = 0;
	// for (let i = 0; i < lista.length; i++)
	// {
	// 	sumaLista = sumaLista + lista[i]
	// }

	const sumaLista = lista.reduce(
		// valorAcomulado -> 
		function (valorAcomulado = 0, nuevoElemento) {
			return valorAcomulado + nuevoElemento
		}
	);

	const promedioLista = sumaLista / lista.length

	return promedioLista
}
