
// 1.Función para calcular el área de un triángulo teniendo las variables Base y Altura

// formula =  Area = 1/2 *base*height. 
// base = b, height = a

const getAreaTriangle = (b, a) => {
    const area = (1 / 2) * b * a;
    return area;
}

console.log(getAreaTriangle())


//2.Función para calcular el área de un círculo, se envía como parámetro el radio del círculo 

//formula =  Area = π * radio2

const getAreaCircle = (radio) => {
    const pi = 3.1416;
    const area = pi * Math.pow(radio, 2);
    return area;

}

console.log(getAreaCircle())