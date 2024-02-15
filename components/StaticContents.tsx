import Image from "next/image"
import Link from "next/link"

import { featuresList, existingProblems, showcaseItems, idmsForCitizen, idmsForGovernment } from "@/content/data"


export function StaticContents() {
  return (
    <>
      <section className="lg:relative">
        <div className="font-archivo mx-auto w-full max-w-screen-xl grid grid-cols-12 pt-12 pb-20 text-center lg:text-left custom-bg">
          <div className="sm:px-8 xl:pr-0 mt-10 col-span-12 lg:col-span-6">
            <h1 className="mt-10 text-2xl md:text-4xl mr-4 font-headings font-bold tracking-tight text-primary lg:text-4xl xl:text-5xl flex flex-col leading-relax">
              Intervening Government’s
            </h1>
            <h1 className="mb-2 mt-4 text-2xl md:text-4xl mr-8 font-headings font-bold tracking-tight text-teal-600 lg:text-4xl xl:text-5xl flex flex-col leading-relax">
              Data Management
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-4 md:max-w-3xl">
              Integrated Data Management System (IDMS)
            </p>
            <div className="mt-8 ">
              <div>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/showcases">
                    <span
                      className="block w-36 mr-4 flex justify-center rounded-md bg-teal-400 px-4 py-3 font-medium text-slate-50 shadow hover:text-slate-800"
                    > 
                      Showcases
                    </span>
                  </Link>
                  <Link href="/about-idms">
                    <span
                      className="block w-36 flex justify-center rounded-md bg-neutral-900 px-4 py-3 font-medium text-slate-50 shadow hover:bg-neutral-800 hover:text-slate "
                    >
                      Learn More
                    </span>
                  </Link>
                </div>
              <div 
              className="mt-8 flex items-center text-gray-500 justify-center lg:justify-start cursor-pointer"
              onClick={() => window.open('https://ckan.org/', '_self')}> <p className="mr-1">Powered by</p> <a href="https://ckan.org/"><img src="/images/ckan.svg" alt="ckan logo" className="h-7" /></a></div>
              </div>

            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mx-auto lg:mx-0">
            <div className="mt-12">
              <img className="inset-r-0" src="/images/hero-img.svg" alt="intervening government data management" />
            </div>
          </div>
        </div>
        {/* banner */}
        <div className="relative md:w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 2xl:max-w-screen-xl h-max rounded-2xl p-8 my-10 mx-auto">
          <div className="bg-neutral-200 rounded-xl shadow-lg">
            <div className="bg-teal-200 -translate-y-3 translate-x-3 rounded-xl rounded-br-3xl px-12 py-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Integrated Data Management System (IDMS)
              </h2>
              <p className="mt-2 text-gray-600 text-lg mb-4">
                IDMS is a comprehensive and interoperable digital platform meticulously designed to facilitate seamless inter-governmental data sharing and the efficient dissemination of valuable data in the public domain, adhering to the FAIR principles.
                IDMS ensures the fairness, accessibility, interoperability, and reusability of data, providing a robust framework for secure and transparent data management.
              </p>
              <Link href="/about-idms" >
                <span className="text-teal-600 hover:text-teal-700 font-medium block mt-4">
                  Learn More →
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div>
        </div>
      </section >

      {/* Existing Problem Section */}
      <div className="mx-auto w-full max-w-screen-xl pt-16 pb-20 px-8">
        <div className="flex  items-center">
          <span className="relative inline-block font-semibold text-3xl text-black overflow-hidden mx-auto">
            <span className="heading-highlight font-headings">Existing Problems</span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" >
          {existingProblems.map((item, index) => (
            <div key={index} className="border-teal-300 border-2 px-8 py-8 hover:bg-teal-200 shadow-md cursor-default">
              <div className="flex">
                <img src={item.imageSrc} width={item.imageWidth} />
                <div className="my-auto">
                  <h2 className="text-xl font-bold ml-4">{item.title}</h2>
                </div>
              </div>
              <p className="mt-4">
                {item.body}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* IDMS Features */}
      <div className="bg-gray-100 " id="features">
        <div className="mx-auto w-full max-w-screen-xl pt-16 pb-20 px-8">
          <div className="flex  items-center">
            <span className="relative inline-block font-semibold text-3xl text-black overflow-hidden mx-auto">
              <span className=" heading-highlight relative font-headings z-10">Features</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16" >
            {featuresList.map((item, index) => (
              <div key={index}>
                <img src={item.imageSrc} alt={item.alt} className="h-20" />
                <h2 className="text-xl font-bold mt-4 mb-2">{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IDMS For Section */}
      <div className="mx-auto w-full max-w-screen-xl pt-16 pb-20 px-8" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-80 gap-y-40 mt-10 idms-for-bg">
          <div>
            <img src="/images/government.svg" className="h-40 cursor-pointer"  alt="IDMS for government" />
            <h2 className="text-2xl my-8 font-bold">IDMS for Government</h2>
            {idmsForGovernment.map((item,index)=>(
            <div key={index} className="flex mb-3">
              <Image src={item.img} height={24} width={24} alt={item.text} />
              <p className="text-lg ml-4">{item.text}</p>
            </div>
            ))}
          </div>

          {/* IDMS for citizen */}
          <div>
            <img src="/images/public.svg" className="h-40 cursor-pointer" alt="IDMS for government" />
            <h2 className="text-2xl my-8 font-bold">IDMS for Citizens</h2>
            {idmsForCitizen.map((item,index)=>(
            <div key={index} className="flex mb-3">
              <Image src={item.img} height={24} width={24} alt={item.text} />
              <p className="text-lg ml-4">{item.text}</p>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* Showcases */}
      <div className="bg-gray-100 h-auto">
        <div className="mt-8 showcase"></div>
        <div className="mx-auto w-full max-w-screen-xl pt-16 pb-24 px-8">
          <div className="flex  items-center">
            <span className="relative inline-block font-semibold text-3xl text-black overflow-hidden mx-auto">
              <span className=" heading-highlight relative font-headings z-10">Showcases</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {showcaseItems.map((item,index)=>(
            <div key={index} className="relative border-teal-300 border-2 bg-white hover:bg-teal-200 py-4 px-8 cursor-default">
              <h2 className="text-lg font-bold mb-4">{item.name}</h2>
              <a target="_blank" href={item.href}><p className="absolute bottom-2 text-teal-600" >Visit →</p></a>
            </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className=" px-8 flex justify-end">
            <Link href="/showcases">
              <span
                className="bottom-12 relative block w-36 mr-0 flex justify-center rounded-md text-primary bg-white px-4 py-3 font-medium shadow hover:bg-teal-200"
              >
                See All
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
