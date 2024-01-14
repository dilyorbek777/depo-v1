import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <>
            <div className="flex items-center justify-center gap-3">
                <Image src={'/images/logo-dark.png'} width={50} height={50} alt='logo' className='hidden dark:block' />
                <Image src={'/images/logo-light.png'} width={50} height={50} alt='logo' className='block dark:hidden' />
                <p className='font-black tracking-wide text-black dark:text-white'>Projects</p>
            </div>
        </>
    )
}
