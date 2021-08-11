let images = ["suraj1.jpg",

                "suraj2.jpg",
                "suraj3.jpg",
                "suraj4.jpg",
                "suraj5.jpg",
                "suraj6.jpg",
                "suraj7.jpg",
                "suraj8.jpg" ];





var i=0;
function slides() {
    document.getElementById('imgslides').src = images[i];
    if(i<images.length-1){
        i++
    }else{
        i=0;
    }
}
setInterval(slides,1000);

