// scrivi un programma che stampi in console i numeri da 1 a 100;
// per i multipli di 3 stampi "Fizz" al posto del numero;
// per i multipli di 5 stampi "Buzz" al posto del numero;
// per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz";
// Bonus 1 - creo un container nel DOM e aggiungo un elemento
    // html con il numero o la stringa da mostrare;
//Bonus 2 -Applico stili differenti agli elementi aggiunti al DOM,
        // a seconda che il valore inserito sia un numero, un fizz,
        // un buzz o un fizzbuzz;

const numberWrapperRow = document.getElementById('number-wrapper');        

for ( let index = 1; index <= 100; index++){

    const flashyBox = document.createElement('div');

    flashyBox.classList.add('col-2', 'box');

    flashyBox.innerHTML = index;

    numberWrapperRow.append(flashyBox);

    if ((index % 3) == 0 && (index % 5) == 0) {
        console.log("FizzBuzz");
        flashyBox.classList.add('bg_1');
        
    } else if ((index % 3) == 0) {
        console.log("Fizz");
        flashyBox.classList.add('bg_2');

    } else if ((index % 5) == 0) {
        console.log("Buzz");
        flashyBox.classList.add('bg_3');

    } else {
        console.log(index);
        flashyBox.classList.add('bg_4');

    }
    
    
}



