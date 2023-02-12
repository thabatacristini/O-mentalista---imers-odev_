var numeroSecreto = parseInt(Math.random()* (1000-1) +1 ); //parseInt(Math.random()) sorteia um número inteiro aleatório entre 0 e 0.9. Multiplica-se por algum outro número dependendo do intervalo do qual se quer obter o número. 
var numeroDeChutes = 11;
var numeroDeTentativas = 0;

while (chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 1 e 1000. Você tem ' + (numeroDeChutes-1) + ' tentativas!')
    numeroDeChutes = (numeroDeChutes - 1);
    if (chute == numeroSecreto) {
        alert('Parabéns! Você acertou!')
    } else if (chute > numeroSecreto) {
        alert('Não foi dessa vez! Você errou! O número secreto é menor do que ' + chute + '. Tente novamente!')
    } else if (chute < numeroSecreto) {
        alert('Não foi dessa vez! Você errou! O número secreto é maior do que ' + chute + '. Tente novamente!')
    }
    numeroDeTentativas = (numeroDeTentativas + 1)
    if (numeroDeTentativas == 10) {
        alert ('Suas tentativas acabaram! O número secreto era ' + numeroSecreto + '. Reinicie o jogo!')
    break}
}