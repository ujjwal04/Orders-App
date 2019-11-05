import rowDetails from "./components/rowDetailsComponent";
import searchComponent from "./components/searchComponent";
import headerComponent from "./components/headerComponent";
import { rowComponent } from "./components/rowComponent";
import { paginationComponent } from "./components/paginationComponent";

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
    </div>`;
  return template;
};

main.innerHTML = `${init()}`;

document.getElementsByTagName("html")[0].style.fontFamily = "sans-serif";

const rows = document.querySelector(".rows");
const elements = rows.getElementsByTagName("tr");
for (let i = 0; i < elements.length; i++) {
  if (i >= 0 && i <= 9) elements[i].style.display = "";
  else elements[i].style.display = "none";
}

const conatiner = document.querySelector(".container");
conatiner.style.cssText = `
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`;

const search_Container = document.querySelector(".search-container");
search_Container.style.cssText = `
    text-align:center;
    margin-bottom:10px;
`;

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
    console.log("hiiasdasdasd");
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

const pagination = document.querySelector(".pages");
pagination.style.cssText = `
    list-style:none;
    text-align:center;
`;

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
    const tbody = document.querySelector(".rows");
    const tr = tbody.getElementsByTagName("tr");
    console.log(tr);
    for (let j = 0; j < tr.length; j++) {
      if (j >= i * 10 && j < i * 10 + 10) tr[j].style.display = "";
      else tr[j].style.display = "none";
    }
  });
}

const pageNumbers = document.querySelectorAll(".numbers");
for (let i = 0; i < pageNumbers.length; i++) {
  pageNumbers[i].style.cssText = `
        text-decoration:none;
        color:black;
    `;
}
