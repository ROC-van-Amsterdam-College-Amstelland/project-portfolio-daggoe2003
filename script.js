function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("colorbottel")) {
        image.src = "Mijzelf3.jpg";
    }
    else {
        image.src = "Mijzelf2.jpg";
    }
}


