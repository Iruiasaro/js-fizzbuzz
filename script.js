//creazione ciclo numeri da 1 a 100
for( var i = 1; i <= 100; i++){
    //condizione: se il numero è divisibile sia per 3 che per 5
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
    //condzione: se il numero è divisibile solo per 3
        }else if( i % 3 === 0){
            console.log("Fizz");
    //condizione: se il numero è divisibile solo per 5
        }else if( i % 5 === 0){
            console.log("Buzz");
    //condizione: se il numero NON è divisibile per tre e/o per 5
        }else{
            console.log(i);
        }
    }