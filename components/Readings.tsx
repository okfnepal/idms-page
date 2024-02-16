
const readings = [
    {
        title: "Intervening local government’s data management with assistance from data fellows",
        body: "The fellows worked on introducing IDMS features and workflows, alongside gathering, refining, and digitizing municipal data.",
        href: "https://oknp.org/blogs/intervening-local-governments-data-management-with-assistance-from-data-fellows"
    },
    {
        title: "Diagnostic report: Connecting local data ecosystem",
        body: "Diagnostic of municipality data management in Nepal and Evaluating Integrated Data Management System as a solution",
        href: "https://www.d4dnepal.org/2023/03/10/diagnostic-of-municipality-data-management-in-nepal-and-evaluating-integrated-data-management-systems-as-a-solution/"
    },
    {
        title: "Policy Brief: Connecting local data ecosystem",
        body: "This brief provides a summary of the proposed solution, how it can be implemented and the challenges it faces.",
        href: "https://www.d4dnepal.org/2023/03/09/connecting-local-data-ecosystems-policy-brief/"
    },
    {
        title: "Supporting Local Government for informed decision making",
        body: "As part of this program, fellows worked closely with various personnel in municipalities to administer and operationalize the IDMS.",
        href: "https://oknp.org/blogs/supporting-local-government-for-informed-decision-making-insights-from-lg-data-fellowship-program"
    },

]

export function Readings() {
    return (
        <>
            <div className="mx-auto w-full max-w-screen-xl pt-16 pb-20 px-8">
                <div className="flex  items-center">
                    <span className="relative inline-block font-semibold text-3xl text-black overflow-hidden mx-auto">
                        <span className="heading-highlight font-headings">Related Readings</span>
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16" >
                    {readings.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => window.open(item.href, '_blank')}
                            className="flex flex-col justify-between border-teal-300 border-2 px-8 py-8 shadow-md hover:bg-teal-300 hover:cursor-pointer">
                            <div>
                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <p className=" mt-4">
                                    {item.body}
                                </p>
                            </div>
                            <div className="mt-10">
                                <a href={item.href} className=" hover:text-teal-600 transition-colors duration-300">
                                    <img src="/images/bend.svg" alt="bend" className="inline" />
                                    <span className="inline pl-1">Learn More</span>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}