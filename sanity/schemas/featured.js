export default{
    name:"featured",
    type:"document",
    title:"Featured Menu Categories",
    fields:[
        {
            name: "name",
            title: "Featured Category name",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "short_description",
            title: "Short description",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "restaurants",
            title: "Restaurants",
            type: "array",
            validation: (Rule) => Rule.required(),
            type:"reference",
            of:[{type:"reference",to:[{type:"restaurant"}]}],
          },
    ]
}