const boxData = [
  { link: "../index.html", text: "Go Back" },
  { link: "https://www.sfu.ca/sfumail.html", text: "SFU Mail" },
  { link: "../src/sch.jpg", text: "mySchedule" },
  { link: "https://sims.erp.sfu.ca/psc/csprd/EMPLOYEE/SA/s/WEBLIB_SFU.ISCRIPT1.FieldFormula.IScript_CASSignin?&", text: "goSFU" },
  { link: "https://canvas.sfu.ca/", text: "Canvas" },
  { link: "https://cas.sfu.ca/cas/login?message=Welcome+to+SFU+myExperience.%20Please+login+with+your+SFU+computing+ID.&allow=student,alumni&renew=true&service=https://myexperience.sfu.ca/sfuLogin.htm%3Faction%3Dlogin&_gl=1*19tkdw1*_ga*ODQ0NDI1OTQ1LjE2NjkxNDUzMjg.*_ga_R4BCVYL1QF*MTY5MzkzODM0MS4yNTMuMS4xNjkzOTM4MzQzLjU4LjAuMA..", text: "myExperience" }
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

