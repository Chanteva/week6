const waitForBoom = document.querySelector("#wait");

const words = [
   {title: "Wait for it..."},
];


function getWords() {
  setTimeout(() => {
    let output = "";
    for (const word of words) {
       output += `<p>${word.title}</p>`;  
    }
    waitForBoom.innerHTML = output;
  }, 1000); 
}

function hereItComes (msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var error = false;
      words.push({ title: "Boom Shakalaka!"});
      
      if (error) {
        reject("Fail");
      } else {
        resolve();
      }
    }, 3000);
  });
}
getWords();

hereItComes("Boom Shakalaka!")
  .then(() => {
     getWords();
})
  .catch((err) => {
    waitForBoom.innerHTML = err;
});