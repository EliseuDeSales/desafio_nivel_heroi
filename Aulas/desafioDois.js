function saldoDeVitoria(saldo) { 
    let vitoria = ""
    let derrota = ""
    let nivel = ""
        if (saldo >= 0 && saldo <= 10) {nivel = "ferro"} 
        else if (saldo >= 11 && saldo <= 20) {nivel = "bronze"}
        else if (saldo >= 21 && saldo <= 50) {nivel = "prata"}
        else if (saldo >= 51 && saldo <= 80) {nivel = "ouro"}
        else if (saldo >= 81 && saldo <= 90) {nivel = "diamante"}
        else if (saldo >= 91 && saldo <= 100) {nivel = "Lendario"}
        else if (saldo >= 101) {nivel = "Imortal"}
   
          console.log("O Herói tem de saldo de " + (saldo) + " está no nível de " + nivel);
          }
    derrota = 7; 
    vitoria = 120;
    saldoDeVitoria (vitoria - derrota)


    