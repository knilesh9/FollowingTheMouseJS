//This is the alternative code that is what inspired me to make this.
window.addEventListener("mousemove", function(details){

    var followDiv = document.querySelector(".rectangle");

    var xval = gsap.utils.mapRange(0, window.innerWidth, 

                                    100 + followDiv.getBoundingClientRect().width/2,
                                    window.innerWidth - (100 + followDiv.getBoundingClientRect().width/2),

                                    details.clientX);
    console.log(window.innerWidth);

    console.log(window.innerWidth - (100 + followDiv.getBoundingClientRect().width/2));
        //1695
    gsap.to(".rectangle",{
        left: xval,
        // left: 1536 - 300,
        ease: Power3,
    });

});


// Here, the author (Harsh, from Sheriyans), is using the rectangle.getBoundingClientRect(), to get the 
// values for the height, and width of this.