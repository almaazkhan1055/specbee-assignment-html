const speakerCards = document.querySelectorAll(".speaker-card");
const speakerModal = document.querySelector(".speaker-detail-modal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalTitle = document.getElementById("modalTitle");
const modalCompany = document.getElementById("modalCompany");
const modalDescription = document.getElementById("modalDescription");
const closeModalButton = document.querySelector(".close-modal");

// Show modal with speaker details
function showSpeakerModal(speakerData) {
  modalImage.src = speakerData.image;
  modalName.textContent = speakerData.name;
  modalTitle.textContent = speakerData.title;
  modalCompany.textContent = speakerData.company;
  modalDescription.textContent = speakerData.description;
  speakerModal.classList.remove("hidden");
}

// Hide the modal
function hideSpeakerModal() {
  speakerModal.classList.add("hidden");
}

// Event listener for speaker card clicks
speakerCards.forEach((card) => {
  card.addEventListener("click", () => {
    const speakerData = {
      image: card.getAttribute("data-image"),
      name: card.getAttribute("data-name"),
      title: card.getAttribute("data-title"),
      company: card.getAttribute("data-company"),
      description: card.getAttribute("data-description"),
    };
    showSpeakerModal(speakerData);
  });
});

// Event listener for close button
closeModalButton.addEventListener("click", hideSpeakerModal);

// Event listener for clicking outside the modal
window.addEventListener("click", (event) => {
  if (event.target === speakerModal) {
    hideSpeakerModal();
  }
});
