"use client"

import Image from "next/image"
import { useState } from "react"

export default function ImageHeader({
    url, alt
}:
    {
        url: string,
        alt: string
    }) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            <Image priority src={url} width={1000} height={0} alt={alt} className={`object-contain duration-700 ease-in-out w-full group-hover:opacity-75 ${isLoading
                ? ' blur-2xl grayscale'
                : ' blur-0 grayscale-0'
                }}`}
                onLoad={() => setIsLoading(false)} />


        </>
    )
}
