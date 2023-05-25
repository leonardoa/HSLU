let changeColor = document.getElementById("change-button");

// Creates the event when the button is clicked to call the color changing
changeColor.addEventListener("click", async () => {
  //take the image of the input
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeImages,
  });
});

// The actual function that will be executed to change the page color
function changeImages() {
  let images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.setAttribute(
      "src",
      "https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg"
    );
    img.setAttribute(
      "data-src",
      "https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg"
    );
    img.setAttribute(
      "srcset",
      "https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg"
    );
    img.setAttribute(
      "data-srcset",
      "https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg"
    );
  });

  let sources = document.querySelectorAll("source");
  sources.forEach((source) => {
    source.setAttribute(
      "src",
      "https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg"
    );
    source.setAttribute(
      "data-src",
      "https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg"
    );
    source.setAttribute(
      "srcset",
      "https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg"
    );
    source.setAttribute(
      "data-srcset",
      "https://img.freepik.com/free-vector/cute-pink-baby-unicorn-character_96037-449.jpg"
    );
  });
}
