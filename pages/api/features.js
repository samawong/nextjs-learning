const features= {
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

export default function handler(req,res) {
res.status(200).json( features )
}
