export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant name",
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
      name: "image",
      title: "Image of the restaurant",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude of the restaurant",
      type: "number",
    },
    {
      name: "long",
      title: "Longitude of the restaurant",
      type: "number",
    },
    {
      name: "address",
      title: "Restaurant address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Enter a Rating between 1-5",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter value between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      type:"reference",
      to:[{type:"category"}],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of:[{type:"reference",to:[{type:"dish"}]}],
    },
  ],
};
