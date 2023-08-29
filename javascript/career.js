const boxData = [
  { link: "../index.html", text: "Go Back" },
  { link: "https://clients.mindbodyonline.com/consumermyinfo?studioid=5732854&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=8%2f28%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1#", text: "MindBody" },
  { link: "https://leetcode.com/studyplan/top-interview-150/", text: "LeetCode" }
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

