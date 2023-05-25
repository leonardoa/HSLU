let changeColor = document.getElementById("change-button");

// Creates the event when the button is clicked to call the color changing
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeBackgroundColor,
  });
});

// The actual function that will be executed to change the page color
function changeBackgroundColor() {
  if (document.body.style.backgroundColor == "red") {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "red";
  }
}

//rotate
let roate = document.getElementById("rotate-button");

// Creates the event when the button is clicked to call the color changing
roate.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: rotateWindow,
  });
});

// The actual function that will be executed to change the page color
function rotateWindow() {
  if (document.body.style.transform == "rotate(180deg)") {
    document.body.style.transform = "rotate(0deg)";
  } else {
    document.body.style.transform = "rotate(180deg)";
  }
}
