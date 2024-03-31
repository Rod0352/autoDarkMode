const buttonId = document.getElementById("dark-mode-toggle");
const body = document.getElementById("*");
const originalBackgroundColor = "";
const currentTextColor = "";

const toggleDarkMode = async () => {
  console.log("test");
  buttonId.style.backgroundColor = "black";
  let [tab] = await chrome.tabs.query({ active: true });

  chrome?.scripting?.executeScript({
    target: { tabId: tab.id },
    function: () => {
      //   document.body.style.backgroundColor = "black";
      originalBackgroundColor = document.body.style.backgroundColor;

      document.body.style.backgroundColor = "black";

      //  wait for 1 second to change then change back to original color
      setTimeout(() => {
        document.body.style.backgroundColor = originalBackgroundColor;
      }, 5000);
    },
  });
  console.log("hello world");
};

buttonId?.addEventListener("click", toggleDarkMode);
