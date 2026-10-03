function submitReview(){

    const name =
    document.getElementById("reviewName").value;

    const rating =
    document.getElementById("reviewRating").value;

    const review =
    document.getElementById("reviewText").value;

    if(name === "" || review === ""){

        alert("Please fill all fields.");

        return;
    }

    const reviewContainer =
    document.querySelector(".review-container");

    const reviewCard =
    document.createElement("div");

    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `

        ${rating}

        <p>${review}</p>

        <h4>${name}</h4>

    `;

    reviewContainer.prepend(reviewCard);

    document.getElementById("reviewName").value = "";

    document.getElementById("reviewText").value = "";

    alert("Thank you for your review!");
}