import React, { useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import car1 from "./car1.webp";
import car2 from "./car2.webp";
import car3 from "./car3.webp";
import car4 from "./car4.webp";
import car5 from "./car5.webp";
import car6 from "./car6.webp";
import car7 from "./car7.webp";
import car8 from "./car8.webp";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css/skyblue";

function Store() {
  const [activeSlide, setActiveSlide] = useState(0);

  const options = {
    type: "loop",
    gap: "1rem",
    speed: 800,
    resetProgress: false,
    easing: "linear",
    pagination: true,
    autoplay: true,
    interval: 3000,
  };

  const handleSlideChange = (splide) => {
    const newIndex = splide.index;
    setActiveSlide(newIndex);
  };

  useEffect(() => {
    const colors = [
      "#827c5a",
      "#bfcacb",
      "#784828",
      "#D3D502",
      "#25C09E",
      "#9E948F",
      "#24BBFD",
      "#70C078",
    ];
    document.body.style.backgroundColor = colors[activeSlide % colors.length];
  }, [activeSlide]);

  return (
    <section className="w-full" id="bmw">
      <div className="wrapper relative max-w-7xl mx-auto">
        <Splide
          options={options}
          onMoved={handleSlideChange}
          aria-labelledby="autoplay-example-heading"
          hasTrack={false}
          className="p-0 relative"
        >
          <motion.div
            className="absolute w-full h-full md:flex justify-center hidden  overflow-hidden myfont"
            initial={{ scale: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            animate={{ scale: 1 }}
          >
            <h1 className="text-[200px] md:text-[400px] text-blue-500 italic">
              <span style={{ color: "#017BEB" }}>B</span>
              <span style={{ color: "#512DAD" }}>M</span>
              <span style={{ color: "#F70002" }}>W</span>
            </h1>
          </motion.div>
          <motion.div
            className="absolute top-10 left-8 z-10"
            initial={{ scale: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            animate={{ scale: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              TROUVEZ VOTRE BMW
            </h1>
            <p className="">Confectionné avec des matériaux haute couture</p>
            <button className="mt-8">
              <a
                href="#"
                className="border-4 border-gray-600 p-3 md:p-4 hover:bg-white"
              >
                En savoir plus
              </a>
            </button>
          </motion.div>
          <div style={{ position: "relative" }}>
            <SplideTrack className="h-[80vh]">
              <SplideSlide className="flex justify-center">
                <motion.div
                  className="flex flex-col items-center justify-center md:justify-normal font-bold"
                  initial={{ scale: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                  }}
                  animate={{ scale: 1 }}
                >
                  <img
                    src={car1}
                    className="w-full md:w-4/5 lg:w-7/12"
                    alt="BMW M8 Cabriolet"
                    style={{ filter: "drop-shadow(-3px 20px 17px #000000)" }}
                  />
                  <h3>BMW M8 Cabriolet</h3>
                  <p className="font-bold">ESSENCE</p>
                </motion.div>
              </SplideSlide>
              <SplideSlide className="flex justify-center">
                <div className="flex flex-col items-center justify-center md:justify-normal">
                  <img
                    src={car2}
                    className="w-full md:w-4/5 lg:w-7/12"
                    alt="BMW X4"
                    style={{ filter: "drop-shadow(-3px 20px 17px #000000)" }}
                  />
                  <h3>BMW X4</h3>
                  <p className="font-bold">ESSENCE•DIESEL</p>
                </div>
              </SplideSlide>
              <SplideSlide className="flex justify-center">
                <div className="flex flex-col items-center justify-center md:justify-normal">
                  <img
                    src={car3}
                    className="w-full md:w-4/5 lg:w-7/12"
                    alt="BMW i7 M70 xDrive"
                    style={{ filter: "drop-shadow(-3px 20px 17px #000000)" }}
                  />
                  <h3>BMW i7 M70 xDrive</h3>
                  <p className="font-bold">ÉLECTRIQUE</p>
                </div>
              </SplideSlide>
              <SplideSlide className="flex justify-center">
                <div className="flex flex-col items-center justify-center md:justify-normal">
                  <img
                    src={car4}
                    className="w-full md:w-4/5 lg:w-7/12"
                    alt="BMW X4 M"
                    style={{ filter: "drop-shadow(-3px 20px 17px #000000)" }}
                  />
                  <h3>BMW X4 M</h3>
                  <p className="font-bold"></p>
                </div>
              </SplideSlide>
              <SplideSlide className="flex justify-center">
                <div className="flex flex-col items-center justify-center md:justify-normal">
                  <img
                    src={car5}
                    className="w-full md:w-4/5 lg:w-7/12"
                    alt="BMW M3 Competition Berline"
                    style={{ filter: "drop-shadow(-3px 20px 17px #000000)" }}
                  />
                  <h3>BMW M3 Competition Berline</h3>
                  <p className="font-bold">ESSENCE</p>
                </div>
              </SplideSlide>
              <SplideSlide className="flex justify-center">
                <div className="flex flex-col items-center justify-center md:justify-normal">
                  <img
                    src={car6}
                    className="w-full md:w-4/5 lg:w-7/12"
                    alt="BMW M760e xDrive"
                    style={{ filter: "drop-shadow(-3px 20px 17px #000000)" }}
                  />
                  <h3> BMW M760e xDrive</h3>
                  <p className="font-bold">Hybride-Rechargeable</p>
                </div>
              </SplideSlide>
              <SplideSlide className="flex justify-center">
                <div className="flex flex-col items-center justify-center md:justify-normal">
                  <img
                    src={car7}
                    className="w-full md:w-4/5 lg:w-7/12"
                    alt="BMW M8 Coupé"
                    style={{ filter: "drop-shadow(-3px 20px 17px #000000)" }}
                  />
                  <h3> BMW M8 Coupé </h3>
                  <p className="font-bold">ESSENCE</p>
                </div>
              </SplideSlide>
              <SplideSlide className="flex justify-center">
                <div className="flex flex-col items-center justify-center md:justify-normal">
                  <img
                    src={car8}
                    className="w-full md:w-4/5 lg:w-7/12"
                    alt="BMW Série 4 Cabriolet"
                    style={{ filter: "drop-shadow(-3px 20px 17px #000000)" }}
                  />
                  <h3>BMW Série 4 Cabriolet</h3>
                  <p className="font-bold">ESSENCE</p>
                </div>
              </SplideSlide>
            </SplideTrack>
            <div class="splide__arrows splide__arrows--ltr relative">
              <button
                className="splide__arrow splide__arrow--prev absolute bottom-0 left-5"
                type="button"
                aria-label="Previous slide"
                aria-controls="splide01-track"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={80}
                  zoomAndPan="magnify"
                  viewBox="0 0 60 60"
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  version={1.0}
                >
                  <defs>
                    <clipPath id="759e13e11d">
                      <path
                        d="M 51 27 L 58.414062 27 L 58.414062 34 L 51 34 Z M 51 27 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="f57aa55043">
                      <path
                        d="M 3.664062 25.75 L 58 25.75 L 58 34.75 L 3.664062 34.75 Z M 3.664062 25.75 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#759e13e11d)">
                    <path
                      fill="#040606"
                      d="M 52.433594 33.886719 C 52.257812 33.886719 52.085938 33.785156 52.007812 33.609375 C 51.894531 33.371094 51.992188 33.082031 52.230469 32.96875 L 56.765625 30.757812 L 52.164062 28.832031 C 51.921875 28.730469 51.808594 28.449219 51.90625 28.203125 C 52.007812 27.957031 52.285156 27.839844 52.523438 27.941406 L 58.109375 30.277344 C 58.28125 30.347656 58.394531 30.519531 58.402344 30.707031 C 58.40625 30.898438 58.300781 31.074219 58.132812 31.15625 L 52.636719 33.835938 C 52.570312 33.871094 52.5 33.886719 52.433594 33.886719 "
                      fillOpacity={1}
                      fillRule="nonzero"
                    />
                  </g>
                  <g clipPath="url(#f57aa55043)">
                    <path
                      fill="#040606"
                      d="M 37.042969 34.75 C 35.644531 34.75 35.097656 32.621094 34.519531 30.367188 C 34.121094 28.828125 33.578125 26.710938 32.914062 26.710938 C 32.246094 26.710938 31.703125 28.828125 31.304688 30.371094 C 30.730469 32.621094 30.183594 34.75 28.785156 34.75 C 27.390625 34.75 26.84375 32.621094 26.265625 30.371094 C 25.867188 28.828125 25.324219 26.710938 24.65625 26.710938 C 23.988281 26.710938 23.445312 28.828125 23.050781 30.371094 C 22.472656 32.621094 21.925781 34.75 20.53125 34.75 C 19.675781 34.75 19.5 33.824219 19.347656 33.007812 C 19.1875 32.152344 19.007812 31.183594 18.269531 30.691406 C 17.347656 30.53125 8.890625 30.628906 3.6875 30.730469 L 3.667969 29.765625 C 18.144531 29.484375 18.570312 29.75 18.710938 29.835938 C 19.847656 30.539062 20.09375 31.863281 20.277344 32.828125 C 20.339844 33.175781 20.441406 33.703125 20.546875 33.796875 C 21.195312 33.785156 21.738281 31.671875 22.136719 30.125 C 22.714844 27.875 23.261719 25.75 24.65625 25.75 C 26.054688 25.75 26.597656 27.875 27.175781 30.125 C 27.574219 31.671875 28.117188 33.785156 28.785156 33.785156 C 29.453125 33.785156 29.996094 31.671875 30.390625 30.125 C 30.972656 27.875 31.515625 25.75 32.914062 25.75 C 34.308594 25.75 34.851562 27.875 35.433594 30.125 C 35.828125 31.667969 36.375 33.785156 37.042969 33.785156 C 37.710938 33.785156 38.253906 31.671875 38.652344 30.125 C 39.230469 27.875 39.777344 25.75 41.171875 25.75 C 42.164062 25.75 42.523438 27.007812 42.90625 28.34375 C 43.113281 29.066406 43.34375 29.886719 43.652344 30.320312 C 44.746094 30.550781 52.507812 30.414062 57.277344 30.269531 L 57.304688 31.230469 C 43.527344 31.652344 43.171875 31.230469 43 31.03125 C 42.527344 30.46875 42.257812 29.523438 41.996094 28.609375 C 41.820312 27.996094 41.453125 26.710938 41.171875 26.710938 C 40.503906 26.710938 39.960938 28.828125 39.566406 30.371094 C 38.988281 32.621094 38.441406 34.75 37.042969 34.75 "
                      fillOpacity={1}
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </button>
              <button
                className="splide__arrow splide__arrow--next absolute bottom-0 right-5"
                type="button"
                aria-label="Next slide"
                aria-controls="splide01-track"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={80}
                  zoomAndPan="magnify"
                  viewBox="0 0 60 60"
                  height={80}
                  preserveAspectRatio="xMidYMid meet"
                  version={1.0}
                >
                  <defs>
                    <clipPath id="759e13e11d">
                      <path
                        d="M 51 27 L 58.414062 27 L 58.414062 34 L 51 34 Z M 51 27 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="f57aa55043">
                      <path
                        d="M 3.664062 25.75 L 58 25.75 L 58 34.75 L 3.664062 34.75 Z M 3.664062 25.75 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#759e13e11d)">
                    <path
                      fill="#040606"
                      d="M 52.433594 33.886719 C 52.257812 33.886719 52.085938 33.785156 52.007812 33.609375 C 51.894531 33.371094 51.992188 33.082031 52.230469 32.96875 L 56.765625 30.757812 L 52.164062 28.832031 C 51.921875 28.730469 51.808594 28.449219 51.90625 28.203125 C 52.007812 27.957031 52.285156 27.839844 52.523438 27.941406 L 58.109375 30.277344 C 58.28125 30.347656 58.394531 30.519531 58.402344 30.707031 C 58.40625 30.898438 58.300781 31.074219 58.132812 31.15625 L 52.636719 33.835938 C 52.570312 33.871094 52.5 33.886719 52.433594 33.886719 "
                      fillOpacity={1}
                      fillRule="nonzero"
                    />
                  </g>
                  <g clipPath="url(#f57aa55043)">
                    <path
                      fill="#040606"
                      d="M 37.042969 34.75 C 35.644531 34.75 35.097656 32.621094 34.519531 30.367188 C 34.121094 28.828125 33.578125 26.710938 32.914062 26.710938 C 32.246094 26.710938 31.703125 28.828125 31.304688 30.371094 C 30.730469 32.621094 30.183594 34.75 28.785156 34.75 C 27.390625 34.75 26.84375 32.621094 26.265625 30.371094 C 25.867188 28.828125 25.324219 26.710938 24.65625 26.710938 C 23.988281 26.710938 23.445312 28.828125 23.050781 30.371094 C 22.472656 32.621094 21.925781 34.75 20.53125 34.75 C 19.675781 34.75 19.5 33.824219 19.347656 33.007812 C 19.1875 32.152344 19.007812 31.183594 18.269531 30.691406 C 17.347656 30.53125 8.890625 30.628906 3.6875 30.730469 L 3.667969 29.765625 C 18.144531 29.484375 18.570312 29.75 18.710938 29.835938 C 19.847656 30.539062 20.09375 31.863281 20.277344 32.828125 C 20.339844 33.175781 20.441406 33.703125 20.546875 33.796875 C 21.195312 33.785156 21.738281 31.671875 22.136719 30.125 C 22.714844 27.875 23.261719 25.75 24.65625 25.75 C 26.054688 25.75 26.597656 27.875 27.175781 30.125 C 27.574219 31.671875 28.117188 33.785156 28.785156 33.785156 C 29.453125 33.785156 29.996094 31.671875 30.390625 30.125 C 30.972656 27.875 31.515625 25.75 32.914062 25.75 C 34.308594 25.75 34.851562 27.875 35.433594 30.125 C 35.828125 31.667969 36.375 33.785156 37.042969 33.785156 C 37.710938 33.785156 38.253906 31.671875 38.652344 30.125 C 39.230469 27.875 39.777344 25.75 41.171875 25.75 C 42.164062 25.75 42.523438 27.007812 42.90625 28.34375 C 43.113281 29.066406 43.34375 29.886719 43.652344 30.320312 C 44.746094 30.550781 52.507812 30.414062 57.277344 30.269531 L 57.304688 31.230469 C 43.527344 31.652344 43.171875 31.230469 43 31.03125 C 42.527344 30.46875 42.257812 29.523438 41.996094 28.609375 C 41.820312 27.996094 41.453125 26.710938 41.171875 26.710938 C 40.503906 26.710938 39.960938 28.828125 39.566406 30.371094 C 38.988281 32.621094 38.441406 34.75 37.042969 34.75 "
                      fillOpacity={1}
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </Splide>
      </div>
    </section>
  );
}

export default Store;
