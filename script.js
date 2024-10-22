const closeBtn = document.querySelector(".speaker-modal-close");
const speakerModal = document.querySelector(".speaker-modal");
const speakerCard = document.querySelectorAll(".speaker-card");
const modalName = speakerModal.querySelector(".speaker-modal-name");
const modalPosition = speakerModal.querySelector(".speaker-modal-position");
const modalCompany = speakerModal.querySelector(".speaker-modal-company");
const modalImage = speakerModal.querySelector(".speaker-modal-image");
const modalDescription = speakerModal.querySelector(".speaker-modal-bio p");

closeBtn.addEventListener("click", () => {
  speakerModal.classList.add("hidden");
});

const data = [
  {
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Acme Corp",
    img: "./assets/img1.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence, Assertively unleash cross-platform best practices rather than pandemic total linkage, Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Smith",
    title: "Chief Engagement Officer",
    company: "Acquia",
    img: "./assets/img2.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence,Synergistically monetize parallel infomediaries whereas 2.0 mindshare",
  },
  {
    name: "John Snow",
    title: "Chief Technical Developer",
    company: "Pantheon",
    img: "./assets/img3.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage.",
  },
  {
    name: "John Elia",
    title: "Chief Marketing Developer",
    company: "Specbee",
    img: "./assets/img4.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence.",
  },
  {
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Acme Corp",
    img: "./assets/img1.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence, Assertively unleash cross-platform best practices rather than pandemic total linkage, Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Smith",
    title: "Chief Engagement Officer",
    company: "Acquia",
    img: "./assets/img2.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence,Synergistically monetize parallel infomediaries whereas 2.0 mindshare",
  },
  {
    name: "John Snow",
    title: "Chief Technical Developer",
    company: "Pantheon",
    img: "./assets/img3.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage.",
  },
  {
    name: "John Elia",
    title: "Chief Marketing Developer",
    company: "Specbee",
    img: "./assets/img4.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence.",
  },
  {
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Acme Corp",
    img: "./assets/img1.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence, Assertively unleash cross-platform best practices rather than pandemic total linkage, Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Smith",
    title: "Chief Engagement Officer",
    company: "Acquia",
    img: "./assets/img2.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence,Synergistically monetize parallel infomediaries whereas 2.0 mindshare",
  },
  {
    name: "John Snow",
    title: "Chief Technical Developer",
    company: "Pantheon",
    img: "./assets/img3.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage.",
  },
  {
    name: "John Elia",
    title: "Chief Marketing Developer",
    company: "Specbee",
    img: "./assets/img4.png",
    description:
      "Monotonectally synergize business communities rather than client-centric convergence.",
  },
];

const speakersGrid = document.querySelector(".speakers-grid");

data.forEach((obj) => {
  const card = document.createElement("article");
  card.classList.add("speaker-card");

  card.innerHTML = `
    <div class="speaker-card-content"
      data-name="${obj.name}"
      data-title="${obj.title}"
      data-company="${obj.company}"
      data-description="${obj.description}"
      data-image="${obj.img}">
      <img src="${obj.img}" alt="${obj.name}" class="speaker-card-image">
      <h2 class="speaker-card-name font-bold text-2xl mb-2">${obj.name}</h2>
      <p class="speaker-card-position text-lg font-semibold">${obj.title}</p>
      <p class="speaker-card-company text-sm text-gray-400">${obj.company}</p>
    </div>
  `;

  speakersGrid.appendChild(card);

  card.addEventListener("click", () => {
    modalName.textContent = obj.name;
    modalPosition.textContent = obj.title;
    modalCompany.textContent = obj.company;
    modalImage.src = obj.img;
    modalDescription.textContent = obj.description;

    speakerModal.classList.add("customGrid");
    speakerModal.classList.remove("hidden");
  });
});

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

leftBtn.addEventListener("click", () => {
  speakersGrid.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  speakersGrid.scrollBy({ left: 300, behavior: "smooth" });
});
