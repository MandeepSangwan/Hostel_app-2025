let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector(".slider");
    const cards = document.querySelectorAll(".card");
    const totalCards = cards.length;
    const visibleCards = 3;
    const cardWidth = 370;
    const maxIndex = totalCards - visibleCards;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const offset = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

// Show pop-up form
document.getElementById("addDataBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block";
});

document.getElementById("removeDataBtn").addEventListener("click", function() {
    document.getElementById("removePopupForm").style.display = "block";
});

// Close pop-up
function closeForm(id) {
    document.getElementById(id).style.display = "none";
}

// Add new card function
function addNewCard() {
    console.log("Submit button clicked"); // Debugging log

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let semester = document.getElementById("semester").value.trim();
    let branch = document.getElementById("branch").value.trim();
    let hobbies = document.getElementById("hobbies").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let imageURL = document.getElementById("imageURL").value.trim() || "https://via.placeholder.com/150";

    if (!name || !age || !semester || !branch || !hobbies || !contact) {
        alert("Please fill all required fields!");
        return;
    }

    console.log("Adding new card for:", name); // Debugging log

    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("data-name", name.toLowerCase());

    newCard.innerHTML = `
        <img src="${imageURL}" alt="User">
        <h3>${name}</h3>
        <p>Age: ${age}</p>
        <p>Semester: ${semester}</p>
        <p>Branch: ${branch}</p>
        <p>Hobbies: ${hobbies}</p>
        <p>Contact: ${contact}</p>
    `;

    document.getElementById("cardSlider").appendChild(newCard);
    closeForm('popupForm');

    // Clear input fields after submission
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("semester").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("hobbies").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("imageURL").value = "";
}

// Remove card function
function removeCard() {
    let name = document.getElementById("removeName").value.trim().toLowerCase();
    let cards = document.querySelectorAll(".card");

    for (let card of cards) {
        if (card.dataset.name === name) {
            card.remove();
            closeForm('removePopupForm');
            return;
        }
    }

    alert("No matching name found!");
}
