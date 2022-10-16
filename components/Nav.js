import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../img/logo.png'
import { motion } from 'framer-motion'
import menuIcon from '../img/menu-icon.svg'
import Menu from './Menu'
import Link from 'next/link'

export default function Nav() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className='flex  z-50 justify-between  items-center py-10 px-24px md:mx-81px pt-24px'>
                <div className='cursor-pointer'>
                    {!showMenu && (
                        <Link href={'/'}>
                            <Image src={logo} />
                        </Link>
                    )}
                </div>
                <div className='cursor-pointer z-30 float-right'>
                    <motion.div
                        whileTap={{
                            rotate: 135
                        }}
                        animate={{
                            rotate: showMenu ? 135 : 0
                        }}
                    >
                        <Image  onClick={() => {
                            showMenu ? setShowMenu(false) : setShowMenu(true)
                        }} src={menuIcon} />
                    </motion.div>
                </div>
            </div>

            {showMenu && <Menu />}

        </>
    )
}
