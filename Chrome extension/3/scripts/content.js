let changeColor = document.getElementById("change-button");

// Creates the event when the button is clicked to call the color changing
changeColor.addEventListener("click", async () => {
  //take the image of the input
  let inputImage = document.querySelector("#image").value;
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    args: [inputImage],
    target: { tabId: tab.id },
    function: changeBackgroundColor,
  });
});

// The actual function that will be executed to change the page color
function changeBackgroundColor(value) {
  console.log(value);
  let image;
  if (value) {
    image = value;
  } else {
    image =
      "https://img1.picmix.com/output/stamp/normal/8/9/2/8/1638298_14df2.gif";
  }

  if (document.body.style.backgroundImage == `url("${image}")`) {
    document.body.style.backgroundImage = `none`;
  } else {
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundImage = `url(${image})`;
  }
}
