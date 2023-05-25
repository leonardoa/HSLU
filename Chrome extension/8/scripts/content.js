let start = document.getElementById("start");

start.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: playSound,
  });
});

function playSound() {




  let popup = document.createElement("div");
  popup.id = "popup";
  popup.style.position = "fixed";
  popup.style.zIndex = 1000;
  popup.style.top = `20px`;
  popup.style.left = `20px`;
  popup.style.width = `200px`;
  popup.style.height = `500px`;
  popup.style.backgroundColor = `white`;
  popup.style.boxShadow = "10px 20px 30px blue";
  popup.style.padding = "10px";
  popup.style.overflow = "scroll";
  popup.innerHTML = ``;

  document.querySelector("body").appendChild(popup);

  let images = document.querySelectorAll("img");
  let text = ``;
  images.forEach((img) => {
    let src = img.alt;
    text += `<div class="item" style='margin-bottom: 30px;'>
    <img src="${img.src}" alt="${img.alt}" style="width: 50px; height: 50px;"/><br/>
    ${img.alt}
    </div>`;

    //for each images we have mouseenter play sound
    // img.addEventListener("mouseenter", (e) => {
    //   let item = e.target;
    //   console.log(item);
    // });
  });


  popup.innerHTML = text;
}
