import { Carousel, IconButton } from "@material-tailwind/react";
import Slide01 from '../../../assets/images/slide1.jpg';
import Slide02 from '../../../assets/images/slide2.jpg';
import Slide03 from '../../../assets/images/slide3.jpg';

export default function CarouselAvasus() {
  return (
    <section>
      <Carousel
        loop
        autoplay
        autoplayDelay={7000}
        className="!h-760px"
        prevArrow={({handlePrev}) => arrowBtn(handlePrev)}
        nextArrow={({handleNext}) => arrowBtn(handleNext, false)}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img src={Slide01} alt="slide 1" className="h-full w-full object-cover" />

        <img src={Slide02} alt="slide 2" className="h-full w-full object-cover" />

        <img src={Slide03} alt="slide 3" className="h-full w-full object-cover" />
      </Carousel>
    </section>
  );
}

const arrowBtn = (handleMove, isPrev=true) => {
  return(
    <IconButton
      variant="text"
      color="white"
      size="lg"
      onClick={handleMove}
      className={ (isPrev ? '!left-4' : '!right-4') + ' !absolute top-2/4 -translate-y-2/4'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={ isPrev ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}
        />
      </svg>
    </IconButton>
  )
}
