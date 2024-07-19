const excuses = [
  "My dog ate my homework.",
  "I had a flat tire.",
  "I was stuck in traffic.",
  "I overslept.",
  "I had a family emergency.",
  "My alarm didn't go off.",
  "I was feeling under the weather.",
  "I had a doctor's appointment.",
  "I got lost on the way.",
  "I had to help a friend in need."
];

function generateExcuse() {
  const randomIndex = Math.floor(Math.random() * excuses.length);
  return excuses[randomIndex];
}

document.getElementById("excuse").innerText = generateExcuse();
