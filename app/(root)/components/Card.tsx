import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ImageHeader from './ImageHeader'

export default function Card({ id, title, category, text, img }: {
    id: string,
    title: string,
    category: string,
    text: string,
    img: string,
}) {
    return (
        <Link href={`/projects/${id}`} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg dark:bg-transparent dark:border-2 dark:border-gray-200">
                <ImageHeader alt={title} url={img}/>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font  my-3">{category}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 dark:text-white">{title}</h2>
                <p className="leading-relaxed text-base dark:text-gray-200">{text.slice(0,70)}</p>
                <Button className='dark:text-white border-2 my-2 flex items-center justify-center gap-3' variant="ghost">Open <ArrowRight /></Button>
            </div>
        </Link>
    )
}
