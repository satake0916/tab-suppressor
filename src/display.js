chrome.runtime.sendMessage("check", (response) => {
  if (response > 10) {
    let div = document.createElement("div");
    div.appendChild(
      document.createTextNode(
        "タブを" + response + "個開いています！整理してください！",
      ),
    );
    div.style.textAlign = "center";
    div.style.color = "#ff0000";

    let target = document.querySelector(
      "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb",
    );
    target.replaceWith(div);
  }
});
