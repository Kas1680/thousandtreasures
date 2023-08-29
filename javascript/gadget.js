const boxData = [

  
  
    // { link: "https://www.sfu.ca/sfumail.html", text: "SFU Mail" },
    // { link: "../src/sch.jpg", text: "mySchedule" }
    // { link: "", text: "" }
    { link: "../index.html", text: "Go Back" },
    { link: "https://chat.openai.com/", text: "ChatGPT" },
    { link: "https://simplepdf.eu/editor", text: "PDF Editor" },
    { link: "https://blank.page/", text: "Blank Page" },
    { link: "https://mail.google.com/", text: "GMail" },
    { link: "https://github.com/", text: "Github" },
    { link: "https://www.toptal.com/project-managers/tomato-timer", text: "Pomodoro" }
];
  

  const boxContainer = document.getElementById("boxContainer");
  
  boxData.forEach(item => {

    const box = document.createElement("a");
    box.href = item.link;
    box.className = "box";

    const boxContent = document.createElement("div");
    boxContent.className = "box-content";
    boxContent.textContent = item.text;
    
    box.appendChild(boxContent);
    boxContainer.appendChild(box);
    
    if (boxContent.textContent !== "Go Back") {
      box.target = "_blank";
    }
  
  });
  
