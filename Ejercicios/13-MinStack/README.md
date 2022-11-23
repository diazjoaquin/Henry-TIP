![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Min Stack

## Introducción

Para poder comprender el objetivo de esta actividad necesitamos saber **¿Qué es un stack?** Un stack, también conocido como pila es **LIFO** (Last-In First-Out), es decir, el último en entrar es el primero en salir.

En este caso, el ejercicio es implementar un stack que tenga los siguientes métodos:

1. **push(value) :** añadir el elemento, value, al stack.
2. **pop() :** sacar un elemento del stack.
3. **min() :** obtener el elemento con el valor mínimo.
4. **peek():** obtener el elemento que está el en top del Stack

### Importante

- **TODOS** los métodos mencionados anteriormente deben ser de O(1).
- Para la resolución del ejercicio no se puede utilizar **ningún** _Array method_

---

## Solución

### En palabras

1. Implementar un stack normal
2. Luego, implementar un stack con un requisito mas > encontrar el mínimo

#### Importante

**NO PUEDES** guardar el valor mínimo y cada vez que agregas un nuevo valor compararlo **¿POR QUÉ?**
**( ! ) IDEA:** Tener una estructura separada para guardar el mínimo por cada nodo que se agrega, y cuando sacamos el nodo removemos ese mínimo
