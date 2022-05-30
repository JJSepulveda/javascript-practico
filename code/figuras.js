//Figuras javascript

// Codigo del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")

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

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("Perimetro del triangulo: " + perimetroTriangulo)

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2
console.log("Area del triangulo: " + areaTriangulo)

console.groupEnd()


// Codigo del circulo
console.group("Circulos")

const radio = 4
console.log("Radio del circulo: " + radio + " cm")

const diametro = radio*2
console.log("diametro del circulo: " + diametro + " cm")

const PI = Math.PI
console.log("PI: " + PI)

const perimetroCirculo = diametro * PI
console.log("Perimetro del circulo: " + perimetroCirculo + " cm")

const areaCirculo = (radio * radio) * PI
console.log("Area del circulo: " + areaCirculo + " cm")



console.groupEnd()