const main = document.getElementById("main");
const fullcard = document.getElementById("fullcard");

console.log(main);
var i = 1;
const dataname = document.getElementById("data-name");
const active = false;
var data = new Object();

data = {
  0: { id: "2", name: "ivysaur", a1: "overgrow", a2: "chlorophyll" },
  1: { id: "1", name: "bulbasaur", a1: "overgrow", a2: "chlorophyll" },
  2: { id: "3", name: "venusaur", a1: "overgrow", a2: "chlorophyll" },
  3: { id: "10", name: "caterpie", a1: "shield-dust", a2: "run-away" },
  4: { id: "4", name: "charmander", a1: "blaze", a2: "solar-power" },
  5: { id: "11", name: "metapod", a1: "shed-skin", a2: "--" },
  6: { id: "13", name: "weedle", a1: "shield-dust", a2: "run-away" },
  7: { id: "14", name: "kakuna", a1: "shed-skin", a2: "--" },
  8: { id: "5", name: "charmeleon", a1: "blaze", a2: "solar-power" },
  9: { id: "6", name: "charizard", a1: "blaze", a2: "solar-power" },
  10: { id: "7", name: "squirtle", a1: "torrent", a2: "rain-dish" },
  11: { id: "8", name: "wartortle", a1: "torrent", a2: "rain-dish" },
  12: { id: "9", name: "blastoise", a1: "torrent", a2: "rain-dish" },
  13: { id: "12", name: "butterfree", a1: "compound-eyes", a2: "tinted-lens" },
  14: { id: "15", name: "beedrill", a1: "swarm", a2: "sniper" },
  15: { id: "21", name: "spearow", a1: "keen-eye", a2: "sniper" },
  16: { id: "22", name: "fearow", a1: "keen-eye", a2: "sniper" },
  17: { id: "25", name: "pikachu", a1: "static", a2: "lightning-rod" },
  18: { id: "26", name: "raichu", a1: "static", a2: "lightning-rod" },
  19: { id: "41", name: "zubat", a1: "inner-focus", a2: "infiltrator" },
  20: { id: "42", name: "golbat", a1: "inner-focus", a2: "infiltrator" },
  21: { id: "43", name: "oddish", a1: "chlorophyll", a2: "run-away" },
  22: { id: "44", name: "gloom", a1: "chlorophyll", a2: "stench" },
  23: { id: "45", name: "vileplume", a1: "chlorophyll", a2: "effect-spore" },
  24: { id: "38", name: "ninetales", a1: "flash-fire", a2: "drought" },
  25: { id: "69", name: "bellsprout", a1: "chlorophyll", a2: "gluttony" },
  26: { id: "70", name: "weepinbell", a1: "chlorophyll", a2: "gluttony" },
  27: { id: "71", name: "victreebel", a1: "chlorophyll", a2: "gluttony" },
  28: { id: "27", name: "sandshrew", a1: "sand-veil", a2: "sand-rush" },
  29: { id: "28", name: "sandslash", a1: "sand-veil", a2: "sand-rush" },
  30: { id: "37", name: "vulpix", a1: "flash-fire", a2: "drought" },
  31: { id: "92", name: "gastly", a1: "levitate", a2: "--" },
  32: { id: "93", name: "haunter", a1: "levitate", a2: "--" },
  33: { id: "94", name: "gengar", a1: "cursed-body", a2: "--" },
};

function load() {
  main.innerHTML = "";
  while (i < 34) {
    var cdata = data[i];
    // console.log(data[i]);
    createcard(cdata.name, cdata.a1, cdata.a2, cdata.id);
    i++;
  }
  i = 0;
}
load();

function createcard(pname, a1, a2, pid) {
  //   console.log(`'${pid}':{'name':${pname},'a1':${a1},'a2':${a2}}`);
  {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `${pid}`;

    const details = document.createElement("div");
    details.classList.add("details");

    const poname = document.createElement("div");
    poname.classList.add("name");
    poname.innerText = pname;

    const f = document.createElement("div");
    const f1 = document.createElement("div");
    f1.classList.add("feature");
    f1.innerText = a1;
    const f2 = document.createElement("div");
    f2.classList.add("feature");
    f2.innerText = a2;
    f.appendChild(f1);
    f.appendChild(f2);

    details.appendChild(poname);
    details.appendChild(f);
    card.appendChild(details);

    const images = document.createElement("div");
    images.classList.add("images");

    const pokemon = document.createElement("img");
    pokemon.src = `https://pokeres.bastionbot.org/images/pokemon/${pid}.png`;
    pokemon.classList.add("pokemon-img");
    const ball = document.createElement("img");
    ball.src = "pb.png";
    ball.classList.add("src");
    images.appendChild(pokemon);
    images.appendChild(ball);

    card.appendChild(images);
    main.appendChild(card);

    card.addEventListener("click", (e) => {
      // if (active == false)
      console.log(card.id);
      dataname.innerText = pname;
      showfull(a1, a2, pid);
    });
  }
}

const feat1 = document.querySelector(".feature1");
const feat2 = document.querySelector(".feature2");
const pok = document.querySelector(".pok");
function showfull(feature1, feature2, pokeid) {
  feat1.innerText = feature1;
  feat2.innerText = feature2;

  pok.src = `https://pokeres.bastionbot.org/images/pokemon/${pokeid}.png`;

  main.classList.add("notvisible");
  fullcard.classList.toggle("visible");
}

function scrollto(sp) {
  console.log(sp);
  window.scroll(0, sp);
}

const backbutton = document.getElementById("bb");
backbutton.addEventListener("click", function () {
  console.log("dd");
  main.classList.remove("notvisible");
  fullcard.classList.remove("visible");
});
