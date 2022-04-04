//Use strict to keep cleaner code
"use strict"

/**
 * The JS code is credited to: Jemima Abu's "How to Animate on Scroll with Vanilla Javascript" blogpost
 * https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671
 */

//Step 1. Select all scroll elements
const scrollElements = document.querySelectorAll(".js-scroll");

//Step 2. In the case Javascript is not enabled 
scrollElements.forEach((element) => {
    element.style.opacity = 0;
});

//Step 3. Defining when the function is in view
const inView = (element,offset = 0) => {
    /**
     * An element is visible when the distance from the top of it 
     * to the top of the viewport is LESS than the height of the viewport
     * 
     * NOTE: scrolloffset is used to determine how far you need to scroll 
     * once the element is visible for the animation to take effect 
     */
    const distance = element.getBoundingClientRect().top;
    return (distance <= ((window.innerHeight || document.documentElement.clientHeight) - offset));
};

//Step 4.1. Define a function that will display the scroll element
const displayElement = (element) => {
    element.classList.add("scrolled");
};

//Step 4.2. Define a function to hide the scroll element when not in vie
const hideElement = (element) =>{
    element.classList.remove("scrolled");
};

/**
 * Step 5. Define a call-back method for the "scroll" event
 * It will call the scrollAnimate function for each scroll element
 * that is in view
 */
const scrollOffset = 100; 
const handleScroll = () => {
    scrollElements.forEach((element) =>{
        if(inView(element, scrollOffset)){
            displayElement(element);
        }
        else{
            hideElement(element);
        }
    })
}

//Step 6. Add the event listener to the window object for each scroll
window.addEventListener("scroll", () =>{
    handleScroll();
});
