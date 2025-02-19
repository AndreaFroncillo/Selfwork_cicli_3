let drink;

do{
    drink = Number(prompt(`Cosa vuoi da bere? 1. Acqua; 2. Coca-Cola; 3. Birra`));
    
    switch(drink){
        case 1:
            console.log(`E’ stata selezionata l’acqua`);
            break
        case 2:
            console.log(`E’ stata selezionata coca cola`);
            break
        case 3:
            console.log(`E’ stata selezionata birra`);
            break
        default:
            console.log(`La scelta inserita non è valida, riprova`);
    }
}while(drink < 1 || drink > 3);





