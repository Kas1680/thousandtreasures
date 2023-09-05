const boxData = [


    // { link: "", text: "" }
    { link: "../index.html", text: "Go Back" },
    { link: "https://www.youtube.com/watch?v=mprIc6EYfIs&list=RDmprIc6EYfIs&start_radio=1", text: "Extreme Love" },
    { link: "https://www.youtube.com/watch?v=uu7j_xljCRY", text: "Take Me Home Country Road" },
    { link: "https://www.youtube.com/watch?v=Oij-doj3cA8", text: "夏の終わり" },
    { link: "https://www.youtube.com/watch?v=yM4bYyC1HU0", text: "House of the Rising Sun" },
    { link: "https://www.youtube.com/watch?v=mDiJYamPuFY", text: "涙" },
    { link: "https://www.youtube.com/watch?v=1xBcGDl4AT8", text: "声" },
    { link: "https://www.youtube.com/watch?v=1xBcGDl4AT8", text: "声" }
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
  
