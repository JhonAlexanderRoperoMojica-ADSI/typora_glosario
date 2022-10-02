#  For each

`forEach()`ejecuta la función `callback`una vez por cada elemento presente en el array en orden ascendente. No es invocada para índices que han sido eliminados o que no han sido inicializados (Ej. sobre arrays `sparse`)

``

```
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```