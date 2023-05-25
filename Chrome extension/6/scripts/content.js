let addButton = document.getElementById("add-button");

addButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: addImages,
  });
});

function addImages() {
  let winWidth = window.innerWidth;
  let winHeight = document.body.offsetHeight;
  let images = [
    `https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg`,
    `https://puzzlemania-154aa.kxcdn.com/products/2020/puzzle-cobblehill-500-pieces-unicorn-in-the-woods-500-xxl.jpg`,
    `https://www.centreofexcellence.com/media/cache/product_og_image/67/9f/0e12028cda1592e2bd9edccc337c.jpeg`,
    `https://cdn11.bigcommerce.com/s-p6eiht9ezd/images/stencil/1280x1280/products/12768/9679/FO_UNICORN_DREAMS_AS__59557.1615172137.jpg?c=1`,
    `https://investinestonia.com/wp-content/uploads/estonian-unicorn-in-space.jpg`,
    `https://cdn.shopify.com/s/files/1/0513/3756/0260/products/the-magic-toy-shop-play-figures-unicorn-stable-with-three-unicorns-and-accessories-38747056046302.jpg?v=1672313952&width=1645`,
    `https://static.posters.cz/image/750/poster/anne-stokes-forest-unicorn-i103392.jpg`
  ]
  let i = 0;
  for (i = 0; i < 20; i++) {
    //get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    //create image
    var img = document.createElement("img");
    //update top and left position
    img.style.position = "absolute";
    img.style.zIndex = 10 + i;
    img.style.top = `${randomTop}px`;
    img.style.left = `${randomLeft}px`;
    img.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    img.style.width = `300px`;
    img.style.height = `auto`;
    img.src = images[Math.floor(Math.random() * images.length)];
    document.querySelector('body').appendChild(img);
  }

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

}
