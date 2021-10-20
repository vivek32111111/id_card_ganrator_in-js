const addName = document.getElementById("add-name");
const addCourse = document.getElementById("add-course");
const addAuthor = document.getElementById("add-author");
const submitBtn = document.getElementById("submit");
let resultElm = document.querySelector(".resultCard");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addInfo();
});

function addInfo() {
  let nameVal = addName.value;
  let courseVal = addCourse.value;
  let authorVal = addAuthor.value;

  let resultCard = document.createElement("div");
  resultCard.classList.add("resultCard");
  addName.value = "";
  addCourse.value = "";
  addAuthor.value = "";
  resultCard.innerHTML = `
 
         <div class="result"  style="display: flex; flex-direction: row;">
        <div class="resultCard">
          <div class="img">
            <img src="./images/1.jpg" alt="" />
          </div>
          <br/>
          <div class="infoCard">
               <div class="name">
                  <span id="name">Name:</span>
                  <span>${nameVal}</span>
               </div>
                <br />
               <div class="course">
                  <span id="course">Course:</span>
                   <span>${courseVal}</span>
               </div>
                 <br />
               <div class="author">
                <span id="author">Author:</span>
                <span>${authorVal}</span>
               </div>
                   
          </div>
         
        </div>
       </br>
      </div>
         
        
  `;
  resultElm.appendChild(resultCard);
}
Image = ["1.jpg", "2.jpg", "3.jpg"];
function RanImages() {
  randomImg = Math.floor(Math.random() * Image.length);
  selectedImg = Image[randomImg];
  document.querySelector(".img").src = `./images${selectedImg}`;
}
