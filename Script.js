/* =========================
ANIMEX PREMIUM JAVASCRIPT
========================= */

/* =========================
MARVEL STORY MODAL
========================= */

function showStory(hero){

  let title = "";
  let text = "";
  let image = "";

  /* =========================
  IRON MAN
  ========================= */

  if(hero === "ironman"){

    title = "Iron Man - Rise Of The Genius";

    image =
    "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1974&auto=format&fit=crop";

    text =
    "Tony Stark was once a billionaire obsessed with technology and power. " +
    "After surviving a deadly attack, he forged the legendary Iron Man armor. " +
    "Using intelligence, sacrifice, and courage, he protected humanity from destruction. " +
    "Every battle transformed him from a selfish inventor into Earth’s greatest hero.";

  }

  /* =========================
  SPIDER MAN
  ========================= */

  else if(hero === "spiderman"){

    title = "Spider Man - The Friendly Hero";

    image =
    "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1974&auto=format&fit=crop";

    text =
    "Peter Parker was an ordinary student until a radioactive spider changed his destiny forever. " +
    "Gifted with incredible powers, he learned that with great power comes great responsibility. " +
    "Through sacrifice, pain, and courage, Spider Man became New York’s silent protector.";

  }

  /* =========================
  THOR
  ========================= */

  else if(hero === "thor"){

    title = "Thor - God Of Thunder";

    image =
    "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=1974&auto=format&fit=crop";

    text =
    "Born in Asgard, Thor was once driven by pride and strength. " +
    "But exile to Earth taught him humility and leadership. " +
    "Wielding the mighty Mjolnir, Thor fought gods, monsters, and cosmic destruction " +
    "to protect both Asgard and humanity.";

  }

  /* =========================
  CAPTAIN AMERICA
  ========================= */

  else if(hero === "captain"){

    title = "Captain America - The First Avenger";

    image =
    "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?q=80&w=1974&auto=format&fit=crop";

    text =
    "Steve Rogers began as a weak young man with a brave heart. " +
    "After becoming Captain America, he stood against evil during humanity’s darkest wars. " +
    "His shield became a symbol of hope, courage, and leadership for the entire world.";

  }

  /* =========================
  HULK
  ========================= */

  else if(hero === "hulk"){

    title = "Hulk - Rage Of The Monster";

    image =
    "https://images.unsplash.com/photo-1542204625-de293a2f8ff0?q=80&w=1974&auto=format&fit=crop";

    text =
    "Bruce Banner’s experiment changed his life forever. " +
    "Whenever anger consumed him, the unstoppable Hulk emerged. " +
    "Behind the monster’s rage was a lonely genius fighting to control his own power.";

  }

  /* =========================
  UPDATE MODAL CONTENT
  ========================= */

  document.getElementById("storyTitle").innerText = title;

  document.getElementById("storyText").innerText = text;

  document.getElementById("storyImage").src = image;

  /* =========================
  OPEN BOOTSTRAP MODAL
  ========================= */

  let modal = new bootstrap.Modal(
    document.getElementById("storyModal")
  );

  modal.show();

}

/* =========================
SMOOTH NAVBAR EFFECT
========================= */

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "rgba(0,0,0,0.96)";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

  }

  else{

    navbar.style.background = "rgba(10,10,10,0.92)";
    navbar.style.boxShadow = "none";

  }

});

/* =========================
BUTTON CLICK EFFECT
========================= */

const buttons = document.querySelectorAll(
  ".btn-custom, .cart-btn, .story-btn"
);

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

  });

});

/* =========================
FAKE LOADING ANIMATION
========================= */

// window.addEventListener("load", () => {

//   document.body.style.opacity = "0";

//   setTimeout(() => {

//     document.body.style.transition = "1s";
//     document.body.style.opacity = "1";

//   }, 10);

// });

// /* =========================
// COUNTER ANIMATION
// ========================= */

// const counters = document.querySelectorAll("counter");

// counters.forEach(counter => {

//   const updateCounter = () => {

//     const target = counter.innerText.replace("+", "");

//     let count = +counter.getAttribute("data-count") || 0;

//     const increment = target / 100;

//     if(count < target){

//       count += increment;

//       counter.innerText =
//       Math.ceil(count) + "+";

//       counter.setAttribute(
//         "data-count",
//         count
//       );

//       setTimeout(updateCounter, 20);

//     }

//     else{

//       counter.innerText = target + "+";

//     }

//   };

//   updateCounter();

// });

/* =========================
PARALLAX EFFECT
========================= */

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero");

  let offset = window.pageYOffset;

  hero.style.backgroundPositionY =
  offset * 0.5 + "px";

});