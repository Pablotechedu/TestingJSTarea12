let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/*TAREA 1
Crea una función generateTarget().  Esta función debe
devolver un número entero aleatorio entre 0 y 9.

El propósito de estafunción es llamarse al comienzo de 
cada nueva ronda para generar el nuevo número objetivo 
secreto.*/

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

/*TAREA 2
Crea una función compareGuesses(). Esta función:

 * Tiene tres parámetros que representan la suposición
   del usuario (humano), una suposición de la computadora
   y el número objetivo secreto que se debe adivinar.

 * Determina qué jugdor (humano o computadora) gana
   en función de la conjeura más cercana al objetivo.
   Si ambos jugadores están empatados, el usuario
   humano debería ganar.

 * Devuelve true si el jugador humano gana y false si
   el jugador de la computadora gana.

El proposito de esta función es llamarla en cada
ronda para determinar qué conjetura es la más
cercana al número objetivo.
   */

function compareGuesses(humanGuessInput, computerGuess, target) {
  const humanDifference = Math.abs(target - humanGuessInput);
  const computerDifference = Math.abs(target - computerGuess);

  if (humanDifference <= computerDifference) {
    return true; // Human wins or it's a tie
  } else {
    return false; // Computer wins
  }
}

/*TAREA 3 
Crea una función updateScore().  Esta función:
    * Tiene un único parámetro.  Este parámetro será un
      valor de cadena que representa al ganador.
    * Aumenta la variable de puntuación (humanScore o
      computerScore) en 1 según el ganador que se pasa
      a updateScore. La cadena que se pasa será 'human'
      o 'computer'.
    * No es necesario devolver ningún valor.

El propósito de esta función es utilizarse para aumentar
correctamente la puntuación del ganador después de 
cada ronda.*/

function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

/*TAREA 4
Crea una función advanceRound().  Esta función debe
incrementar elvalor de currentRoundNumber en 1.

El propósito de esta función es actualizar el número de ronda
después de cada ronda.

Después de completar el juego advanceRound(), su juego Number
Guesser debería estar completamente operativo.
Debería poder adivinar, ver cómo su puntaje o el de la
computadora aumentan correctamente, pasar a la siguiente
ronda y ver la ronda correcta en la pantalla.*/

function advanceRound() {
  currentRoundNumber++;
}
console.log("Número de ronda actual:", currentRoundNumber); // Debería ser 2

/*TAREA 5 
Comprueba que tu código funciona correctamente 
invocando las funciones que acabas de escribir en 
script.js con entradas de muestra. 
Puedes eliminar este código una vez que estés 
convencido de que todo funciona como debería.*/

console.log(generateTarget()); // Debería imprimir un número entre 0 y 9
console.log(compareGuesses(3, 5, 4)); // Debería imprimir true si la suposición del humano está más cerca o igual de cerca que la de la computadora
updateScore("human");
console.log(humanScore); // Debería imprimir 1
updateScore("computer");
console.log(computerScore); // Debería imprimir 1
advanceRound();
console.log(currentRoundNumber); // Debería imprimir 2

/*TAREA 6 
Ejecuta tu código y juega algunas rondas del juego
para asegurarte de que todo funciona como debería.*/
