import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselBanner = () => {
    return (
        <div className="custom-carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1346160635/vector/happy-diwali-vector-illustration-festive-diwali-card-design-template-with-lamp-golden-lights.jpg?s=612x612&w=0&k=20&c=RRLE16dy7vyT0KzMhqYfsfUEESMk3ng7mECF6qtTvLQ="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>HappyDiwali</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/Keema Briyani.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Today's Offer</h3>
                        <p>"Dive into a delightful mix of spices and flavors. Enjoy our exclusive Thali Plate at a special price today!"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/varieties.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Explore Our Varieties</h3>
                        <p>"Discover a world of flavors with our diverse menu offerings. From tantalizing appetizers to rich and hearty main courses, each dish is crafted to perfection using authentic ingredients and traditional techniques. Whether you're craving spicy curries, fresh salads, or delectable desserts, our selection promises to satisfy every palate. Join us today and embark on a culinary journey that celebrates the richness of global cuisines!"</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBanner;