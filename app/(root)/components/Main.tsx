import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Card from './Card'

export default function Main() {
    return (
        <>
            <section className="text-gray-600 body-font" id='projects'>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-100">Popular projects</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">

                        <Card category='Frontend' title='The first post of Depo' id='front1' img='/site/siteheader2.jpg' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam, animi ducimus eius, magnam minus non expedita perspiciatis a deserunt pariatur corporis inventore cupiditate, vero ipsam temporibus ratione. Tempore soluta iure accusantium. Ut officia aperiam tenetur animi voluptas corporis ab vitae tempora nam ducimus odio, esse veniam libero temporibus minus!' />


                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-600">Master Cleanse Reliac Heirloom</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-300">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white dark:bg-stone-900 dark:text-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 ">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-300">Shooting Stars</h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
