/* eslint-disable no-unused-vars */
import React, { useContext} from "react";
import { AuthContext } from "../auth/AuthProvider";
import Card from "./card/Card";
import { ImSpinner } from "react-icons/im";

const Home = () => {
  const { user ,loading} = useContext(AuthContext);
  if(loading){
    return   <section className="flex items-center justify-center h-screen">
        <ImSpinner className="h-20 w-40 mx-auto text-purple-700 animate-spin"></ImSpinner>

  </section>
}
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/src/assets/vegetables-set-left-black-slate.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold">Chef</h1>
            
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
