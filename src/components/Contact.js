import React from 'react'

export default function Contact() {
  return (
    

    <div class="py-4 lg:py-8 relative">
    <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" class="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
    <div class="xl:mx-auto xl:container relative">
        <div class="flex flex-wrap xl:mx-auto xl:container">
            <div class="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0">
                <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" class="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />

                <div class="w-full flex flex-col items-start xl:justify-start relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                    <div class="w-full 2xl:pl-48 xl:pt-1">
                        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">We’re Here</h1>
                        <div class="w-full md:w-10/12 mt-3">
                            <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                            <div class="mt-4 md:mt-8">
                                <h2 class="text-sm md:text-base text-purple-700 font-semibold">Address</h2>
                                <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office: Corpaza, 21/551B, Kalamassery, Seaport-Airport Rd.,682021,Ernakulam Dist.,Kerala,India </h2>
                            </div>
                            <div class="mt-4 md:mt-8">
                                <h2 class="text-sm md:text-base text-purple-700 font-semibold">Contact</h2>
                                <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+91 89 21 664 238 </h2>
                                <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+91 70 34 289 684 </h2>
                                

                            </div>
                            <div class="mt-4 md:mt-8">
                                <h2 class="text-sm md:text-base text-purple-700 font-semibold">Email</h2>

                                <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">hello@corpaza.com</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 xl:pt-10 lg:pl-24">
                <div class="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                    <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-purple-700">Let’s Talk</h1>
                    <div class="w-full 2xl:w-8/12 mt-3" role="form">
                        <h2 class="text-gray-800 dark:text-white text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                        <div class="mt-4 md:mt-8">
                            <p class="text-gray-800 dark:text-white text-base font-medium">Name</p>
                            <input class="mt-3 text-base dark:bg-gray-800 border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800 dark:text-white" type="text" placeholder="Justin Timberlake" aria-label="enter your name input" />
                        </div>
                        <div class="mt-4 md:mt-8">
                            <p class="text-gray-800 dark:text-white text-base font-medium">Email Address</p>
                            <input class="mt-3 text-base dark:bg-gray-800 border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800 dark:text-white" type="email" placeholder="example@mail.com" aria-label="enter your email input" />
                        </div>
                        <div class="mt-4 md:mt-8">
                            <p class="text-gray-800 dark:text-white text-base font-medium">Message</p>
                            <textarea class="mt-3 text-base dark:bg-gray-800 border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800 dark:text-white" type="text" placeholder="Write us something..." aria-label="enter your message input"></textarea>
                        </div>
                        <div class="py-5">
                            <button class="py-3 md:py-5 dark:bg-white dark:text-gray-800 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



  )
}
