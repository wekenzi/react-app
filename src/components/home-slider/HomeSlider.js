import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './HomeSlider.css';
const HomeSlider = () => {
    return (
    <Carousel stopOnHover startOnLeave autoPlay showThumbs={false} infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <i className="fa fa-angle-left carousel-navs" onClick={onClickHandler} title={label} style={{left: '5%'}}>
                </i>
            )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <i className="fa fa-angle-right carousel-navs" onClick={onClickHandler} title={label} style={{right: '5%'}}>
                </i>
            )
        }
    >
        <div>
            <img alt="" src="https://picsum.photos/640/360" />
        </div>
        <div>
            <img alt="" src="https://picsum.photos/640/360" />
        </div>
        <div>
            <img alt="" src="https://picsum.photos/640/360" />
        </div>
    </Carousel>
    )
}

export default HomeSlider;
