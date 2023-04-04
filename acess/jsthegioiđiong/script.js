/*  File: scripts.js
    Student: Le Quoc Kiet, MSSV: B1906503, kietb1906503@student.ctu.edu.vn (Trực tiếp thực hiện)
    Student: Mai Thanh Tung, MSSV: B1913351, tungb1913351@student.ctu.edu.vn (Tham khảo và góp ý)
    Created: 17/12/2021 
    Ngày cập nhật: 20/12/2021 --> */
//-----Xử lí form chọn địa chỉ nhận hàng---nằm trong Xem khuyến mãi tại
const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log (adressclose)
adressbtn.addEventListener("click", function(){ //thêm sự kiện click
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function(){
   document.querySelector('.adress-form').style.display = "none"
   //console.log ("ok")
})
const adressbt = document.querySelector('#adress-form-1')
const adressclos = document.querySelector('#adress-close-1')
//console.log (adressbt)
adressbt.addEventListener("click", function(){ //thêm sự kiện click
    document.querySelector('.adress-form-1').style.display = "flex"
})
adressclos.addEventListener("click", function(){
   document.querySelector('.adress-form-1').style.display = "none"
   console.log ("ok")
})
//----------------slider--------------------
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
//console.log (imgNuber.length)
let index = 0
rightbtn.addEventListener("click", function(){
    index = index+1
    if(index>imgNuber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%" //các phần tử nằm trong <div class="slider-content-left-top" sẽ dịch chuyển sang bên trái cách bên phải 100%
})
leftbtn.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
//----------------------slider1--------Xử lí các thẻ li nằm dưới Slider---------------
const imgNuberone = document.querySelectorAll('.slider-content-left-bottom li')
imgNuberone.forEach(function (image,index) { //dùng hàm forEach (lấy các phần tử=image) và (số thứ tự các phần tử=index) của thẻ li.
    image.addEventListener("click", function() {
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%" //khi nhấp vào thẻ li thì <div class="slider-content-left-top" sẽ dịch chuyển
        image.classList.add("active")///khi nhấp vào thẻ li thì sẽ thêm thẻ active màu vàng phía trên 
    })
})
function removeactive() { //Xóa active màu vàng phía trên
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//-------------------slider2---------------Xủ lí Slider chạy tự động-------------
function imgAuto () {
    index = index +1
    if(index>imgNuber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNuberone[index].classList.add("active")
}
setInterval(imgAuto,5000)
//---------------slider-product-one--Săn sale online mỗi ngày------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNubertwo = document.querySelectorAll('.slider-product-one-content-items')
rightbtntwo.addEventListener("click", function(){
    index = index+1
    if(index>imgNubertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%" //
})
leftbtntwo.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})

