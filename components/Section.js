import Image from 'next/image'
import React, { useEffect, useState } from 'react'


export default function Section(props) {

    const [data, setData] = useState([]);


    useEffect(() => {
        setData(props)
    }, [])

    const section1Style = {
        marginTop: 132
    }

    
    return (
        <section style={section1Style} className='sm:mx-81px mx-24px'>
            <div className='sm:grid grid-cols-2'>
                <div>
                    <Image sizes='100vh' src={data.image1} />

                    <div className='mt-81px'>
                        <h1>
                            ACME Drinks
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus services et porttitor quam lectus purus id. Leo.
                        </p>
                        <hr className='w-1/2' />
                        <p>
                            Brand, Strategy, Event, Social
                        </p>
                    </div>

                </div>
                <div className='ml-24px invisible sm:visible'>
                    <Image sizes='100vh' src={data.image2} />
                    <div className='mt-81px'>
                        <h1>
                            ACME Drinks
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus services et porttitor quam lectus purus id. Leo.
                        </p>
                        <hr className='w-1/2' />
                        <p>
                            Brand, Strategy, Event, Social
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
