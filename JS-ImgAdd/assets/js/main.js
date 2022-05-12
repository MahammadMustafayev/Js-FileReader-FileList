let inpFile=document.querySelector('[name="nemo"]');
let input=document.querySelector('.file');
let ul=document.getElementById("ul");

input.addEventListener("click",function () {
    this.children[1].click();
})
input.addEventListener("dragover",function (el) {
    el.preventDefault();
})

input.addEventListener("drop",function () {
    this.children[1].click();
})


inpFile.addEventListener("change",function (params) {
    [...this.files].forEach(file =>{
          let reader=new FileReader();
          let li=document.createElement("li"),
          icon=document.createElement("i"),
          img=document.createElement("i");
          reader.onload=function () {
            icon.classList.add("bi","bi-x-circle-fill");
            img.innerHTML="<img  width='45%' height='100%' src='"+ this.result+"'/>";
          }
          reader.readAsDataURL(file);
          li.append(icon,img);
          ul.appendChild(li);
          icon.addEventListener("click",function () {
              icon.parentElement.remove();
          })
    })
})


