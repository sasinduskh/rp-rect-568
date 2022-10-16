import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import section1img1 from '../img/home/section-1-1.png'
import section1img2 from '../img/home/section-1-2.png'
import section2img1 from '../img/home/section-2-1.png'
import section2img2 from '../img/home/section-2-2.png'
import section3img1 from '../img/home/section-3-1.png'
import section3img2 from '../img/home/section-3-2.png'
import Section from './Section';

export default function HomeSections() {

    const [show, setShow] = useState('');
    const services = [
        {
            title: 'corporate branding',
            path: '#'
        },
        {
            title: 'logos',
            path: '#'
        },
        {
            title: 'ui / ux',
            path: '#'
        },
        {
            title: 'web development',
            path: '#'
        },

    ];

    const brands = [
        {
            title: 'Deloitte',
            logo: ''
        },
        {
            title: 'Deloitte',
            logo: ''
        },
        {
            title: 'Deloitte',
            logo: ''
        },
        {
            title: 'Deloitte',
            logo: ''
        },
        {
            title: 'Deloitte',
            logo: ''
        },
        {
            title: 'Deloitte',
            logo: ''
        },
        {
            title: 'Deloitte',
            logo: ''
        },
        {
            title: 'Deloitte',
            logo: ''
        },
        {
            title: 'Deloitte',
            logo: ''
        },

    ]
    const section1Style = {
        marginTop: 132
    }

    return (
        <div className='sm:mx-81px mx-24px'>
            <div >
                <div class="lg:grid lg:grid-cols-3 lg:gap-4">

                    <div class="col-span-2 sm:w-585px w-full">
                        <div >
                            <h1 className='text-40px font-prompt font-bold'>
                                About us
                            </h1>
                            <p style={{ color: show ? '#4F4F4F' : '#ffff' }} className='text-22px'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus
                                <strong>
                                    <span style={{ color: show == 'service' && '#ffff', cursor: 'pointer' }}
                                        onMouseMove={() => setShow('service')}
                                        onMouseLeave={() => setShow('')}
                                    > services </span>
                                </strong>
                                et porttitor quam lectus purus id. Leo, amet blandit morbi aliquam diam pretium imperdiet nisl. Gravida tortor pharetra adipiscing sed. Cras cras sed
                                <span style={{ color: show == 'brand' && '#ffff', cursor: 'pointer' }}
                                    onMouseMove={() => setShow('brand')}
                                    onMouseLeave={() => setShow('')}
                                > barand </span>
                                arcu tellus sed vel neque, nunc. Pharetra gravida elit eu diam.
                            </p>
                        </div>
                    </div>
                    <div class="invisible sm:visible">
                        {show == 'service' && (
                            <div >
                                {services.map((service) => (
                                    <div >
                                        <h1>{service.title}</h1>
                                    </div>
                                ))}
                            </div>
                        )}
                        {show == 'brand' && (
                            <div >
                                {brands.map((brand) => (
                                    <div>
                                        <h1>{brand.title}</h1>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>


            <section style={section1Style} className=''>
                <div className='sm:grid sm:grid-cols-2'>
                    <div>
                        <Image sizes='100vh' src={section1img1} />

                        <div className='mt-81px'>
                            <h1 className='text-36px font-bold font-prompt'>
                                ACME Drinks
                            </h1>
                            <p className='text-18px font-openSans lg:w-1/2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus services et porttitor quam lectus purus id. Leo.
                            </p>
                            <hr className='w-2/5 mt-24px' />
                            <p className='mt-24px'>
                                Brand, Strategy, Event, Social
                            </p>
                        </div>

                    </div>
                    <div className='ml-24px invisible sm:visible'>
                        <Image sizes='100vh' src={section1img2} />
                        <div className='mt-81px'>
                            <h1 className='text-36px font-bold font-prompt'>
                                ACME Drinks
                            </h1>
                            <p className='text-18px font-openSans lg:w-1/2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus services et porttitor quam lectus purus id. Leo.
                            </p>
                            <hr className='w-2/5 mt-24px' />
                            <p className='mt-24px'>
                                Brand, Strategy, Event, Social
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={section1Style} className=''>
                <div className='sm:grid sm:grid-cols-2 '>
                    <div style={{ marginTop: 132 }} className='lg:mr-223px mr-24px '>
                        <Image sizes='100vh' src={section2img1} />

                        <div className='mt-81px'>
                            <h1 className='text-36px font-bold font-prompt'>
                                ACME Drinks
                            </h1>
                            <p className='text-18px font-openSans lg:w-1/2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus services et porttitor quam lectus purus id. Leo.
                            </p>
                            <hr className='w-2/5 mt-24px' />
                            <p className='mt-24px'>
                                Brand, Strategy, Event, Social
                            </p>
                        </div>
                    </div>
                    <div style={{ marginTop: -100 }} className='  invisible sm:visible'>
                        <Image sizes='100vh' src={section2img2} />
                        <div className='mt-81px'>
                            <h1 className='text-36px font-bold font-prompt'>
                                ACME Drinks
                            </h1>
                            <p className='text-18px font-openSans lg:w-1/2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus services et porttitor quam lectus purus id. Leo.
                            </p>
                            <hr className='w-2/5 mt-24px' />
                            <p className='mt-24px'>
                                Brand, Strategy, Event, Social
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ marginTop: 132 }} className=''>
                <div className='sm:grid sm:grid-cols-2 '>
                    <div className='mr-24px'>
                        <Image sizes='100vh' src={section3img1} />


                    </div>
                    <div className='w-490px md:w-10/12 invisible sm:visible mt-114px'>
                        <Image className='bottom-0  ' sizes='100vh' src={section3img2} />

                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='mt-81px'>
                        <h1 className='text-36px font-bold font-prompt'>
                            ACME Drinks
                        </h1>
                        <p className='text-18px font-openSans lg:w-1/2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus services et porttitor quam lectus purus id. Leo.
                        </p>
                        <hr className='w-2/5 mt-24px' />
                        <p className='mt-24px'>
                            Brand, Strategy, Event, Social
                        </p>
                    </div>
                    <div className='mt-81px invisible sm:visible'>
                        <h1 className='text-36px font-bold font-prompt'>
                            ACME Drinks
                        </h1>
                        <p className='text-18px font-openSans lg:w-1/2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor purus services et porttitor quam lectus purus id. Leo.
                        </p>
                        <hr className='w-2/5 mt-24px' />
                        <p className='mt-24px'>
                            Brand, Strategy, Event, Social
                        </p>
                    </div>
                </div>
            </section>



            <section style={{ marginTop: 100 }}>
                <Link href={'/seemore-work'}>
                    <h1 className='text-center text-40px lg:text-60px font-prompt font-bold cursor-pointer'><u>see more work</u></h1>
                </Link>

                <div style={{marginTop: 300}}>
                    <h1 className=' font-prompt lg:text-9xl text-36px tracking-0.22 text-center font-bold uppercase'>work with us</h1>
                </div>

                <div style={{marginTop: 87}}>
                    <h1 className='text-center text-50px font-bold font-prompt tracking-1.4 text-blue'>hiya@northliondigital.com</h1>
                </div>
            </section>

        </div>
    )
}
