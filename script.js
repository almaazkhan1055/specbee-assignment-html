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

speakerCard.forEach((card) => {
  card.addEventListener("click", () => {
    const name = card.querySelector(".speaker-card-content").dataset.name;
    const title = card.querySelector(".speaker-card-content").dataset.title;
    const company = card.querySelector(".speaker-card-content").dataset.company;
    const image = card.querySelector(".speaker-card-content").dataset.image;
    const description = card.querySelector(".speaker-card-content").dataset
      .description;

    modalName.textContent = name;
    modalPosition.textContent = title;
    modalCompany.textContent = company;
    modalImage.src = image;
    modalDescription.textContent = description;

    speakerModal.classList.add("customGrid");
    speakerModal.classList.remove("hidden");
  });
});

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const speakersGrid = document.querySelector(".speakers-grid");

leftBtn.addEventListener("click", () => {
  speakersGrid.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  speakersGrid.scrollBy({ left: 300, behavior: "smooth" });
});
