import React, { FC } from "react";
import Navbar from "../../components/Navbar";
import image from "../../assets/home.jpg";
import SearchBox from "../../components/SearchBox";
import "../../styles/home.scss";

const HomePage: FC = () => {
  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          backgroundOrigin: "content-box",
        //   backgroundAttachment: "fixed",
        }}
      >
        <Navbar />

        <SearchBox />
      </div>
    </>
  );
};

export default HomePage;
