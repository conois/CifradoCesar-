# Cifrado Cesar 

####  ALGORITMO DE CESAR **
####  Corresponde a un cifrado por sustitucion, si se ordenan en el alfabeto las letras desde el 0 al 25( de la "a" a la "z") se tiene que el nuevo caracter corresponderá al que esté ubicado 33 espacios mas a la derecha, de este modo: 

#### *Inicio*

1. Crear varible *var_action* y pedir al usuario que señale si quiere cifrar o decifrar  
> herramienta prompt() 

2. Si selecciona cifrado llamar a funcion cipher()  
3. Si selecciona descrifado llamar a funcion descipher()   
4. Si ingresa un dato distinto a los disponibles enviar un mensaje de alerta   
 
#### *Fin*


### _Funcion cifrado_ 

#### *Inicio*  

1. Crear una funcion que tenga como parametro de entrada un argumento, este será la frase que queremos cifrar  
2. Crear una variable que almacene por medio de un array los caracteres que componen el string de entrada  
> *Herramienta= split*

3. Crear un array que nos permita ir almacenando datos  
4. Crear una variable que nos guarde las nuevas letras que contendran el cifrado 

     Una vez creadas las variables se hacen los ciclos repetivos o condicionales segun corresponda 

5. Verificar si los datos ingresados son validos, si son del tipo numero o si el largo de la cadena de entrada es 0 manda un mensaje de error. 
> *Herramientas = typeof y length*  

     si no, ejecuta las siguientes lineas 

6. pushiamos al array creado los valores ASCII de cada letra 
> *Herramienta = charCodeAt()   

7. Aplicamos la formula y guardamos el dato en una variable  
> __fórmula de cifrado__ 
> **(Num. ASCII - 65 + 33 )% 26 + 65 ** 

8. Al dato obtenido en 7, le buscamos su numero en ASCII 
> *Herramienta = String.fromCharCode()

9. Concatenamos a la variable creada al principio la letra que encontramos en 8.  
10. Una vez terminada la iteracion mostramos por medio de un alert el mensaje cifrado 

#### *Fin* 

#### Para crear la funcion descifrado se sigue el mismo procedimiento, la diferencia es que la formula a aplicar sera distinta, en el decifrado tenemos que avanzar posiciones hacia atras, de este modo se deduce que la funcion que determina la nueva posicion sera 
> __fórmula decifrado__ 
> **(Num. ASCII - 65 - 7 + 52 )% 26 + 65 **  



![Alt text](http://i1255.photobucket.com/albums/hh640/Conois/Diagrama%20de%20Flujo%20Cifrado%20Cesar_zpscsnabdph.png) 