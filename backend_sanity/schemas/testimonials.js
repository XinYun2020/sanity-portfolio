// testimonials 推荐书 => start sanity
export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "imgurl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true, // user will be able to crop the hotspot of the image
      },
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "string",
    },
  ],
};
