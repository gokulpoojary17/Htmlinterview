function toggleCard(card) {
    let dropdowns = card.querySelector(".dropdowns");
    let radio = card.querySelector(".radio");
    let price = card.querySelector(".price").innerText.replace("$", "");

    let isExpanded = dropdowns.style.display === "flex";

  

    document.querySelectorAll(".card").forEach(c => {
        c.querySelector(".dropdowns").style.display = "none";
        c.querySelector(".radio").checked = false;
        c.classList.remove("active");
    });

    if (!isExpanded) {
        dropdowns.style.display = "flex";
        radio.checked = true;
        card.classList.add("active");

        // Update total price
        document.getElementById("totalPrice").innerText = `$${price} USD`;
    } else {
        document.getElementById("totalPrice").innerText = `$0.00`;
    }

       // Hide "Most Popular" from all cards first
document.querySelectorAll('.most-popular-label').forEach(label => {
label.style.display = 'none';
});

// Show "Most Popular" only for the clicked card
card.querySelector('.most-popular-label').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdowns").forEach(dropdown => {
        dropdown.style.display = "none";
    });
    document.querySelectorAll("select").forEach(select => {
        select.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });
});



function addToCart() {
    let selectedCard = document.querySelector(".card.active");
    if (selectedCard) {
        alert("Item added to cart!");
    } else {
        alert("Please select a unit first.");
    }
}