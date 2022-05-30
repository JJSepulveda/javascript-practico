//Figuras javascript

// Codigo del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm")

// cont perimetroCuadrado = ladoCuadrado * 4
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")
function perimetroCuadrado (lado) 
{
	return lado * 4
} 

// cont areaCuadrado = ladoCuadrado * ladoCuadrado
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")
function areaCuadrado (lado)
{
	return lado * lado
}


console.groupEnd()

// Codigo del triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4

console.log(
	"Los lados del triangulo miden: " 
	+ ladoTriangulo1 
	+ "cm, "
	+ ladoTriangulo2
	+ "cm, "
	+ baseTriangulo 
	+ "cm"
)

const alturaTriangulo = 5.5
console.log("Altura del triangulo: " + alturaTriangulo)

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
function perimetroTriangulo(lado1, lado2, base)
{
	return lado1 + lado2 + base
}

//const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2
function areaTriangulo(algura, base)
{
	return (altura * base) / 2
} 

console.groupEnd()


// Codigo del circulo
console.group("Circulos")

const radio = 4
console.log("Radio del circulo: " + radio + " cm")

//const diametro = radio*2
function diametroCirculo(radio)
{
	return radio*2
}

const PI = Math.PI
console.log("PI: " + PI)

//const perimetroCirculo = diametro * PI
function perimetroCirculo(radio) 
{
	const diametro = diametroCirculo(radio)
	return diametro * PI
}

//const areaCirculo = (radio * radio) * PI
function areaCirculo(radio) {
	return (radio * radio) * PI
}


console.groupEnd()

// Aqui interactuamos con el HTML.

function calcularPerimetroCuadrado()
{
	const input = document.getElementById("InputCuadrado")
	const value = input.value

	const perimetro = perimetroCuadrado(value)

	alert(perimetro)
}

function calcularAreaCuadrado() 
{
	const input = document.getElementById("InputCuadrado")
	const value = input.value

	const area = areaCuadrado(value)

	alert(area)
}