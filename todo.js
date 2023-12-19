let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");
let inputThree = document.querySelector(".inputThree");
let inpEditOne = document.querySelector(".inpEditOne");
let inpEditTwo = document.querySelector(".inpEditTwo");
let inpEditThree = document.querySelector(".inpEditThree");
let contact = document.querySelector(".contact");
let click = document.querySelector(".click");
let save = document.querySelector(".edit");
// getProduct();
click.addEventListener("click", () => {
  let obj = {
    id: Date.now(),
    name:
      inputOne.value[0].toUpperCase() + inputOne.value.toLowerCase().slice(1),
    email: inputTwo.value,
    iamge: inputThree.value,
  };
  let data = JSON.parse(localStorage.getItem("person")) || [];
  data.push(obj);
  localStorage.setItem("person", JSON.stringify(data));

  getProduct();
});

function getProduct() {
  let newData = JSON.parse(localStorage.getItem("person")) || [];
  contact.innerHTML = "";
  newData.forEach((el, index) => {
    let info = document.createElement("div");
    let infoText = document.createElement("div");
    let infoImg = document.createElement("div");
    let nameP = document.createElement("p");
    let emailP = document.createElement("p");
    let image = document.createElement("img");
    let btnBlo = document.createElement("div");
    let infoDel = document.createElement("button");
    let infoEdit = document.createElement("button");

    info.classList.add("info");
    image.classList.add("image");
    nameP.classList.add("nameP");
    emailP.classList.add("emailP");
    infoDel.classList.add("infoDel");
    infoEdit.classList.add("infoEdit");
    btnBlo.classList.add("btnBlo");
    image.src = el.iamge;
    nameP.innerText = el.name;
    emailP.innerText = el.email;

    infoDel.innerText = "del";
    infoEdit.innerText = "edit";

    infoText.append(nameP);
    infoText.append(emailP);
    infoImg.append(image);
    btnBlo.append(infoDel);
    btnBlo.append(infoEdit);
    info.append(infoImg);
    info.append(infoText);
    info.append(btnBlo);
    contact.append(info);
    //!del
    infoDel.addEventListener("click", () => {
      delProduct(index);
    });
    //!edit
    infoEdit.addEventListener("click", () => {
      editProduct(index);
    });
  });
}
function delProduct(idx) {
  let data = JSON.parse(localStorage.getItem("person")) || [];
  data.splice(idx, 1);
  localStorage.setItem("person", JSON.stringify(data));
  getProduct();
}
function editProduct(index) {
  let data = JSON.parse(localStorage.getItem("person")) || [];
  inpEditOne.setAttribute("index", index);
  inpEditTwo.setAttribute("index", index);
  inpEditThree.setAttribute("index", index);

  inpEditOne.value = data[index].name;
  inpEditTwo.value = data[index].email;
  inpEditThree.value = data[index].iamge;
}

save.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("person")) || [];
  let nameId = inpEditOne.value;
  let emailId = inpEditOne.value;
  let imageId = inpEditOne.value;

  let newObj = {
    name: inpEditOne.value,
    email: inpEditTwo.value,
    image: inpEditThree.value,
  };
  data.splice(nameId, 1, newObj);
  data.splice(emailId, 1, newObj);
  data.splice(imageId, 1, newObj);
  getProduct();
});

// function createDOMElement(tag, className) {
//   const element = document.createElement(tag);
//   element.classList.add(className);
//   return element;
// }

// function createButton(text, className, clickHandler) {
//   const button = createDOMElement("button", className);
//   button.innerText = text;
//   button.addEventListener("click", clickHandler);
//   return button;
// }
// function getProduct() {
//   const newData = JSON.parse(localStorage.getItem("person")) || [];
//   contact.innerHTML = "";

//   newData.forEach((el, index) => {
//     const info = createDOMElement("div", "info");
//     const infoText = createDOMElement("div", "infoText");
//     const infoImg = createDOMElement("div", "infoImg");
//     const nameP = createDOMElement("p", "nameP");
//     const emailP = createDOMElement("p", "emailP");
//     const image = createDOMElement("img", "image");
//     const btnBlo = createDOMElement("div", "btnBlo");
//     const infoDel = createButton("del", "infoDel", () => delProduct(index));
//     const infoEdit = createButton("edit", "infoEdit", () => editProduct(index));

//     image.src = el.iamge;
//     nameP.innerText = el.name;
//     emailP.innerText = el.email;

//     infoText.append(nameP, emailP);
//     infoImg.appendChild(image);
//     btnBlo.append(infoDel, infoEdit);
//     info.append(infoImg, infoText, btnBlo);
//     contact.append(info);
//   });
// }
// function editProduct(index) {
//   const data = JSON.parse(localStorage.getItem("person")) || [];
//   [inpEditOne, inpEditTwo, inpEditThree].forEach((el) =>
//     el.setAttribute("index", index)
//   );

//   const { name, email, iamge } = data[index];
//   inpEditOne.value = name;
//   inpEditTwo.value = email;
//   inpEditThree.value = iamge;
// }

// save.addEventListener("click", () => {
//   const data = JSON.parse(localStorage.getItem("person")) || [];

//   const { value: nameId } = inpEditOne;
//   const { value: emailId } = inpEditTwo;
//   const { value: imageId } = inpEditThree;

//   const newObj = {
//     name: nameId,
//     email: emailId,
//     image: imageId,
//   };

//   [nameId, emailId, imageId].forEach((id) => data.splice(id, 1, newObj));

//   localStorage.setItem("person", JSON.stringify(data));
//   getProduct();
// });
