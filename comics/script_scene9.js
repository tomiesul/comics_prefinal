let Layer1Path = document.getElementById("Layer_1_Path");
let Layer2Path = document.getElementById("Layer_2_Path");

document.addEventListener("click", function(event) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const yCoordinate = event.clientY;

    // Calculate the threshold percentage based on the viewport width
    const thresholdPercentage = (viewportWidth / 40); // Adjust as needed

    // Calculate the threshold based on the percentage of viewport height
    const threshold = (viewportHeight * thresholdPercentage) / 100;

    if (yCoordinate < threshold) {
        // Clicked in the right part, treat it as Layer_1
        window.location.href = "scene13.html";
    } else {
        // Clicked in the left part, treat it as Layer_2
        window.location.href = "scene10.html";
    }
});