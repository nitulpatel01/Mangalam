import React, { useState } from "react";
import Section from "../components/Section";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const heavyFabrication = Object.values(
  import.meta.glob("../assets/heavy-fabrication/*.{jpg,png,jpeg,webp}", {
    eager: true,
  })
).map((img) => img.default);

const pattern = Object.values(
  import.meta.glob("../assets/pattern/*.{jpg,png,jpeg,webp}", {
    eager: true,
  })
).map((img) => img.default);

const factory = Object.values(
  import.meta.glob("../assets/factory/*.{jpg,png,jpeg,webp}", {
    eager: true,
  })
).map((img) => img.default);

const oldmemories = Object.values(
  import.meta.glob("../assets/old-memories/*.{jpg,png,jpeg,webp}", {
    eager: true,
  })
).map((img) => img.default);

const tools = Object.values(
  import.meta.glob("../assets/Tools/*.{jpg,png,jpeg,webp}", {
    eager: true,
  })
).map((img) => img.default);

// Categories
const categories = [
  { name: "Heavy Fabrication", images: heavyFabrication },
  { name: "Patterns", images: pattern },
  { name: "Factory", images: factory },
  { name: "Old-Memories", images: oldmemories },
  { name: "Tools", images: tools },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [openCategories, setOpenCategories] = useState(() =>
    Object.fromEntries(categories.map(cat => [cat.name, true]))
  );

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const openImage = (images, index) => {
    setCurrentImages(images);
    setSelectedIndex(index);
    setSelectedImage(images[index]);
  };

  const nextImage = () => {
    const newIndex = (selectedIndex + 1) % currentImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex =
      (selectedIndex - 1 + currentImages.length) % currentImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  return (
    <Section
      id="gallery"
      className="relative z-20 bg-industrial-950 py-24"
      style={{ isolation: "isolate" }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Gallery</span>
          </h2>
        </motion.div>

        {categories.map((category, i) => (
          <div key={i} className="mb-28">
            <button
              type="button"
              onClick={() => toggleCategory(category.name)}
              className="mb-10 flex w-full items-center justify-between gap-4 border-l-4 border-cyan-400 pl-4 text-left"
              aria-expanded={Boolean(openCategories[category.name])}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {category.name}
              </h2>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-100">
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${openCategories[category.name] ? "rotate-180" : ""
                    }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openCategories[category.name] && (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, height: 0, y: -12 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {category.images.map((img, index) => (
                      <div
                        key={index}
                        onClick={() => openImage(category.images, index)}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                      >
                        <img
                          src={img}
                          alt=""
                          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          ></div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 z-[100001] text-white text-4xl hover:text-red-400"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-[100001]
            bg-black/40 hover:bg-cyan-500
            text-white text-5xl w-14 h-14 rounded-full flex items-center justify-center"
          >
            ❮
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-[100001]
            bg-black/40 hover:bg-cyan-500
            text-white text-5xl w-14 h-14 rounded-full flex items-center justify-center"
          >
            ❯
          </button>

          <img
            src={selectedImage}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
            className="relative z-[100000] max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </Section>
  );
};

export default Gallery;
