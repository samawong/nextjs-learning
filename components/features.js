/*
async function getFeatures(){
    const resp = await fetch(`http://localhost:3000/api/features`);
    if(!resp.ok) throw new error("something is error!");
    return resp.json();
}
*/
export default async  function Features() {
    //const data = await getFeatures();
    const data= {
        title:"What's different about Manager?",
        content:"Manager provider all the functionality your team needs, whitout the complexity. Out software is tailor-made for modern digital product teams.",
        questions:[
            {
                id:1,
                title:"As a component",
                content:"You can include it as component in your document and call it as you need. This has the benefit of keeping \
                        the SVG code in one place.It isn't much further from this to have this SVG as a component in a separate file.Once you have your SVG as a component,\
                        you can pass it props to alter it's appearance. You receive the props and then use them directly on your SVG."
            },{
                id:2,
                title:"Including directly",
                content:"<svg> is a standard HTML tag that can be directly used in JSX. That means if your SVG is quite short, it can be easiest to include it in place."
            },{
                id:3,
                title:"Using the <img> tag",
                content:"You can use a regular img tag and reference the SVG by URL. You need to place the image in the /public directory and reference it relative to that."
            }
        ]
    }
    
    return (
        <section id="features">
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row  dark:text-white">
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-left">
                        { data.title }
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        { data.content }
                    </p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2">
                    {data.questions.map((feature, i) => (
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-5 md:flex-row" key={i}>
                            <div className="rounder-l-full bg-brightRedSuperLight md:bg-transparent" >
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                        {feature.id}
                                    </div>
                                    <h3 className="text-base font-bold  md:mb-4 md:hidden dark:text-black">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    {feature.title}
                                </h3>
                                <p className="text-darkGrayisBlue">
                                    {feature.content}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
