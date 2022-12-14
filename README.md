# Scope

Es una función que sirve como un cierre en JavaScript y, por lo tanto, crea un ámbito, de modo que (por ejemplo) no se puede acceder a una variable definida exclusivamente dentro de la función desde fuera de la función o dentro de otras funciones

``

```
function exampleFunction() {
    var x = "declarada dentro de la función"; // x solo se puede utilizar en exampleFunction
    console.log("funcion interna");
    console.log(x);
}

console.log(x);
```

# Clausula

Si se ejecuta este código tendrá exactamente el mismo efecto que el ejemplo anterior: se muestra el texto "Mozilla" en un cuadro de alerta de Javascript.

``

```
function creaFunc() {
  var nombre = "Mozilla";
  function muestraNombre() {
    alert(nombre);
  }
  return muestraNombre;
}

var miFunc = creaFunc();
miFunc();
```

# Separadores

 es un parámetro opcional. Define el carácter o la expresión regular que se utilizará para romper la string. Si no se utiliza, se devuelve la misma string (matriz de un solo elemento)

``

```
let str = "¡Si, Tu puedes hacerlo!";

console.log(str[0]); // ¡
console.log(str[1]); // S
console.log(str[2]); // i
console.log(str[3]); // ,
...
console.log(str[10]); // e
```

# Funciones Flecha

Una expresión de función flecha es una alternativa compacta a una `expresión de función`tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

``

```
// Función tradicional
function (a){
  return a + 100;
}

// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
  return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
a => a + 100;
```

# Expresión de función

En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

``

```
const square = function(number) { return number * number }
var x = square(4) // x obtiene el valor 16
```

### 

# Funciones Declarativas

En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función

`

```
var` `a = sum(1,2);
```

 

```
function` `sum(a,b) {
  ``return` `a + b;
}
```

`