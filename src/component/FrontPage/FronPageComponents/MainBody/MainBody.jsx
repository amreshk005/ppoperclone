import React from "react";
import style from "./MainBody.module.css";

const product = [
  {
    title: "Business Solutions for iPad & iPhone",
    des: "Our flagship range of powered business solutions keeps your iPad securely mounted and charged at al times.",
    button_des: "Shop Business",
    image: "/images/primary-category-1.jpg",
  },
  {
    title: "iPad Cases & Mounts",
    des: "Expand the functionality of your iPad in every walk of life by connecting to a range of stands and mounts.",
    button_des: "Shop iPad",
    image: "/images/primary-category-2.jpg",
  },
  {
    title: "Wireless Charging",
    des: "Our first ever wireless charger, featuring a tempered glass surface and an anodised aluminium base.",
    button_des: "Shop Power Uno",
    image: "/images/primary-category-3.jpg",
  },
];

const Main = () => {
  return (
    <div className={style["Main"] + " row m-0"}>
      <div className="row m-0 justify-content-around align-items-center">
        {product.map((e) => {
          return (
            <div class="card col-3 p-0 border-0" style={{ height: "80%" }}>
              <img src={e.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "15.9px", fontWeight: "bold" }}>
                  {e.title}
                </h5>
                <p class="card-text" style={{ fontSize: "14px" }}>
                  {e.des}
                </p>
                <a href="#" class="btn btn-info" style={{ width: "10rem" }}>
                  {e.button_des}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
