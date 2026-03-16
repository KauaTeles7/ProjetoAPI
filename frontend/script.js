const TimesImage = document.getElementById("TimesImage");
const breedName = document.getElementById("breedName");

const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");

const breedInput = document.getElementById("breedInput");


const API = "http://10.106.208.12:3001/api/times";


async function buscarTimes(url){

try{

const response = await fetch(url);
const data = await response.json();

console.log(data);

if(data.status === "error"){

breedName.textContent = data.message;
TimesImage.src = "";
return;

}

TimesImage.src = data.imagem;

breedName.textContent =
data.nome.charAt(0).toUpperCase() + data.nome.slice(1);

}

catch(erro){

console.error(erro);

breedName.textContent =
"Erro ao conectar com a API";

TimesImage.src = "";

}

}


function TimeAleatorio(){

buscarTimes(`${API}/aleatorio`);

}


function buscarPorTime(){

const time = breedInput.value.trim().toLowerCase();

if(!time){

alert("Digite um time!");
return;

}

buscarTimes(`${API}/${time}`);

}


randomBtn.addEventListener("click", TimeAleatorio);

searchBtn.addEventListener("click", buscarPorTime);


breedInput.addEventListener("keypress", function(event){

if(event.key === "Enter"){

buscarPorTime();

}

});


TimeAleatorio();