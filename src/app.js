let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "raccoon"];
let extension = [".com", ".pt", ".be", ".cat"];
let Output = [];

function Name(value1, value2, value3, value4) {
  for (let i = 0; i < value1.length; i++) {
    for (let j = 0; j < value2.length; j++) {
      for (let k = 0; k < value3.length; k++) {
        for (let l = 0; l < value4.length; l++) {
          let domainName = value1[i] + value2[j] + value3[k] + value4[l];
          Output.push(domainName);
          let myTarget = document.getElementById("hello");
          let myElement = document.createElement("p");
          myElement.innerText = domainName;
          myTarget.appendChild(myElement);
        }
      }
    }
  }
}

Name(pronoun, noun, adj, extension);
console.log(Output);
