import React from "react";
import loaderImg from "../../assets/images/loader.gif";
import { useSelector } from "react-redux";

const Loader = () => {
  const loader = useSelector((state) => state.post.loader);
  return (
    <>
      {loader ? (
        <div className="loader-container">
          <div className="loader">
            <img src={loaderImg} alt="loader"></img>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loader;
