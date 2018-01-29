var phrase = '';
if (action !== '1' && action !== '2') {
  alert('Opcion ingresada no valida');
} else if (action === '1') {
  phrase = prompt('Ingrese su mensaje');
  cipher(phrase);
} else if (action === '2') {
  phrase = prompt('Ingrese su mensaje');
  descipher(phrase);
}


// funcion cipher agregando condicion de espacio

function cipher(sent) {
  var sentence = sent.toUpperCase();
  var arraySentence = sentence.split('');// se forma un array con las letras que componen la cadena de ingreso
  var newArray = [];// creamos un array vacio que almacenará los datos ASCII
  var newSentence = ''; // formaremos en esta variable la nueva cadena encriptada
  if (sent.length === 0 || typeof(sent) === 'number') {
    alert('Input no valido');
  } else {
    for (var i = 0 ; i < sentence.length ; i++) {
      newArray.push(sentence.charCodeAt(i)); // agregamos cada numero en ASCII al array
      var cipherNumber = (newArray[i] - 65 + 33) % 26 + 65; // formula de encriptacion
      var newLetterWhitCipher = String.fromCharCode(cipherNumber); // el numero dado por la formula lo cambiamos segun ASCII 
      newSentence += newLetterWhitCipher; // agregamos el caracter a la nueva cadena
    }
  }alert(newSentence);
}
// funcion para hacer el desifrado
function descipher(sent) {
  var sentence = sent.toUpperCase();
  var arraySentence = sentence.split('');
  var newArray = [];
  var newSentence = '';
  if (sent.length === 0 || typeof(sent) === 'number') {
  	alert('Input no valido');
  } else {
    for (var i = 0 ; i < sentence.length ; i++) {
      newArray.push(sentence.charCodeAt(i));
      var cipherNumber = (newArray[i] - 65 - 7 + 52) % 26 + 65; // se modifica la formula, ahora la letra que buscamos esta 7 espacios antes. 
      var newLetterWhitCipher = String.fromCharCode(cipherNumber);
      newSentence += newLetterWhitCipher;
    }
  }alert(newSentence);
}