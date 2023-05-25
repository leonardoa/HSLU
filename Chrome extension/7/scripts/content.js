let addButton = document.getElementById("add-button");

addButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: addPopUp,
  });
});

function addPopUp() {
  let winWidth = window.innerWidth;
  let winHeight = document.body.offsetHeight;

  let halfWidth = winWidth / 2;
  let halfHeight = winHeight / 2;

  let popup = document.createElement("div");
  popup.style.position = "absolute";
  popup.style.zIndex = 1000;
  popup.style.top = `${halfHeight}px`;
  popup.style.left = `${halfWidth}px`;
  popup.style.transform = `translateX(-50%) translateY(-50%)`;
  popup.style.width = `700px`;
  popup.style.height = `200px`;
  popup.style.backgroundColor = `white`;
  popup.style.boxShadow = "10px 20px 30px blue";
  popup.style.borderRadius = "10px";
  popup.style.padding = "20px";
  popup.innerHTML = `
  <p>blabla</p>
  <button id="goto"><a href="https://google.com">Goto</a></button>
  `;

  document.querySelector("body").appendChild(popup);

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
