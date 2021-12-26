const menu = document.getElementById("menu")
const list = document.querySelector(".list")
const gallery = document.getElementById("gallery")
const photos = [`<img src="images/1.jpg"`, `<img src="images/2.png"`, `<img src="images/3.jpg"`,
 `<img src="images/4.jpg"`, `<img src="images/5.png"`, `<img src="images/6.jpg"`, `<img src="images/7.jpg"`]
 

menu.addEventListener("click", ()=>{list.classList.toggle("listStyle")})

let current = 0;

function changeImage(){
    current++
    if (current>photos.length){current=1}
    gallery.innerHTML = `${photos[current-1]} class="image" >`;
    console.log(current)
}
changeImage()
setInterval(changeImage, 3000)