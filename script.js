var rect = document.querySelector(".rectBox");

window.addEventListener("mousemove", function(details){
    //In this case, "details" is an arbitrary name for the event object; you could use any valid identifier
    // The event object is automatically passed to the function when the event occurs


    console.log("Mouse moved");

    var valX = gsap.utils.mapRange(0, window.innerWidth,
                         200, window.innerWidth - 200, 
                         details.clientX);

    gsap.to(".rectBox", {
        left: valX,

        ease: Power4,
    });

});