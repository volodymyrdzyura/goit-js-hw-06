const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector("ul.gallery");

const array = images.map((values) => 
`<li class="item">
<img src="${values.url}" alt="${values.alt}" weight="420px" height="420px">
</li>`)
.join("");

list.innerHTML = array;

list.style.display = "grid";
list.style.textAlign = "center"; 
list.style.listStyleType = "none";
list.style.gridTemplateColumns = "repeat(2, 800px)";
list.style.gridRowGap = "30px";
list.style.gridcolumnGap = "30px";

