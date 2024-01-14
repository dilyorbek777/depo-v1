"use client"
import { Dialog, Transition } from '@headlessui/react'
import { ArrowLeft, MoveUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'

export default function MyModal() {
    let [isOpen, setIsOpen] = useState(true)

    const router = useRouter()
    function closeModal() {
        setIsOpen(false)
    }

   

    return (
        <>
           

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative  flex items-center justify-center w-full bg-black/50 z-50" onClose={() => {
                    setIsOpen(false)
                    router.back()
                }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25 flex items-center justify-center" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-9/12 transform overflow-hidden rounded-2xl bg-white dark:bg-black dark:shadow-slate-100 p-6 text-left align-middle shadow-sm transition-all h-[calc(100vh-180px)]">

                                    <section className="text-gray-600 body-font w-full dark:text-gray-200">
                                        <div className="mx-auto flex px-5 py-2 items-center justify-center flex-col">
                                            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                                                <div className="text-center lg:w-2/3 w-full">
                                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Microdosing synth tattooed vexillologist</h1>
                                                    <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                                                    <div className="flex justify-center">
                                                        <button className="flex items-center justify-center gap-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><ArrowLeft /> Back</button>
                                                        <button className="ml-4 flex items-center justify-center gap-2 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">More details <MoveUpRight /></button>
                                                    </div>
                                                </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
