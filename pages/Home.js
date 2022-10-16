import React from 'react'
import HomeSections from '../components/HomeSections'
import Section from '../components/Section'
import SlideShow from '../components/SlideShow'

import section1Img1 from '../img/home/section-1-1.png'
import section1Img2 from '../img/home/section-1-2.png'
import section2Img1 from '../img/home/section-2-1.png'
import section2Img2 from '../img/home/section-2-2.png'

export default function HomePage() {


    const data = {
        image1: section1Img1,
        image2: section1Img2
    }

    return (
        <div style={{ width: '100%' }}>
            <div className='text-center'>
                <h1 className='home-header-title  text-5xl'>
                    NORTH LION
                </h1>
            </div>

            <SlideShow />

            <HomeSections />


        </div>
    )
}
