// Entry Animation for Futuristic Cards
document.addEventListener("DOMContentLoaded", function () {
  const stickyNotes = document.querySelectorAll(".sticky-note");
  stickyNotes.forEach((note, index) => {
    setTimeout(() => {
      note.style.transform = "perspective(800px) rotateX(0deg)";
      note.style.opacity = 1;
    }, index * 200); // Delays each note for a staggered entry animation
  });
});

// Search Functionality
const searchBox = document.getElementById("search-box");
const stickyNotes = document.querySelectorAll(".sticky-note");
const noResultsMessage = document.getElementById("no-results");

searchBox.addEventListener("input", function () {
  const query = searchBox.value.toLowerCase().trim();
  let hasResults = false;

  stickyNotes.forEach(note => {
    const name = note.getAttribute("data-name").toLowerCase();
    if (name.includes(query)) {
      note.style.display = "block";
      hasResults = true;
    } else {
      note.style.display = "none";
    }
  });

  noResultsMessage.style.display = hasResults ? "none" : "block";
});