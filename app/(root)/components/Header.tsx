import { Button } from '@/components/ui/button'
import { Compass, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ImageHeader from './ImageHeader'

export default function Header() {
    return (
        <section className="text-gray-400  body-font h-screen flex items-center justify-center">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center " >
                    <h1 className="title-font sm:text-6xl text-3xl mb-4  text-black font-bold dark:text-white">Hi there👋, <br /> Welcome to DEPO 
                    </h1>
                    <p className="mb-8 leading-relaxed">Special web site for manifesting the projects, web apps by <Link href='/' className='text-sky-400'>Dilyorbek Asfandiyorov</Link>
                        <br />
                        explore the perfect apps, web sites and fresh designs
                    </p>
                    <div className="flex justify-center gap-5">
                        <Link href={'/'}>
                            <Button className="rounded-md shadow-md shadow-sky-400 text-white bg-sky-400 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  text-lg flex gap-4 items-center justify-center"><Phone /> Contact</Button>
                        </Link>
                        <Link href={'#projects'}>
                            <Button className=" dark:text-white shadow-md shadow-sky-400 border-sky-400 border-2 py-2 px-6 focus:outline-none  rounded-md text-lg flex gap-4 items-center justify-center" variant={'ghost'}><Compass /> Explore</Button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-hidden">
                    <ImageHeader alt='Top designs and apps' url='/site/siteheader2.jpg' />
                </div>
            </div>
        </section>
    )
}
