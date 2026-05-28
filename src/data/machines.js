const tools = Object.values(
  import.meta.glob("../assets/Tools/*.{jpg,png,jpeg,webp}", {
    eager: true,
  })
).map((img) => img.default);

export const getImage = (keyword, fallbackIndex) => {
  const found = allImages.find((img) =>
    img.toLowerCase().includes(keyword.toLowerCase())
  );
  return found || allImages[fallbackIndex % allImages.length];
};
export const imagesGlob = import.meta.glob(
  "../assets/project-images/*.{png,jpg,jpeg,webp}",
  { eager: true }
);
export const allImages = Object.values(imagesGlob).map((img) => img.default);

export const machines = {
  // cnc: [
  //   {
  //     name: "BFW - CHAKRA BMV60",
  //     detail: "Capacity: 1000 x 600 x 600 mm",
  //     desc: "3 & 4 axis high precision VMC for complex and heavy-duty machining.",
  //     img: getImage("machines_1", 0),
  //   },
  //   {
  //     name: "BFW - AGNI V4",
  //     detail: "Capacity: 600 x 400 x 400 mm",
  //     desc: "3 & 4 axis compact VMC for accurate small to medium components.",
  //     img: getImage("machines_2", 1),
  //   },
  //   {
  //     name: "COSMOS - CVM1370",
  //     detail: "Capacity: 1300 x 700 x 700 mm",
  //     desc: "3 axis large capacity VMC for heavy and detailed machining.",
  //     img: getImage("machines_3", 2),
  //   },
  //   {
  //     name: "HAAS - CNC VMC",
  //     detail: "Capacity: 1000 x 500 x 500 mm",
  //     desc: "3 axis reliable VMC ensuring consistent precision performance.",
  //     img: getImage("machines_4", 3),
  //   },
  // ],

  conventional: [
    {
      name: "Lathe Machine",
      detail: "Quantity: 2 Machines",
      desc: "Used for turning and shaping cylindrical components.",
      img: getImage("machines_5", 4),
    },
    {
      name: "VMC",
      detail: "Capacity: Max-Size: 1300 x 700 x 700 MM",
      desc: "",
      img: getImage("machines_6", 5),
    },
    {
      name: "Cnockout Vibration Machine",
      detail: "Capacity: 3-mtr x 2-mtr To 3-mtr x 4-mtr",
      desc: "",
      img: getImage("machines_1", 6),
    },
  ],

  "3d": [
    ...tools.map((imag) => ({
      name: "",
      detail: "",
      desc: "",
      img: imag,
    })),
  ],
};
