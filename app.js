import rowDetails from "./components/rowDetailsComponent";
import searchComponent from "./components/searchComponent";
import headerComponent from "./components/headerComponent";
import { rowComponent } from "./components/rowComponent";
import { paginationComponent } from "./components/paginationComponent";
import { modalComponent } from "./components/modalComponent";

const main = document.querySelector(".main");

const init = () => {
  let template = `
    <div class="container">
        ${searchComponent()}
        <table class="orders">
            <caption class="heading">Orders App</caption>
            <thead>
                <tr>
                    ${headerComponent()}
                </tr>
            </thead>
            <tbody class="rows">
                ${rowComponent()}
            </tbody>
        </table>
        <div class="pagination">
            <ul class="pages">
                ${paginationComponent()}
            </ul>
        </div>     
    </div>
    ${modalComponent()}
`;
  return template;
};

//main div insertion
main.innerHTML = `${init()}`;

//for edit button listener
const edit_link = document.querySelectorAll(".edit-link");
for (let i = 0; i < edit_link.length; i++) {
  edit_link[i].addEventListener("click", () => {
    console.log("asdasd");
    modal.style.display = "block";
    document.getElementsByTagName("html")[0].style.backgroundColor =
      "rgba(0,0,0,0.5)";

    const row = edit_link[i].parentNode.parentNode;
    const rowValues = row.getElementsByTagName("td");

    document.getElementById("product_Name").value = rowValues[1].textContent;
    document.getElementById("product_Type").value = rowValues[3].textContent;
    document.getElementById("product_Status").value = rowValues[4].textContent;

    const saveValues = () => {
      //Saving the changed values
      rowDetails[
        rowValues[0].textContent - 1
      ].productName = document.getElementById("product_Name").value;
      rowDetails[
        rowValues[0].textContent - 1
      ].productType = document.getElementById("product_Type").value;
      rowDetails[rowValues[0].textContent - 1].status = document.getElementById(
        "product_Status"
      ).value;
      rowValues[1].textContent = document.getElementById("product_Name").value;
      rowValues[3].textContent = document.getElementById("product_Type").value;
      rowValues[4].textContent = document.getElementById(
        "product_Status"
      ).value;

      //Hiding the modal
      modal.style.display = "none";
      document.getElementsByTagName("html")[0].style.backgroundColor = "";
    };

    //for save button listener
    edit_btn.addEventListener("click", () => {
      saveValues();
    });
  });
}

document.getElementsByTagName("html")[0].style.cssText = `
  font-family:sans-serif;
`;

//For first 10 rows
const rows = document.querySelector(".rows");
const elements = rows.getElementsByTagName("tr");
for (let i = 0; i < elements.length; i++) {
  if (i >= 0 && i <= 9) elements[i].style.display = "";
  else elements[i].style.display = "none";
}

//for main container css
const conatiner = document.querySelector(".container");
conatiner.style.cssText = `
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    height:100vh;
`;

//for search bar css
const search_Container = document.querySelector(".search-container");
search_Container.style.cssText = `
    text-align:center;
    margin-bottom:10px;
`;

//for search input css
const search = document.getElementById("search");
search.style.cssText = `
    margin-top:3px;
    border:1px solid black;
    font-size:20px;
    padding:5px;
    outline:none;
`;
search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();
  if (value == "") {
    const rows = document.querySelector(".rows");
    const elements = rows.getElementsByTagName("tr");
    for (let i = 0; i < elements.length; i++) {
      if (i >= 0 && i <= 9) elements[i].style.display = "";
      else elements[i].style.display = "none";
    }
  } else {
    const tr = document.getElementsByTagName("tr");
    for (let i = 1; i <= rowDetails.length; i++) {
      const td = tr[i].getElementsByTagName("td")[1];
      if (td.textContent.toLowerCase().includes(value))
        tr[i].style.display = "";
      else tr[i].style.display = "none";
    }
  }
});

//for main table css
const table = document.querySelector(".orders");
table.style.cssText = `
    width:700px;
    border-spacing: 0;
    height: 200px;
    border-collapse: collapse;
    color:#636e72;
    box-shadow: 7px 6px 9px -4px rgba(0,0,0,0.75);
    `;

