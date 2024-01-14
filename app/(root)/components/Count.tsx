import { BadgeCheck, Code2, Download, Rocket, Users } from 'lucide-react'

import React from 'react'

let info = [
    { icon: <BadgeCheck size={50} color="#6366f1" />, title: "Complated projects", count: 510 },
    { icon: <Download size={50} color="#6366f1" />, title: "Downloads", count: 350 },
    { icon: <Code2 size={50} color="#6366f1" />, title: "Coding lessons", count: 30 },
    { icon: <Rocket size={50} color="#6366f1" />, title: "Developers", count: 210 },
]

export default function Count() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    {info.map(inf => (
                        <div className="flex flex-col items-center justify-center gap-3 p-4 sm:w-1/4 w-1/2" key={inf.title}>
                            {inf.icon}
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-gray-200">{inf.count}+</h2>
                            <p className="leading-relaxed dark:text-gray-200 font-bold">{inf.title}</p>
                        </div>
                    ))}
                    {/* <div className="flex flex-col items-center justify-center gap-3 p-4 sm:w-1/4 w-1/2">
                        <Users />
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-gray-200">20+</h2>
                        <p className="leading-relaxed dark:text-blue-600 font-bold">Subscribes</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-4 sm:w-1/4 w-1/2">
                        <Users />
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-gray-200">350+</h2>
                        <p className="leading-relaxed dark:text-blue-600 font-bold">Downloads</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-4 sm:w-1/4 w-1/2">
                        <Users />
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 dark:text-gray-200">40+</h2>
                        <p className="leading-relaxed dark:text-blue-600 font-bold">Projects</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
