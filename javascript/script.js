const boxData = [

    // { link: "", text: "" }
    { link: "html/gadget.html", text: "Gadgets" },
    { link: "html/school.html", text: "School" },
    { link: "html/career.html", text: "Career" },
    { link: "html/other.html", text: "Other" }
];
  
const baseURL = 'https://kas1680.github.io/thousandtreasures.io/';
              
                 

  const boxContainer = document.getElementById("boxContainer");
  
  boxData.forEach(item => {
    const box = document.createElement("a");
    box.href = baseURL + item.link;
    box.className = "box";

    const boxContent = document.createElement("div");
    boxContent.className = "box-content";
    boxContent.textContent = item.text;
    
    box.appendChild(boxContent);
    boxContainer.appendChild(box);
  });



