import { Carousel, IconButton } from "@material-tailwind/react";
import Slide01 from '../../../assets/images/slide1.jpg';
import Slide02 from '../../../assets/images/slide2.jpg';
import Slide03 from '../../../assets/images/slide3.jpg';
import AvasusWhite from '../../../assets/images/avasus-white.png';
import { Link } from "react-router-dom";

export default function CarouselAvasus() {
  return (
    <section>
      <Carousel
        loop
        autoplay
        autoplayDelay={7000}
        className="!h-760px !w-screen"
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
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
      </Carousel>
    </section>
  );
}

const FirstSlide = () => {
  return(
    <div className="h-full w-full object-cover">
      <img src={Slide01} alt="slide 1" className="h-full w-full absolute z-0 object-cover" />
      <div className="flex flex-col self-center ms-auto me-auto justify-center items-center z-10 relative h-full w-fit">
        <img className="md:w-auto w-72 md:h-24 h-16" src={AvasusWhite} alt="Avasus" />
        <div className="h-1 w-40 bg-white my-4 rounded-full"></div>
        <h2 className="text-white text-center"> Conhecimento Aberto em Saúde </h2>
        <Link to='/coursers'>
          <button className="bg-white shadow-md rounded-full px-8 py-1 mt-2">
            <h3 className="text-f-black-light">
              Acesse os cursos
            </h3>
          </button>
        </Link>
      </div>
    </div>
  )
}

const SecondSlide = () => {
  return(
    <div className="h-full w-full">
      <img src={Slide03} alt="slide 2" className="h-full w-full absolute z-0 object-cover" />
      <div className="flex flex-col self-center ms-auto me-auto justify-center items-center z-10 relative h-full w-fit">
        <h1 className="text-white text-6xl"> Parceiros </h1>
        <div className="h-1 w-40 bg-white my-4 rounded-full"></div>
        <Link to='/partners'>
          <button className="bg-white shadow-md rounded-full px-8 py-1 mt-2">
            <h3 className="text-f-black-light">
              Conheca nossos parceiros
            </h3>
          </button>
        </Link>
      </div>
    </div>
  )
}

const ThirdSlide = () => {
  return(
    <div className="h-full w-full">
      <img src={Slide02} alt="slide 3" className="h-full w-full absolute z-0 object-cover" />
      <div className="flex flex-col self-center ms-auto me-auto justify-center items-center z-10 relative h-full w-fit">
      <img className="md:w-auto w-72 md:h-24 h-16" src={AvasusWhite} alt="Avasus" />
      <div className="h-1 w-40 bg-white my-4 rounded-full"></div>
        <h2 className="text-white"> Transparência </h2>
        <Link to='/transparency'>
          <button className="bg-white shadow-md rounded-full px-8 py-1 mt-2">
            <h3 className="text-f-black-light">
              Acesse nossa transparência
            </h3>
          </button>
        </Link>
      </div>
    </div>
  )
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
