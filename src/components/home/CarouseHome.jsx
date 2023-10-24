import React, { Component } from "react";
import { Image, Carousel } from "antd";

class CarouseHome extends Component {
  render() {
    return (
      <>
        <Carousel autoplay>
          <div>
            <Image src="https://yentunhien.vn/wp-content/uploads/2022/06/banner-yen-sao-yen-ngoc-03-01-pc.jpg"></Image>
          </div>
          <div>
            <Image src="https://yentunhien.vn/wp-content/uploads/2022/06/banner-yen-sao-yen-ngoc-01-pc.jpg"></Image>
          </div>
          <div>
            <Image src="https://yentunhien.vn/wp-content/uploads/2022/06/banner-yen-sao-yen-ngoc-02-01-pc.jpg"></Image>
          </div>
        </Carousel>
      </>
    );
  }
}

export default CarouseHome;
