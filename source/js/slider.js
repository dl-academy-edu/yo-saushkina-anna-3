(function() {
    const slider = document.querySelector('.slider');
    const wrapper = slider.querySelector('.slider__wrapper');
    const innerWrapper = wrapper.querySelector('.slider__inner-wrapper');
    const buttonBack = slider.querySelector('.slider__btn-left');
    const buttonNext = slider.querySelector('.slider__btn-right');
    const pagination = slider.querySelector('.slider__pagination');
    const slides = [...innerWrapper.querySelectorAll('.slider__slide')];
    const slidesCount = slides.length;
    const dots = [];
    const animationDuration = 500;

    let timer = null;
    let siledWidth = wrapper.offsetWidth;
    let activeSlideIndex = 0;

    initWidth();
    createDots();
    setActiveSlide(0);

    window.addEventListener('resize', () => {
        initWidth();
        setActiveSlide(activeSlideIndex);
    })

    buttonBack.addEventListener('click', () => {
        setActiveSlide(activeSlideIndex - 1);
    })

    buttonNext.addEventListener('click', () => {
        setActiveSlide(activeSlideIndex + 1);
    })

    function setActiveSlide(index, withAnimation = true) {
        if ( index < 0 || index >= slidesCount ) return;
        innerWrapper.style.transform = `translateX(${index * siledWidth * (-1)}px)`;


        buttonBack.removeAttribute('disabled');
        buttonNext.removeAttribute('disabled');

        if (withAnimation) {
            clearTimeout(timer);
            innerWrapper.style.transition = `transform ${animationDuration}ms`
            timer = setTimeout(() => {
                innerWrapper.style.transition = '';
            }, animationDuration);
        }

        if ( index === 0 ) {
            buttonBack.setAttribute('disabled', 'disabled');
        } 

        if ( index === slidesCount - 1 ) {
            buttonNext.setAttribute('disabled', 'disabled');
        } 


        dots[activeSlideIndex].classList.remove('slider__dot--active');
        dots[index].classList.add('slider__dot--active');
        activeSlideIndex = index;
    }

    function initWidth() {
        siledWidth = wrapper.offsetWidth;

        slides.forEach(slide => {
            slide.style.width = `${siledWidth}px`;
        });
    }

    function createDots() {
        for ( let i = 0; i < slidesCount; i++ ) {
            const dot = createDot(i);
            dots.push(dot);
            pagination.insertAdjacentElement('beforeend', dot);
        }
    }

    function createDot(index) {
        const dot = document.createElement('button');
        dot.classList.add('slider__dot');

        if ( index === activeSlideIndex) {
            dot.classList.add('slider__dot--active');
        }

        dot.addEventListener('click', () => {
            setActiveSlide(index);
        })
        return dot;
    }
})();


//несброс слайдера при перезагрузке
const slide = document.querySelector('.slider--js');
const btnBack = document.querySelector('.left--js');
const btnNext = document.querySelector('.right--js');

let activeStr;

const strArray = [
""
]

const updateStrCount = () => {
    +localStorage.getItem('activeStr')
    ? (activeStr = +localStorage.getItem('activeStr'))
    : (activeStr = 1);
}
updateStrCount();

const createStrNumber = () => {
    const div = document.createElement('div');
    div.classList.add('number-str');

    div.innerText = `${activeStr} из ${strArray.length}`;
    slide.insertAdjacentElement('beforeend', div);
}
createStrNumber();

// if (activeStr === 1) btnBack.setAttribute('disabled','disabled');
// if (activeStr === strArray.length) btnNext.setAttribute('disabled', 'disabled');


const createStr = () => {
    const div = document.createElement('div');
    div.classList.add('str');
    div.innerText = strArray[activeStr - 1];
    slide.insertAdjacentElement('afterbegin', div);
}
createStr();

const strChange = (direction) => {
    switch(direction) {
        case 'next': {
            if (activeStr < strArray.length) {
                localStorage.setItem('activeStr', activeStr + 1);
                updateStrCount();
                btnBack.removeAttribute('disabled');
            }
            if (activeStr === strArray.length) {
                // btnNext.setAttribute('disabled', 'disabled');
            }
            break;
        }
        case 'back': {
            if (activeStr != 1) {
                localStorage.setItem('activeStr', active - 1);
                updateStrCount();
            //     btnNext.removeAttribute('disabled');
            // }
            // if (activeStr === 1) {
            //     btnBack.removeAttribute('disabled', 'disabled');
            }
            break;
        }
        default: {
            console.error('Ошибка');
        }
    }
    document.querySelector('.str').remove();
    createStr();
    document.querySelector('.number-str').remove();
    createStrNumber();
}


btnBack.addEventListener('click', () => strChange('back'));
btnNext.addEventListener('click', () => strChange('next'));
