// Select Pictures

var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")
var img6 = document.getElementById("img6")
var img7 = document.getElementById("img7")
var img8 = document.getElementById("img8")
var img9 = document.getElementById("img9")
var img10 = document.getElementById("img10")
var img11 = document.getElementById("img11")
var img12 = document.getElementById("img12")
var img13 = document.getElementById("img13")
var img14 = document.getElementById("img14")
var img15 = document.getElementById("img15")
var img16 = document.getElementById("img16")
var img17 = document.getElementById("img17")
var img18 = document.getElementById("img18")
var img19 = document.getElementById("img19")
var img20 = document.getElementById("img20")

// Find Display Boxes

function setLocalData(imgData, imgNumber) {
    window.localStorage.setItem("imgDat", imgData);
    window.localStorage.setItem("imgNum", imgNumber);
}

function openImage() {
    window.location.href = "image.html"
}

img1.addEventListener("click", function() {
    setLocalData(img1.getAttribute("src"), 1)
    openImage()
})

img2.addEventListener("click", function() {
    setLocalData(img2.getAttribute("src"), 2)
    openImage()
})

img3.addEventListener("click", function() {
    setLocalData(img3.getAttribute("src"), 3)
    openImage()
})

img4.addEventListener("click", function() {
    setLocalData(img4.getAttribute("src"), 4)
    openImage()
})

img5.addEventListener("click", function() {
    setLocalData(img5.getAttribute("src"), 5)
    openImage()
})

img6.addEventListener("click", function() {
    setLocalData(img6.getAttribute("src"), 6)
    openImage()
})

img7.addEventListener("click", function() {
    setLocalData(img7.getAttribute("src"), 7)
    openImage()
})

img8.addEventListener("click", function() {
    setLocalData(img8.getAttribute("src"), 8)
    openImage()
})

img9.addEventListener("click", function() {
    setLocalData(img9.getAttribute("src"), 9)
    openImage()
})

img10.addEventListener("click", function() {
    setLocalData(img10.getAttribute("src"), 10)
    openImage()
})

img11.addEventListener("click", function() {
    setLocalData(img11.getAttribute("src"), 11)
    openImage()
})

img12.addEventListener("click", function() {
    setLocalData(img12.getAttribute("src"), 12)
    openImage()
})

img13.addEventListener("click", function() {
    setLocalData(img13.getAttribute("src"), 13)
    openImage()
})

img14.addEventListener("click", function() {
    setLocalData(img14.getAttribute("src"), 14)
    openImage()
})

img15.addEventListener("click", function() {
    setLocalData(img15.getAttribute("src"), 15)
    openImage()
})

img16.addEventListener("click", function() {
    setLocalData(img16.getAttribute("src"), 16)
    openImage()
})

img17.addEventListener("click", function() {
    setLocalData(img17.getAttribute("src"), 17)
    openImage()
})

img18.addEventListener("click", function() {
    setLocalData(img18.getAttribute("src"), 18)
    openImage()
})

img19.addEventListener("click", function() {
    setLocalData(img19.getAttribute("src"), 19)
    openImage()
})

img20.addEventListener("click", function() {
    setLocalData(img20.getAttribute("src"), 20)
    openImage()
})