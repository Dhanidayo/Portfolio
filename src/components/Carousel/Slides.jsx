import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

//Import styles
import './Slides.css';

//import images
import recipe from '../../Resources/Project-images/recipe.png';
//import recipe2 from '../../Resources/Project-images/recipe2.png';
import portfolio from '../../Resources/Project-images/portfolio.png';
import mentor from '../../Resources/Project-images/mentor.png';
import burger from '../../Resources/Project-images/Burger.png';
import burger1 from '../../Resources/Project-images/Burger1.png';
import ems from '../../Resources/Project-images/ems.png';
import ems2 from '../../Resources/Project-images/ems2.png';
import mentor2 from '../../Resources/Project-images/mentor2.png';


function Slides (props) {
  return (
      <div className="carousel">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            isPlaying={true}
            totalSlides={8}
        >
        <Slider>
            <Slide index={0}>
                <img src={recipe} alt="" className="slide-img"/>
            </Slide>

            <Slide index={1}>
                <img src={portfolio} alt="" className="slide-img" />
            </Slide>

            <Slide index={2}>
                <img src={burger1} alt="" className="slide-img" />
            </Slide>

            <Slide index={3}>
            <img src={burger} alt="" className="slide-img" />
            </Slide>

            <Slide index={4}>
                <img src={ems} alt="" className="slide-img" />
            </Slide>

            <Slide index={5}>
              <img src={ems2} alt="" className="slide-img" />
            </Slide>

            <Slide index={6}>
              <img src={mentor} alt="" className="slide-img" />
            </Slide>

            <Slide index={7}>
              <img src={mentor2} alt="" className="slide-img" />
            </Slide>
          </Slider>
          <ButtonBack className="slide-btn">Back</ButtonBack>
          <ButtonNext className="slide-btn">Next</ButtonNext>
        </CarouselProvider>
      </div>
  );
}

export default Slides;




















































// class Slider extends React.Component {
//     constructor(props) {
//       super(props)
  
//       this.state = {
//         images : [
//             <img src={recipe} alt=""/>,
//             <img src={recipe2} alt="" className="recipe"/>,
//             <img src={portfolio} alt=""/>,
//             <img src={mentor} alt=""/>,
//             <img src={mentor2} alt=""/>,
//             <img src={burger1} alt=""/>,
//             <img src={burger} alt=""/>,
//             <img src={ems} alt=""/>,
//             <img src={ems2} alt=""/>,
//         ],
//         currentIndex: 0,
//         translateValue: 0
//       }
//     }
  
//     goToPrevSlide = () => {
//       if(this.state.currentIndex === 0)
//         return;
      
//       this.setState(prevState => ({
//         currentIndex: prevState.currentIndex - 1,
//         translateValue: prevState.translateValue + this.slideWidth()
//       }))
//     }
  
//     goToNextSlide = () => {
//       // Exiting the method early if we are at the end of the images array.
//       // We also want to reset currentIndex and translateValue, so we return
//       // to the first image in the array.
//       if(this.state.currentIndex === this.state.images.length - 1) {
//         return this.setState({
//           currentIndex: 0,
//           translateValue: 0
//         })
//       }
      
//       // This will not run if we met the if condition above
//       this.setState(prevState => ({
//         currentIndex: prevState.currentIndex + 1,
//         translateValue: prevState.translateValue + -(this.slideWidth())
//       }));
//     }
  
//     slideWidth = () => {
//        return document.querySelector('.slide').clientWidth
//     }
  
//     render() {
//       return (
//         <div className="slider">
  
//           <div className="slider-wrapper"
//             style={{
//               transform: `translateX(${this.state.translateValue}px)`,
//               transition: 'transform ease-out 0.45s'
//             }}>
//               {
//                 this.state.images.map((image, i) => (
//                   <Slide key={i} image={image} />
//                 ))
//               }
//           </div>
  
//           <LeftArrow
//            goToPrevSlide={this.goToPrevSlide}
//           />
  
//           <RightArrow
//            goToNextSlide={this.goToNextSlide}
//           />
//         </div>
//       );
//     }
//   }
  
  
//   const Slide = ({ image }) => {
//     const styles = {
//       backgroundImage: `url(${image})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: '50% 60%'
//     }
//     return <div className="slide" style={styles}></div>
//   }
  
  
//   const LeftArrow = (props) => {
//     return (
//       <div className="backArrow arrow" onClick={props.goToPrevSlide}>
//         <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }
  
  
//   const RightArrow = (props) => {
//     return (
//       <div className="nextArrow arrow" onClick={props.goToNextSlide}>
//         <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }

//   export default Slider;
  























// import React, { useState } from 'react';
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// function Slider ({ slides }) {
//     const [current, setCurrent] = useState(0);
//     const length = slides.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1);
//     };

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length -1 : current = 1);
//     };

//     return (
//         <StyledSlider>
//             <FaChevronLeft className="left-arrow" onClick={prevSlide} />
//             <FaChevronRight className="right-arrow" onClick={nextSlide} />
//             {slides.map((slide, index) => {
//                 return (
//                     <div key={index}>
//                         {index === current && (
//                             <SlideImage src={slide.image} alt="" />
//                         )}
//                     </div>
//                 );
//             })}
//         </StyledSlider>
//     );
// }