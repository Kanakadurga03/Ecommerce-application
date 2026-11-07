import React, { Component } from "react";
import SliderImport from "react-slick";

const Slider = SliderImport.default ?? SliderImport;

function Slides() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    };

    const products = [
        {
            name: "boAt Rockerz 255",
            image: "boat255r-1.png",
            price: "₹899",
            discount: "₹2,990"
        },
        {
            name: "JBL Endurance Run Sports",
            image: "jbl-endu-1.png",
            price: "₹999",
            discount: "₹1,599"
        },
        {
            name: "boAt Airdopes 203",
            image: "boat203-1.png",
            price: "₹1,074",
            discount: "₹3,999"
        },
        {
            name: "boAt Rockerz 518",
            image: "boat518-1.png",
            price: "₹1,299",
            discount: "₹3,990"
        },
        {
            name: "JBL Tune 760NC",
            image: "jbl760nc-1.png",
            price: "₹5,999",
            discount: "₹7,999"
        }
    ];

    const loopProducts = [
        ...products,
        ...products,
        ...products
    ];

    return (
        <div className="featured-carousel">

            <h2>Featured Products</h2>

            <Slider {...settings}>

                {loopProducts.map((product, index) => (
                    <div key={index}>
                        <div className="product-card">

                            <h3 className="product-name">{product.name}</h3>
                            <img src={product.image} alt={product.name} />
                            <h5>{product.price} <span> <del> {product.discount}</del></span></h5>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Slides;