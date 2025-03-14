/**
 * Vogliamo creare un contatore che al click su un bottone 
 * ci permette aggiungere 1 al nostro counter partendo da 0.
 * 
 * 1.[X] Selezionare gli elementi HTML con i quali interagire
 * 2.[X] Creare lo state dove salvare i dati (il contatore)
 * 3.[X] Creare una logica che permette di incrementare il valore
 *       del counter di 1 (funzione)
 * 4.[X] Creare una logica che in risposta al click (evento) dell'untente
 *       sul bottone esegue la logica del punto 3 per incrementare il counter
 * 5.[X] Creare una logica che ci permette di vedere il valore del contatore
 *       nella pagina (dentro lo span)
 * 6.[X] Creare una logica che inizializzi il mio algoritmo
 */

// Selezioni nella pagina l'elemento bottone
const $calculateBtn = document.querySelector("#calculate");
// Selezioni nella pagina l'elemento span
const $counterSpan = document.querySelector("#counter");
// Selezioni nella pagina l'elemento select
const $operationSelect = document.querySelector("#operation");
// Selezioni nella pagina l'elemento input
const $numberInput = document.querySelector("#number");

// counter -> 0 -> calc + 1 -> 1 -> calc + 1 -> 2 .....
const state = {
    counter: 0, // Valore numerico di partenza su cui fare le operazioni
    operation: "INC", // Operazione di base è INC cioè incrementare di "number"
    number: 1, // Numero che ci serve per effettuare l'olperazione matematica
}

// Esegue il calcolo sulla base del valore di operation
// Anbdrà a sommare o sottrarre il valore number a nostro contatore
const performCalculation = () => {
    if (state.operation == "INC") { // Voglio incrementare
        // Se l'operazione è INC voggio incrementare il contatore con il numero
        state.counter = state.counter + state.number;
    } else if (state.operation == "DEC") {
        // Se l'operazione è DEC voggio sottrarre al contatore il numero
        state.counter = state.counter - state.number;
    }
}

// Aggiorna il valore dell'operazione matematica
// Può esse INC -> incrementa o DEC -> decrementa
const updateOperation = (value) => {
    state.operation = value;
}

// Aggiorna il valore di number cioè il numero 
// che viene sommato o sottratto (in base all'operazione)
// al nostro contatore
const updateNumber = (value) => {
    state.number = Number(value);
}

// Logica che ci permette di vedere nella pagina i valori nello state
// In particolare ci visualizza il valore del contatore dentro lo span
const render = () => {
    $counterSpan.innerHTML = state.counter;
}

// Logica che ci permette di gestire tutti gli ascoltatori di eventi
// Diciamo a javascript di rimanere in attesa per una specifica interazione
// dell'utente con un determinato elemento nella pagina. In questo caso:
const manageListeners = () => {
    // 1. Click sul bottone che esegue l'operazione
    $calculateBtn.addEventListener("click", () => {
        // Al click deve eseguire il calcolo
        performCalculation();
        // Dopo aver eseguito il calcolo aggiorniamo
        // il valore in pagina -> lo mettiamo in visualizzazione nello span
        render();
    });
    
    // 2. Change della select per cambiare operazione (INC <-> DEC)
    $operationSelect.addEventListener("change", (event) => {
        updateOperation(event.target.value);
    });
    
    // 3. Input, cioè scrittura del numero nel campo di testo che aggiorna il valore
    //    di number dentro lo state
    $numberInput.addEventListener("input", (event) => {
        updateNumber(event.target.value);
    });
}

// Logica che ci permette di inizializzare il nostro algoritmo
// Ci fa eseguire le operazioni nell'ordine corretto
const init = () => {
    // Renderizzo per la primissima volta
    // in accordo con i valori di default
    render();
    // Avvio tutti gli ascoltatori di eventi
    manageListeners();
}

// Avviamo l'algoritmo
init();