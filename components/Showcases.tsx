
const projects = [
  { imagePath: "/images/Logo.png", url: "https:data.tulsipurmun.gov.np", heading: "Tulsipur Sub-Metropolitan City IDMS", body: "IDMS Tuslipur is IDMS implemented by the Tulsipur Sub-Metropolitan City from Lumbuni Province, Dang." },
  { imagePath: "/images/Logo.png", url: "https:data.birgunjmun.gov.np", heading: "Birgunj Metropolitan City IDMS", body: "IDMS Birgunj is implemented by the Birgunj Metropolitan City situated in Madesh Province, Parsa." },
  { imagePath: "/images/Logo.png",url: "https:data.lekbeshimun.gov.np", heading: "Lekbeshi Municipality IDMS", body: "IDMS Birgunj is implemented by the Lekbeshi Municipality situated in Karnali Province, Surkhet." }

]


export function Showcases() {
  return (
    <>
      <section className="lg:relative">
        <div className="mx-auto w-full max-w-screen-xl px-8 pt-16 pb-20 text-center lg:text-left custom-bg">
          <div className="xl:pr-8">
            <h1 className="mb-8 text-2xl mr-8 font-headings font-bold tracking-tight text-3xl flex flex-col">
              Showcases
            </h1>
            <p className="tracking-tight">
              IDMS is used by different government agencies to bring data to the center hub.he system is used to effectively share the data between the department and to make the potential data available to the general public.   
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {projects.map((item, index) => (
                <div key={index} className="border-teal-300 border-2 mx-auto lg:mx-0 text-left  cursor-pointer hover:grayscale">
                  <img className="p-4 w-28" src={item.imagePath} alt="showcase idms" />
                  <div className="p-4 pt-0">
                    <h2 className="font-bold text-xl pb-4">{item.heading}</h2>
                    <p>{item.body}</p>
                  </div>
                  <a href={item.url} target="_blank" className="relative bottom-2 p-4 text-base">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}