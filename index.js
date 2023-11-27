const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');

// Make sure canvas takes up the whole screen, also set margin to 0 in .html
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to animate the landing page
function animate(callback) {
    let imagesLoaded = 0;

    function animateImage(src, delay) {
        setTimeout(function () {
            const image = new Image();
            image.src = src;

            // Wait for the image to load before drawing it on the canvas
            image.onload = function () {
                // Draw the image at the center of the canvas
                c.clearRect(0, 0, canvas.width, canvas.height);
                c.drawImage(
                    image,
                    (canvas.width - image.width) * 0.5,
                    (canvas.height - image.height) * 0.5
                );

                // Increment the counter for loaded images
                imagesLoaded++;

                // Check if all images have been loaded
                if (imagesLoaded === 7) {
                    callback();
                }
            };
        }, delay);
    }

    for (let i = 0; i < 7; i++) {
        var chatImgSrc = `./img/chat-${i}.png`;
        animateImage(chatImgSrc, i * 200);
    }
}

// Call the animate function with a callback for clearing the canvas
animate(function () {
    // Clear the canvas after all animations are complete
    c.clearRect(0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.src = "./img/chat-6.png";
    image.onload = function () {
        c.drawImage(
            image,
            500 ,
            (canvas.height - image.height) * 0.5
        );
    };
});
