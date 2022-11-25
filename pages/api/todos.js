const todos= [
    {
        id:1,
        title: "Cooking"
    },{
        id:2,
        title: "Learning English one hours"
    }
]

export default function handler(req,res) {
res.status(200).json( todos )
}
