// import React, { useState, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faChevronRight,
//     faChevronLeft,
//     faArrowLeft,
//     faArrowRight
// } from "@fortawesome/free-solid-svg-icons";

// const dotsContainerStyles = {
//     display: "flex",
//     justifyContent: "center",
//     marginLeft: ' 3rem',
// };

// const dotStyle = {
//     margin: "0 3px",
//     cursor: "pointer",
//     fontSize: "20px",
//     color: 'grey',
// };
// import img1 from "./assets/image-1.jpg";
// import img2 from "./assets/image-2.jpg";
// import img3 from "./assets/image-3.jpg";
// import img4 from "./assets/image-4.jpg";
// import img5 from "./assets/image-5.jpg";
// import img6 from "./assets/image-6.jpg";
// import img7 from "./assets/image-7.jpg";
// import img8 from "./assets/image-8.jpg";
// import img9 from "./assets/image-9.jpg";
// import img10 from "./assets/image-10.jpg";



// // const dotStyle = {
// //   margin: '0 5px',
// //   cursor: 'pointer',
// //   fontSize: '24px',
// //   color: activeDot === i ? 'blue' : 'black', // Change color for active dot
// //   // Add additional styling for rectangle curved
// //   borderRadius: '50%',
// //   width: '20px',
// //   height: '20px',
// //   backgroundColor: activeDot === i ? 'blue' : 'transparent', // Change background for active dot
// // };



// export default (props) => {
//     const [activeSlide, setactiveSlide] = useState(props.activeSlide);
//     const [activeDot, setActiveDot] = useState(props.activeSlide);

//     const text_area = useRef(null);



//     // const next = () =>
//     //   activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

//     // const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

//     const next = () => {
//         const nextIndex = (activeSlide + 1) % props.data.length;
//         setactiveSlide(nextIndex);
//         setActiveDot(nextIndex);
//     };

//     const prev = () => {
//         const prevIndex = (activeSlide - 1 + props.data.length) % props.data.length;
//         setactiveSlide(prevIndex);
//         setActiveDot(prevIndex)
//     };


//     const getStyles = (index) => {
//         if (activeSlide === index)
//             return {
//                 opacity: 1,
//                 transform: "translateX(0px) translateZ(0px) ",
//                 zIndex: 10,

//             };
//         else if (activeSlide - 1 === index)
//             return {
//                 opacity: 1,
//                 transform: "translateX(-240px) translateZ(-400px) ",
//                 zIndex: 9,

//             };
//         else if (activeSlide + 1 === index)
//             return {
//                 opacity: 1,
//                 transform: "translateX(240px) translateZ(-400px) ",
//                 zIndex: 9,

//             };
//         else if (activeSlide - 2 === index)
//             return {
//                 opacity: 1,
//                 transform: "translateX(-480px) translateZ(-500px) ",
//                 zIndex: 8
//             };
//         else if (activeSlide + 2 === index)
//             return {
//                 opacity: 1,
//                 transform: "translateX(480px) translateZ(-500px) ",
//                 zIndex: 8
//             };
//         else if (index < activeSlide - 2)
//             return {
//                 opacity: 0,
//                 transform: "translateX(-480px) translateZ(-500px) ",
//                 zIndex: 7
//             };
//         else if (index > activeSlide + 2)
//             return {
//                 opacity: 0,
//                 transform: "translateX(480px) translateZ(-500px) ",
//                 zIndex: 7
//             };
//     };

//     function handleSlideClick(i) {
//         setactiveSlide(i);
//         setActiveDot(i);
//         //  text_area.current.value+=i;

//     }

//     //function handleSlideClickDot(i){
//     //  setactiveSlide(i);
//     //   text_area.current.value+=i;


//     // }

//     function handleSlideClickDot(i) {
//         setactiveSlide(i);
//         setActiveDot(i); // Update active dot when clicked
//         // text_area.current.value +=i;
//         // event.target.innerHTML = 'blue';
//     }




//     return (
//         <>
//             {/* carousel */}






//             <div className="flexbox">

//                 <div className="slideC">
//                     {props.data.map((item, i) => (
//                         <React.Fragment key={item.id}>

//                             <div
//                                 className="slide"
//                                 style={{

//                                     backgroundImage: `url(${item.image_r})`,
//                                     backgroundSize: 'cover',


//                                     ...getStyles(i)
//                                 }}
//                                 onClick={() => handleSlideClick(i)}
//                             >




//                                 <div className="floating-text">{"IMG" + String(item.id)}</div>
//                                 <SliderContent {...item} />
//                             </div>



//                         </React.Fragment>
//                     ))}
//                 </div>

//                 <div>qwerty</div>



//                 <div className="slideC2">
//                     {props.data.map((item, i) => (
//                         <React.Fragment key={item.id}>
//                             <div
//                                 className="slide"
//                                 style={{

//                                     backgroundImage: `url(${item.image_r})`,
//                                     backgroundSize: 'cover',


//                                     ...getStyles(i)
//                                 }}
//                                 onClick={() => handleSlideClick(i)}
//                             >




//                                 <div className="floating-text">{"IMG" + String(item.id)}</div>
//                                 <SliderContent {...item} />
//                             </div>



//                         </React.Fragment>
//                     ))}


//                 </div>
//             </div>

//             {/* <textArea id="text_area" ref={text_area} rows="1" cols="30"></textArea> */}





//             <div className="btns flex_div">
//                 <FontAwesomeIcon
//                     className="btn"
//                     onClick={prev}
//                     icon={faArrowLeft}
//                     color='grey'
//                     size="2x"
//                 />



//                 <div className="flex_div" style={dotsContainerStyles}>
//                     {props.data.map((item, i) => (
//                         <div
//                             style={{
//                                 margin: "0 5px",
//                                 cursor: "pointer",
//                                 fontSize: "20px",
//                                 color: "grey",

//                             }}

//                             key={i}
//                             onClick={() => handleSlideClickDot(i)}
//                         >
//                             {/* ● */}
//                             {activeDot === i ? <div className="blue-rectangle"></div> : <div>●</div>}
//                             {/* {activeDot === i ? <div >a</div> : <div>●</div>} */}
//                         </div>
//                     ))}
//                 </div>


//                 <FontAwesomeIcon />
//                 <FontAwesomeIcon
//                     className="btn flex_div"
//                     onClick={next}
//                     icon={faArrowRight}
//                     color="grey"
//                     size="2x"
//                 />
//             </div>   
//         </>
//     );
// };

// const SliderContent = (props) => {
//     return (
//         <div className="sliderContent">


//             <p >{props.desc}</p>
//         </div>
//     );
// };
