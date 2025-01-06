document.addEventListener("DOMContentLoaded", () => {
    const previewButton = document.getElementById("previewButton");
    const iframe = document.getElementById("resumePreview");

    // Initially hide the iframe and set the preview button text
    iframe.style.display = "none";

    previewButton.addEventListener("click", () => {
        if (iframe.style.display === "none") {
            iframe.style.display = "block";
            // Set the iframe's src only once when it is first shown
            if (!iframe.src) {
                iframe.src = "/resume-shipanjodder.pdf"; // Path to your PDF
            }
            previewButton.textContent = "Hide";
            previewButton.style.backgroundColor = "#f44336"; // Change to red
        } else {
            iframe.style.display = "none";
            previewButton.textContent = "Preview";
            previewButton.style.backgroundColor = "#4caf50"; // Change back to green
        }
    });
});
