async function getFeatures(){
    const resp = await fetch("/api/features");
    if(!resp.ok) throw new error("something is error!");
    return resp.json();
}


export default async function Features(){
    const features = await getFeatures();
    return (
        <div>
        <section id="features">
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row  dark:text-white">
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-left">
                        { features.features.title }
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                       { features.features.content }
                    </p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2">
                { features.features.questions.map((feature,i)=>(
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-5 md:flex-row"  key={i}>
                        <div className="rounder-l-full bg-brightRedSuperLight md:bg-transparent" >
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                                    { feature.id }
                                </div>
                                <h3 className="text-base font-bold  md:mb-4 md:hidden dark:text-black">
                                    { feature.title }
                                </h3>
                            </div>
                        </div>  
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                            { feature.title }
                            </h3>
                            <p className="text-darkGrayisBlue">
                            { feature.content }
                            </p>
                        </div>
                        
                    </div>
                ))}
                </div>
            </div>
        </section>
        </div>
    );
}