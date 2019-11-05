function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("Mijzelf1")) {
        image.src = "Images/Mijzelf2.jpg";
    }
    else {
        image.src = "Images/Mijzelf3.jpg";
        
    }
}


