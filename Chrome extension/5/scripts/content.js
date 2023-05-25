let start = document.getElementById("start");

start.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: playSound,
  });
});

function playSound() {
  //loop all the images
  let images = document.querySelectorAll("img");
  let sounds = [
    "https://assets.ctfassets.net/tlokrqldo7o4/49bwydUXYv7b6WFTLqkb9T/6ffd708cc906feddff4322dfa6ea2267/415209__inspectorj__cat-screaming-a.wav",
    "https://assets.ctfassets.net/tlokrqldo7o4/5G7sq8CjSjo8711I47Tgfu/dbddda793c9d9b899f2ed0d510372911/110011__tuberatanka__cat-meow.wav",
    "https://assets.ctfassets.net/tlokrqldo7o4/5vi6EMwQ2wbKWuetDBkBUw/98b489f2f493486e7a9cbbe3ae87e9e5/668632__alizardguy__cat-happy-meow.wav",
  ];
  images.forEach((img) => {
    var audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);

    //for each images we have mouseenter play sound
    img.addEventListener("mouseenter", () => {
      audio.currentTime = 0;
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(function () {}).catch(function (error) {});
      }
    });
    img.addEventListener("mouseleave", () => {
      audio.pause();
    });
  });
}
