let quantidadeHerois = prompt("Quantos heróis você deseja classificar?");
quantidadeHerois = Number(quantidadeHerois);

for (let i = 0; i < quantidadeHerois; i++) {
  // Captura o nome e a quantidade de XP do herói
  let nome = prompt(`Digite o nome do herói ${i + 1}:`);
  let xp = prompt(`Digite a quantidade de experiência (XP) do herói ${i + 1}:`);

  // Converte o valor de XP para número
  xp = Number(xp);

  let nivel = "";

  // Estrutura de decisão para classificar o herói com base no XP
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10001) {
    nivel = "Radiante";
  }

  // Exibe a mensagem final
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
}

console.log("Classificação de heróis concluída.");
