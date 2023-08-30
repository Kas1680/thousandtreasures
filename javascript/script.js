const boxData = [
    // { link: "https://chat.openai.com/", text: "ChatGPT" },
    // { link: "https://simplepdf.eu/editor", text: "PDF Editor" },
    // { link: "https://blank.page/", text: "Blank Page" },
    // { link: "https://mail.google.com/", text: "GMail" },
    // { link: "https://github.com/", text: "Github" },
    // { link: "https://www.sfu.ca/sfumail.html", text: "SFU Mail" },
    // { link: "https://www.toptal.com/project-managers/tomato-timer", text: "Pomodoro" },
    // { link: "https://clients.mindbodyonline.com/consumermyinfo?studioid=5732854&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=8%2f28%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1#", text: "MindBody" },
    // { link: "https://leetcode.com/studyplan/top-interview-150/", text: "LeetCode" },
    // { link: "src/sch.jpg", text: "mySchedule" }
    // { link: "", text: "" }
    { link: "../html/gadget.html", text: "Gadgets" },
    { link: "../html/school.html", text: "School" },
    { link: "../html/career.html", text: "Career" },
    { link: "../html/other.html", text: "Other" }
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
  });

const baseUrl = window.location.href.includes('localhost') ?
  '' : 'https://kas1680.github.io/thousandtreasures.io/';

document.write('<base href="' + baseUrl + '">');
  
