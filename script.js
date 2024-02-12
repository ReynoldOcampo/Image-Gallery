const imageLinks = [
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let currentImageIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imageGallery = document.getElementById("imageGallery");

function updateImage() {
    imageGallery.src = imageLinks[currentImageIndex];
}

prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + imageLinks.length) % imageLinks.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % imageLinks.length;
    updateImage();
});

// Initial load
updateImage();
