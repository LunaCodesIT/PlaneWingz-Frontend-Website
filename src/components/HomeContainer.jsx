import React from 'react';
import Delivery from './img/delivery.png';
import HeroBg from "./img/heroBg.png";
import { heroData } from '../utils/data';
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 
  md:grid-cols-2 gap-2 w-full" id="home"
  >
    <div className="py-2 flex-1 flex flex-col items-start 
    justify-center gap-6">
     <div className="flex items-center gap-2 justify-center 
     bg-green-100 px-4 py-1 rounded-full">
      <p className="text-base text-green-800 font-semibold">
        Bike Delivery</p>
      <div className="w-6 h-6 bg-white rounded-full overflow-hidden 
      drop-shadow-xl">
       <img 
       src={Delivery} 
       className="w-full h-full object-contain"
       alt="delivery" 
       />
      </div>
     </div>

     <p className="text-[2rem] 
      lg:text-[4.5rem] american
     tracking-wide text-headingColor">
      Medicinal <span className="text-green-900 text-[2rem] 
      lg:text-[4.5rem] american"> <br />Cannabis</span> Chicken <br />
      Wingz and more...</p>

      <p className="text-base text-center font-normal md:text-left md:w-[80%] ">
        We don't just offer delicious chicken wingz... We offer an
         experience! <br /> We are committed to bringing you unique-looking 
         and homely-tasting food infused with the most organic 
         cannabis extracts, right to your doorstep! 
       <br /> <br /> WE DELIVER!
      </p>

      <motion.button whileHover={{ scale: 1.2 }}
          type="button"
          className="bg-gradient-to-br from-green-700 to-green-950 
          w-full md:w-auto px-4 py-2  text-justWhite rounded-lg
           hover:shadow-lg transition-all ease-in-out duration-100"
        >
             Order Now
        </motion.button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center 
        justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md 
                rounded-3xl flex flex-col items-center justify-center
                 drop-shadow-lg"
              >
                <motion.img whileHover={{ scale: 1.2 }}
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold 
                text-textColor 
                mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm font-semibold 
                my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600 font-semibold">
                    R</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;