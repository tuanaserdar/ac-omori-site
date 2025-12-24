const characters = [
  {
    name: "Sunny",
    img: "assets/sunny.png",
    animal: "Animal: Cat",
    mood: "Personality: Normal",
    role: "Hobby: Nature",
    catchphrase: "…",
    quote: "Some days feel quieter than others. Want to sit for a bit?",
    desc: "Sunny is a very quiet villager who enjoys peaceful activities like reading, staring at the ocean, and sitting under trees for a long time. He doesn’t talk much, but when he does, his words feel thoughtful and gentle. Other villagers say there’s something sad in his eyes, but they also feel safe whenever he’s around."
  },
  {
    name: "Aubrey",
    img: "assets/aubrey.png",
    animal: "Animal: Rabbit",
    mood: "Personality: Sisterly",
    role: "Hobby: Fitness",
    catchphrase: "toughie",
    quote: "I’m not here to be nice… but I’ve got your back.",
    desc: "Aubrey is a sisterly villager with a strong personality and a sharp way of speaking. She pretends she doesn’t care, but she actually worries a lot about the people she loves. Once you become close friends, her dialogue becomes softer, and she admits she’s just afraid of being left behind."
  },
  {
    name: "Kel",
    img: "assets/kel.png",
    animal: "Animal: Dog",
    mood: "Personality: Jock",
    role: "Hobby: Play",
    catchphrase: "old sport",
    quote: "You’re doing great! Come on, let’s run it off and grab snacks after!",
    desc: "Kel is a jock villager who’s always talking about running, training, and beating his personal best. He smiles a lot and laughs even when things are hard. When other villagers feel down, Kel is the first one to show up and remind them they’re not alone."
  },
  {
    name: "Hero",
    img: "assets/hero.png",
    animal: "Animal: Deer",
    mood: "Personality: Smug",
    role: "Hobby: Cooking",
    catchphrase: "buddy",
    quote: "Take your time. I’ll be right here if you need anything...really.",
    desc: "Hero is a charming smug villager who’s always checking if everyone’s doing okay. He offers advice, compliments, and warm meals. Sometimes his dialogue hints that he feels responsible for everyone’s happiness, even when he’s hurting too."
  },
  {
    name: "Basil",
    img: "assets/basil.png",
    animal: "Animal: Bird",
    mood: "Personality: Lazy",
    role: "Hobby: Nature",
    catchphrase: "petal",
    quote: "If we take pictures of the good moments, maybe they’ll stay with us longer.",
    desc: "Basil is a lazy villager who loves taking photos, watering flowers, and talking about small, beautiful things. He worries easily and avoids conflict whenever possible. Players notice that his gentle words often hide something he’s afraid to say out loud."
  },
  {
    name: "Mari",
    img: "assets/mari.png",
    animal: "Animal: Goat",
    mood: "Personality: Normal",
    role: "Hobby: Music",
    catchphrase: "sunshine",
    quote: "If things ever feel heavy, you can always come talk to me.",
    desc: "Mari is a normal villager who brings calm energy wherever she goes. She gives encouragement, laughs easily, and always knows the right thing to say. Even when she’s not around, villagers talk about her as if she never really left."
  }
];

let i = 0;

const imgEl = document.getElementById("charImage");
const nameEl = document.getElementById("charName");
const animalEl = document.getElementById("charAnimal");
const moodEl = document.getElementById("charMood");
const roleEl = document.getElementById("charRole");
const descEl = document.getElementById("charDesc");
const catchEl = document.getElementById("charCatch");
const quoteEl = document.getElementById("charQuote");

function render() {
  const c = characters[i];
  imgEl.src = c.img;
  imgEl.alt = c.name;
  nameEl.textContent = c.name;
  animalEl.textContent = c.animal;
  moodEl.textContent = c.mood;
  roleEl.textContent = c.role;
  catchEl.textContent = `“${c.catchphrase}”`;
  quoteEl.textContent = c.quote;
  descEl.textContent = c.desc;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  i = (i - 1 + characters.length) % characters.length;
  render();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  i = (i + 1) % characters.length;
  render();
});

render();

// --- Music toggle ---
const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("musicToggle");

let playing = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (!playing) {
      bgm.muted = false;
      bgm.volume = 0.6;
      await bgm.play();
      playing = true;
      musicBtn.textContent = "🔊 Music";
    } else {
      bgm.pause();
      playing = false;
      musicBtn.textContent = "🔈 Music";
    }
  } catch (err) {
    console.log("Music failed:", err);
    alert("Music didn’t start — click again or try a different browser.");
  }
});
