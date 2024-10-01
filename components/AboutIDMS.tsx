import Link from "next/link"
import { idmsWorking, featuresList, potentialImpacts } from "@/content/data"

export function AboutIDMS() {
  return (
    <>
      <section className="lg:relative px-6">
        <div className="mx-auto px-8 w-full max-w-screen-xl pt-16 pb-20 text-left lg:text-left custom-bg">

          <div className="xl:pr-8">
            <h1 className="text-4xl mr-8 font-headings font-bold tracking-tight text-primary flex flex-col ">
              About Integrated Data Management System
            </h1>
            <p className="mb-4 mt-3 text-base md:mt-8">
              Integrated Data Management System (IDMS) is a comprehensive, integrated, and interoperable digital system designed to facilitate seamless inter-governmental data sharing and efficient dissemination of valuable data in the public domain under FAIR (Findable, Accessible, Interoperable, and Reusable) principles.            </p>
            <p className="mb-4 text-base">
              IDMS ensures the findability, accessibility, interoperability, and reusability of data, providing a robust framework for secure and transparent data management. Rather than being a standalone system, it functions as a channel to connect data from existing digital systems, delivering standardized data to all stakeholders.            </p>
            <p className="mb-4 text-base">
              With IDMS, our objective is to revolutionize data management practices within governments, empowering decision-makers with actionable insights and facilitating evidence-based policymaking. IDMS is specifically designed to tackle the challenges of data silos, lack of standardization, and limited data utilization mechanisms prevalent in government settings.            </p>
            <p className="mb-4 text-base">
              IDMS is powered by <a href="https://ckan.org/" className="text-sky-700 underline">CKAN</a>, the world’s leading open-source DMS.
            </p>
            <h1 className="text-xl mr-8 font-bold tracking-tight text-primary flex flex-col mt-8">
              How it works
            </h1>
            <img src="/images/IDMSFunctional.svg" alt="Functional Diagram" className="mt-10 w-4/5 mb-8" />
            <ol className="list-decimal ml-4 lg:ml-12 mt-16">
              {idmsWorking.map((item, index) => (
                <li key={index} className="mb-2"><span className="font-bold">{item.title}:</span> {item.text}</li>
              ))}
            </ol>

            <h1 className="text-xl mr-8 font-bold tracking-tight text-primary flex flex-col mt-10">
              Key Features
            </h1>
            <ol className="list-decimal ml-4 lg:ml-12 mt-4">
              {featuresList.map((item, index) => (
                <li key={index} className="mb-2"><span className="font-bold">{item.title}:</span> {item.body}</li>
              ))}
            </ol>
            <h1 className="text-xl mr-8 font-bold tracking-tight text-primary flex flex-col mt-10">
              Potential Impact
            </h1>
            <ol className="list-decimal ml-4 lg:ml-12 mt-4">
              {potentialImpacts.map((item, index) => (
                <li key={index} className="mb-2"><span className="font-bold">{item.title}:</span> {item.text}</li>
              ))}
            </ol>
            <p className="text-base mb-4 mt-4">
              Join us in our endeavor to revolutionize data management and decision-making processes within governments. Together, we can shape a future where governance is driven by data, characterized by transparency, and inclusive of all stakeholders. <Link href="/contact"><span className="text-sky-700">{`Let's collaborate! We're just an email away.`}</span></Link>
            </p>
            <h1 className="text-xl mr-8 font-bold tracking-tight text-primary  mt-8 mb-4">
              Acknowledgement
            </h1>
            <p>
              We are grateful for the generous support provided by the <a href="https://www.d4dnepal.org/" className="text-sky-700">Data for Development (D4D) Programme</a> in Nepal, which has been instrumental in the initiation and development of the IDMS.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
