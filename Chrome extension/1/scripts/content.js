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
