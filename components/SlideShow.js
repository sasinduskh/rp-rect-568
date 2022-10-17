import React, { useState } from "react"

import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const  SlideShow = () => {


    const [nowIndexImg, setNowIndexImg] = useState(0);

    const images = [
        "https://northlion.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.38186d03.png&w=1200&q=75",
        "https://www.northliondigital.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs87sg3k3%2Fproduction%2Feb351c1dba4df4ee292544d0681d43370a8a8682-1920x640.jpg&w=1920&q=75",
        "https://northlion.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.38186d03.png&w=1200&q=75",
        "https://northlion.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.38186d03.png&w=1200&q=75",
    ];

    const zoomInProperties = {
        indicators: true,
        scale: 1.01,
        duration: 1000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>

            </div>
        ),
        nextArrow: (
            <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>

            </div>
        ),
    };



    return (
        <div>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (

                    
                    <div   style={{
                        height: '514px'
                        
                    }} key={index} className="flex justify-center w-full ">
                        <div className="w-full sm:mx-81px mx-24px  " style={{
                            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${each}), #D9D9D9`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="place-items-center p-10" style={{
                                
                            }}>

                                <h1 className="flex text-center justify-center mt-40 text-36px font-prompt font-bold">
                                    ACME Drinks
                                </h1>
                                <div class="grid grid-cols-3 gap-4 mx-10" style={{marginTop: 300}}>
                                    <div class="col-span-2  w-20px"> <p>
                                        {`${index == 0 ? 1 : index + 1}/${images.length}`}
                                    </p></div>

                                    <div class="invisible lg:visible">
                                        <div className="">
                                            <div className=" float-right">
                                                {images.map((image, i) => (
                                                    <img
                                                        key={image.length}
                                                        className="inline-block ml-2 cursor-pointer"
                                                        style={{
                                                            width: 60,
                                                            border: index == i ? '3px solid white' : ''
                                                        }}
                                                        src={image} />
                                                ))}


                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>
                ))}
            </Zoom>


        </div>
    )

}

export default SlideShow