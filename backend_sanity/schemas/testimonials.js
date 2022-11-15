export default {
  name: "tertimonials",
  title: "Testimonials",
  type: "document",
  field: [
    { name: "name", title: "Name", type: "string" },
    { name: "company", title: "Company", type: "string" },
    {
      name: "imageurl",
      title: "ImgURL",
      type: "image",
      options: { hotspot: true },
    },
    { name: "name", title: "Name", type: "string" },
  ],
};
