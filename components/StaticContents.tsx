import Image from "next/image"
import Link from "next/link"

export function StaticContents() {
  return (
    <>
      <section className="lg:relative">
        <div className=" font-archivo mx-auto w-full max-w-screen-xl pt-16 pb-20 text-center lg:text-left custom-bg">
          <div className="sm:px-8 lg:w-3/5 xl:pr-8">
            <h1 className="text-2xl mr-8 font-headings font-bold tracking-tight text-primary xl:text-5xl flex flex-col leading-relax">
              Intervening Government’s Data Management
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-8 md:max-w-3xl">
              Integrated Data Management System (IDMS)
            </p>
            <div className="mt-10 sm:mt-12">
              <div>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/showcases">
                  <span
                    className="block w-36 mr-8 flex justify-center rounded-md bg-teal-400 px-4 py-3 font-medium text-slate-50 shadow hover:text-slate-800"
                  >
                    Showcase
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
              </div>

            </div>
          </div>
        </div>
        <div className="max-w-screen-sm">
          <div className="h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img className="inset-0 md:ml-10  h-96 object-fit" src="/images/hero-img.svg" alt="" />
          </div>
        </div>
        {/* banner */}
        <div className="relative 2xl:max-w-screen-xl h-max rounded-2xl p-8 md:w-3/5 mt-20 mx-auto mb-20">
          <div className="bg-neutral-200 rounded-xl shadow-lg">
            <div className="bg-teal-100 -translate-y-3 translate-x-3 rounded-xl rounded-br-3xl px-6 py-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Integrated Data Management System (IDMS)
              </h2>
              <p className="mt-2 text-gray-600 text-lg mb-4">
                IDMS is a comprehensive and interoperable digital platform meticulously designed to facilitate seamless inter-governmental data sharing and the efficient dissemination of valuable data in the public domain, adhering to the FAIR principles.
              </p>
              <Link href="#" >
              <span className="text-teal-600 hover:text-teal-700 font-medium block mt-4">
                Learn More →
              </span>
              </Link>
            </div>
          </div>
        </div>

        <div>
        </div>
        {/* Existing Problem Section */}
        <div className="mx-auto w-full max-w-screen-xl pt-16 pb-20 px-8">
          <div className="flex  items-center">
            <span className="relative inline-block font-semibold text-3xl text-black overflow-hidden mx-auto">
              <span className="heading-highlight font-headings">Existing Problems</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" >
            <div className="border-teal-300 border-2 px-8 py-8">
              <div className="flex">
                <img src="/images/many_systems.png" height="50px" width="50px" />
                <div className="my-auto">
                  <h2 className="text-xl font-bold ml-4">Many Digital Systems</h2>
                </div>
              </div>
              <p className="mt-4">
                Digital systems generate valuable data for governments, public institutions, and citizens; however, the lack of a proper mechanism hampers their effective utilization.
              </p>
            </div>
            <div className="border-teal-300 border-2 px-8 py-8">
              <div className="flex">
                <img src="/images/silos.png" height="50px" width="50px" />
                <div className="my-auto">
                  <h2 className="text-xl font-bold ml-4">Data Silos</h2>
                </div>
              </div>
              <p className="mt-4">
                The absence of interconnected systems leads to repetitive data input in individual systems, creating isolated data silos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10" >
            <div className="border-teal-300 border-2 px-8 py-8">
              <div className="flex">
                <img src="/images/standard.png" width="36px" />
                <div className="flex my-auto">
                  <h2 className="text-xl font-bold ml-4">Lack of Data Standarization</h2>
                </div>
              </div>
              <p className="mt-4">
                Datasets stored across different systems result in varied data and a lack of standardization.
              </p>
            </div>
            <div className="border-teal-300 border-2 px-8 py-8">
              <div className="flex">
                <img src="/images/complex_data.png" width="36x" />
                <div className="my-auto">
                  <h2 className="text-xl font-bold ml-4">Complex Data Utilization Mechanism</h2>
                </div>
              </div>
              <p className="mt-4">
                Current systems are inefficient in generating and providing data of public interest, contributing to a complex data utilization process.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* IDMS Features */}
      <div className="bg-gray-100 " id="features">
        <div className="mx-auto w-full max-w-screen-xl pt-16 pb-20 px-8">
          <div className="flex  items-center">
            <span className="relative inline-block font-semibold text-3xl text-black overflow-hidden mx-auto">
              <span className=" heading-highlight relative font-headings z-10">IDMS Features</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16" >
            <div>
              <img src="/images/features/datastore.svg" alt="datastore" className="w-24" />
              <h2 className="text-xl font-bold mt-4 mb-2">Comprehensive Datastore</h2>
              <p>Provides comprehensive datastore features to enhance the current data management mechanisms</p>
            </div>
            <div>
              <img src="/images/features/interactive.svg" alt="datastore" width="80px" />
              <h2 className="text-xl font-bold mt-4 mb-2">Interactive Visualization</h2>
              <p>Enables interactive visualization and dashboards using stored datasets.</p>
            </div>
            <div>
              <img src="/images/features/themeable.svg" alt="datastore" width="80px" />
              <h2 className="text-xl font-bold mt-4 mb-2">Themeable</h2>
              <p>Fully customizable to align with specific brand requirements.</p>
            </div>
            <div>
              <img src="/images/features/publish.svg" alt="datastore" width="80px" />
              <h2 className="text-xl font-bold mt-4 mb-2">Publish and Manage Data</h2>
              <p>User-friendly web interface for publishers and curators to effortlessly register, update and manage datasets.</p>
            </div>
            <div>
              <img src="/images/features/share.svg" alt="datastore" width="80px" />
              <h2 className="text-xl font-bold mt-4 mb-2">Share and Integrate</h2>
              <p>Facilitates easy access and sharing of datasets with the general public for utilization and integration.</p>
            </div>
            <div>
              <img src="/images/features/search.svg" alt="datastore" width="80px" />
              <h2 className="text-xl font-bold mt-4 mb-2">Search and Discovery</h2>
              <p>Offers a comprehensive search experience with keyword search and filtering based on tags and categories.</p>
            </div>
            <div>
              <img src="/images/features/api.svg" alt="datastore" width="80px" />
              <h2 className="text-xl font-bold mt-4 mb-2">Data API</h2>
              <p>Simplifies integration for all users, allowing external code to seamlessly utilize the data API.</p>
            </div>
            <div>
              <img src="/images/features/metadata.svg" alt="datastore" width="80px" />
              <h2 className="text-xl font-bold mt-4 mb-2">Metadata</h2>
              <p>Automatically includes a robust set of metadata for each dataset, with the flexibility to add additional attributes as needed.</p>
            </div>
            <div>
              <img src="/images/features/geodata.svg" alt="datastore" width="80px" />
              <h2 className="text-xl font-bold mt-4 mb-2">Geospatial</h2>
              <p>Encompassing advanced geospatial features that include data preview, search, and discovery.</p>
            </div>
          </div>
        </div>
      </div>

      {/* IDMS For Section */}
      <div className="mx-auto w-full max-w-screen-xl pt-16 pb-20 px-8" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-80 gap-y-40 mt-10 idms-for-bg">
          <div>
            <Image src="/images/idms_for/for_government.svg" height={206} width={350} alt="IDMS for government" />
            <h2 className="text-2xl my-8 font-bold">IDMS for Government</h2>
            <div className="flex mb-3">
              <Image src="/images/idms_for/share.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Facilitate data sharing</p>
            </div>
            <div className="flex mb-3">
              <Image src="/images/idms_for/duplication.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Reduce data duplication</p>
            </div>
            <div className="flex mb-3">
              <Image src="/images/idms_for/quality.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Improve data quality</p>
            </div>
            <div className="flex mb-3">
              <Image src="/images/idms_for/reporting.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Act as a single gateway for reporting</p>
            </div>
            <div className="flex mb-3">
              <Image src="/images/idms_for/house.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Function as a centralized data warehouse</p>
            </div>
          </div>

          {/* IDMS for citizen */}
          <div>
            <Image src="/images/idms_for/idms_for_citizen.svg" height={206} width={350} alt="IDMS for government" />
            <h2 className="text-2xl my-8 font-bold">IDMS for Citizens</h2>
            <div className="flex mb-3">
              <Image src="/images/idms_for/access.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Enhance data access</p>
            </div>
            <div className="flex mb-3">
              <Image src="/images/idms_for/view.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Faster insights</p>
            </div>
            <div className="flex mb-3">
              <Image src="/images/idms_for/analytics.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Offers resources for analytics</p>
            </div>
            <div className="flex mb-3">
              <Image src="/images/idms_for/encourage.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Encourage data-driven decision making</p>
            </div>
            <div className="flex mb-3">
              <Image src="/images/idms_for/star.svg" height={24} width={24} alt="facilitate data share" />
              <p className="text-lg ml-4">Improves business intelligence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Showcases */}
      <div className="bg-gray-100 h-auto">
        <div className="mt-8 showcase"></div>
        <div className="mx-auto w-full max-w-screen-xl pt-16 pb-40 px-8">
          <div className="flex  items-center">
            <span className="relative inline-block font-semibold text-3xl text-black overflow-hidden mx-auto">
              <span className=" heading-highlight relative font-headings z-10">Showcases</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="relative border-teal-300 border-2 bg-white hover:bg-teal-100 py-4 px-8 ">
              <h2 className="text-lg font-bold mb-4">Birgunj Metropolitan City IDMS </h2>
              <a target="_blank" href="https://data.birgunjmun.gov.np/"><p className="absolute bottom-2 text-teal-600" >Visit →</p></a>
            </div>
            <div className="relative border-teal-300 border-2 bg-white hover:bg-teal-100 py-4 px-8">
              <h2 className="text-lg font-bold mb-4">Tulsipur Sub-Metropolitan City IDMS</h2>
              <a target="_blank" href="https://data.tulsipurmun.gov.np/"><p className="absolute bottom-2 text-teal-600" >Visit →</p></a>
            </div>
            <div className="relative border-teal-300 border-2 bg-white hover:bg-teal-100 py-4 px-8">
              <h2 className="text-lg font-bold mb-4">Lekbeshi Municipality IDMS </h2>
              <a target="_blank" href="https://data.lekbeshimun.gov.np/"><p className="absolute bottom-2 text-teal-600" >Visit →</p></a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className=" px-8 flex justify-end">
            <Link href="/showcases">
            <span
              className="bottom-24 relative block w-36 mr-8 flex justify-center rounded-md text-primary bg-white px-4 py-3 font-medium shadow hover:bg-teal-100"
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
