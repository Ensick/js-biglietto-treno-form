
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

function compilazione(){

    let chilometri = document.getElementById("km").value;

    let eta = document.getElementById("eta").value;
    
    const tariffaChilometro = 0.21;
    
    let prezzoBiglietto = parseFloat(chilometri * tariffaChilometro).toFixed(2);
    
    let minorenne = ( prezzoBiglietto / 100 ) * 20;
    
    let maggiorenne = (prezzoBiglietto / 100) * 40;

    let offerta = document.getElementById("offerta");
    
    let nomeCognome = document.getElementById("nome").value;

    let carrozza = Math.floor(Math.random() * 10 + 1 );

    let codice = Math.floor(Math.random() * 1000 + 1 );


    document.getElementById("identita").innerHTML = (nomeCognome)
    
    if (eta < 18 ){
     
        prezzoBiglietto = parseFloat(chilometri * tariffaChilometro - minorenne).toFixed(2);

        offerta.innerHTML = `Biglietto scontato del 20%`;
    
    } else if( eta >= 65){
    
        prezzoBiglietto =  parseFloat(chilometri * tariffaChilometro - maggiorenne).toFixed(2);

        offerta.innerHTML = `Biglietto scontato del 40%`;

    } else {

        offerta.innerHTML = `Biglietto standard`;
    }

    document.getElementById("carrozza").innerHTML = (carrozza)

    document.getElementById("codice").innerHTML = (codice)
    
    document.getElementById("costo").innerHTML = (prezzoBiglietto);

}

