//Use strict to keep cleaner code
"use strict"

/**
 * ============================
 *  H O M E P A G E
 * ============================
 */

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

/**
 * Add a "Throttle function" that limits the number of times the 
 * call-back function is called, this is to improve the speed of webpage loading
 * 
 * The throttle function works as follows
 * 1. Initilize the throttleTimer as false 
 * 2. Define a function that will only be called if the throttleTimer is false.
 *  This is the case WHEN the throttle function is either initially called OR 
 *  whenever a certain time limit has passed. The throttle function is responsible 
 *  for calling the call-back method so only when a certain time-limit has passed
 *  will it call the call-back method
 *  2.1. Checks if the throttle time is true (that means the time limit has not passed), return
 *  2.2. Call the setTimeout function, supply for it an annoymous function that calls the call-back and resets
 *      the throttle timeout.
 */
let throttleTimer = false;
const throttle = (callback, time) =>{
    if(throttleTimer){
        return;
    }

    throttleTimer = true; 

    setTimeout(() =>{
        callback(); 
        throttleTimer = false; 
    }, time)
}
//Step 6. Add the event listener to the window object for each scroll
window.addEventListener("scroll", () =>{
    throttle(handleScroll(), 250);
});

/**
 * ============================
 *  D E M O S
 * ============================
 */
/**
 * This code template is credited to Khan Academy's post "Using ProcessingJS outside of Khan Academy"
 * https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/advanced-development-tools/a/using-processingjs-outside-khan-academy
 * http://www.danfletcherblog.ca/2019/01/write-processingjs-outside-khan-academy/ (helpful blog)
 */

//Create the sketch function that manipulates the given processing instance to create the drawing
var sketchProc = (processingInstance) =>{
    processingInstance.size(1000,600);
    processingInstance.frameRate(60);
    
    processingInstance.background(59, 212, 255); //draw backdrop
    processingInstance.fill(0,0,0); 
    processingInstance.rect(0,400,1000,200); //draw road 
    processingInstance.fill(255,255,255); 
    processingInstance.rect(0,500,75,20); //draw road markers (white dashes)
    processingInstance.rect(100,500,75,20);
    processingInstance.rect(200,500,75,20);
    processingInstance.rect(300,500,75,20);
    processingInstance.rect(400,500,75,20);
    processingInstance.rect(500,500,75,20);
    processingInstance.rect(600,500,75,20);
    processingInstance.rect(700,500,75,20);
    processingInstance.rect(800,500,75,20);
    processingInstance.rect(900,500,75,20);
    processingInstance.fill(6,143,33);
    processingInstance.rect(0,250,1000,150); //draw grass 
    processingInstance.fill(222,164,18);
    processingInstance.ellipse(500,120,200,200); // draw sun
    //FIXME: add cars images 
    processingInstance.fill(245, 78, 66); //draw cars, red car 
    processingInstance.rect(50,400,50,50);
    processingInstance.rect(26,430,100,30);
    processingInstance.fill(156,153,152);
    processingInstance.ellipse(50,470,35,35); 
    processingInstance.ellipse(100,470,35,35);
    processingInstance.fill(8, 130, 212);  //blue car 
    processingInstance.rect(600,400,50,50);
    processingInstance.rect(575,430,100,30);
    processingInstance.fill(156,153,152);
    processingInstance.ellipse(600,470,35,35); 
    processingInstance.ellipse(650,470,35,35);
    processingInstance.fill(219,194,26);  //yellow car
    processingInstance.rect(800,500,50,50);
    processingInstance.rect(775,530,100,30);
    processingInstance.fill(156,153,152);
    processingInstance.ellipse(800,570,35,35); 
    processingInstance.ellipse(850,570,35,35);
    processingInstance.fill(25,153,14);  //green car
    processingInstance.rect(300,500,50,50);
    processingInstance.rect(275,530,100,30);
    processingInstance.fill(156,153,152);
    processingInstance.ellipse(300,570,35,35); 
    processingInstance.ellipse(355,570,35,35);




};

//Get the canvas using the DOM 
var canvas = document.getElementById("mycanvas");

//Instantiate a new processing instance (NOTE: syntactic sugar is applied)
var processingInstance = new Processing(canvas, sketchProc);

