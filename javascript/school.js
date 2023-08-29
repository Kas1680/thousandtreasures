const boxData = [


  
  { link: "../index.html", text: "Go Back" },
  { link: "https://www.sfu.ca/sfumail.html", text: "SFU Mail" },
  { link: "../src/sch.jpg", text: "mySchedule" }
  // { link: "", text: "" }
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

