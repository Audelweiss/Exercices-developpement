var salaire = parseFloat(prompt("Quel est le montant de votre salaire brut mensuel ?"));
var bPrime = confirm("Bénéficiez-vous d'une prime ce mois ci ?");

var usualCharge = salaire * 23/100;

if (bPrime) {
    var prime = parseFloat(prompt("Quel est le montant de votre prime ?"));
    document.write("<p>Pour un salaire brut avec prime de " +  (salaire + prime) + "€, vous bénéficiez d'un net de " + ((salaire + prime) * (100-23)/100) + "€.</p>"); //on peut mettre les calculs directement dans la concaténation
    document.write("<p>Le montant des charges s'élève donc à " +  ((salaire + prime) * 23/100) + "€ au lieu des " + usualCharge + "€ habituels.</p>")
} else {
    document.write("<p>Pour un salaire brut de " +  salaire + "€, vous bénéficiez d'un net de " + (salaire * (100-23)/100) + "€.</p>")
    document.write("<p>Le montant des charges s'élève donc à " +  usualCharge + "€.</p>")
}