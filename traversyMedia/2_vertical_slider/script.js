const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length //holds length of the slides meaning how many slides do we have. In this case slidesLength must be equal to 4.


let activeSlideIndex = 0;
// matching corret images with their texts
slideLeft.style.top = `-${(slidesLength-1)*100}vh`
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    // holding slider height value
    const sliderHeight = sliderContainer.clientHeight
    /*The Element.clientHeight read-only property is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present).

    clientHeight can be calculated as: CSS height + CSS padding - height of horizontal scrollbar (if present). */

    //console.log(sliderHeight)

    if (direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength-1) {
            activeSlideIndex = 0 // to get back to the beginning
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength-1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`
}