const caption = document.querySelector(".heading");
caption.style.cssText = `
    font-size:23px;
    font-weight: bolder;
    text-transform: uppercase;
    padding-bottom:5px;
    `;

const th = document.getElementsByTagName("th");
for (let i = 0; i < th.length; i++) {
  th[i].style.cssText = `
        text-align: left;
        background-color: #009879;
        color:white;
        font-weight: bold;
        border-bottom:1px solid #dddddd;
        padding:15px;
    `;
}

const tr = document.getElementsByTagName("tr");
for (let i = 0; i < tr.length; i++) {
  if (i % 2 == 0) tr[i].style.backgroundColor = "#f3f3f3";
}
tr[tr.length - 1].style.borderBottom = "3px solid #009879";

const td = document.getElementsByTagName("td");
for (let i = 0; i < td.length; i++) {
  td[i].style.cssText = `
    border-bottom:1px solid #dddddd;
    padding:12px;
    `;
}

const pageContainer = document.querySelector(".pagination");
pageContainer.style.cssText = `text-align:center;`;

//for pagination css
const pagination = document.querySelector(".pages");
pagination.style.cssText = `
    list-style:none;
    text-align:center;
`;

//for pagination li listener
const li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].style.cssText = `
            display:inline-block;
            padding:10px;
            margin-left:-5px;
            border:1px solid #636e72;
            font-size:20px;
            transition:0.3s;
    `;
  li[i].addEventListener("mouseenter", () => {
    li[i].style.backgroundColor = "#009879";
  });
  li[i].addEventListener("mouseleave", () => {
    li[i].style.backgroundColor = "white";
  });
  li[i].addEventListener("click", () => {
    const rows = document.querySelector(".rows");
    const tr = rows.getElementsByTagName("tr");
    for (let j = 0; j < tr.length; j++) {
      if (j >= i * 10 && j < i * 10 + 10) tr[j].style.display = "";
      else tr[j].style.display = "none";
    }
  });
}

//for page number css
const pageNumbers = document.querySelectorAll(".numbers");
for (let i = 0; i < pageNumbers.length; i++) {
  pageNumbers[i].style.cssText = `
        text-decoration:none;
        color:black;
    `;
}

//modal css
const modal = document.querySelector(".simpleModal");
modal.style.cssText = `
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  font-size:20px;
  padding-top:0;
  background-color:white;
  width:250px;
  display:none;
`;

//for modal form css
const form = document.getElementById("edit");
form.style.cssText = `
  width:160px;
  margin-top:10px;
  margin-left:8px;
`;

const editHeader = document.getElementsByTagName("header");
editHeader[0].style.cssText = `
  background-color:#009879;
  color:white;
  text-transform:uppercase;
  font-size:25px;
  margin-top:0;
  width:100%;
  text-align:center;
`;

//for edit input css
const editInput = document.querySelectorAll(".edit-input");
for (let i = 0; i < editInput.length; i++) {
  editInput[i].style.cssText = `
    border:none;
    border-bottom:0.5px solid black;
    outline:none;
  `;
}

//for modal buttons css
const btn = document.querySelectorAll(".btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].style.cssText = `
    background:transparent;
    border:none;
    font-size:20px;
    margin-bottom:8px;
    padding:4px;
    margin-right:4px;    
    border-radius:30px;
    cursor:pointer;
    outline:none;
  `;
}

const edit_btn = document.querySelector(".edit-btn");
edit_btn.style.cssText += `
  background-color:#009879;
  color:white;
  border-color:#009879;
  font-size:20px;
`;

const cancel_btn = document.querySelector(".cancel-btn");
cancel_btn.style.cssText += `
  background-color:white;
  color:#009879;
  border:1px solid #009879;
  font-size:20px;
`;
cancel_btn.addEventListener("click", () => {
  document.getElementsByTagName("html")[0].style.backgroundColor = "white";
  modal.style.display = "none";
});

const cross = document.querySelector(".cross");
cross.style.cssText = `
  float:right;
  margin-right:4px;
  cursor:pointer;
`;
cross.addEventListener("click", () => {
  document.getElementsByTagName("html")[0].style.backgroundColor = "white";
  modal.style.display = "none";
});
