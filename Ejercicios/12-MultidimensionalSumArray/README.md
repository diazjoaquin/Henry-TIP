![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Multi-Dimensional SumArray

## Introducción

Ya trabajamos con arreglos de una única dimensión, ahora subiremos un escalón e iremos por arreglos de dos dimensiones, es decir, un arreglo de arreglos de enteros.

En este caso, el objetivo es encontrar la suma de todos los elementos del arreglo.

### Ejemplos

- **mdArray**: [1,2,3,4] | **output**: 10

- **mdArraySum**: [ [2,4] , [1], [4,2,1] ] | **output**: 14

- **mdArraySum**: [ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ] | **output**: 26

#### IMPORTANTE

Para la resolución de este ejercicio no se puede utilizar el método **Array.flat()**

---

## Solución

### En palabras

Algunas consideraciones a tener en cuenta antes de implementar una solución.

1. La suma inicial es cero.
2. Chequea cada elemento en el arreglo.
   1. Si no es un arreglo agrégalo a la suma.
   2. Si es un arreglo agrega la suma de todos sus elementos a la suma.
3. Devuelve el total.
