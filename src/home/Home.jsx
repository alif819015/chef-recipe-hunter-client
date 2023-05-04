/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Card from "./card/Card";
import { ImSpinner } from "react-icons/im";
import img1 from "../../public/car1.jpg";
import img2 from "../../public/car2.jpg";
import img3 from "../../public/car3.webp";
import img4 from "../../public/car4.jpg";
import moment from 'moment';

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <section className="flex items-center justify-center h-screen">
        <ImSpinner className="h-20 w-40 mx-auto text-purple-700 animate-spin"></ImSpinner>
      </section>
    );
  }
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/1400914.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-20">
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <div className="carousel rounded-3xl h-96 w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <hr className="mt-4" />
            <h1 className="mb-5 text-5xl font-bold font-serif mt-6 text-gray-50">
              <div className="my-10 text-indigo-700">
              <p>{moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
               Chinese Chef
            </h1>

            <p className="mb-5">
              <Card></Card>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
