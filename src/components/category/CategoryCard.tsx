"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    _id: "1",
    name: "Medicines",
    image: "/images/category/medicines.jpg",
  },
  {
    _id: "2",
    name: "Vitamins & Supplements",
    image: "/images/category/vitamins.jpg",
  },
  {
    _id: "3",
    name: "Personal Care",
    image: "/images/category/personal-care.jpg",
  },
  {
    _id: "4",
    name: "Baby Care",
    image: "/images/category/baby-care.jpg",
  },
  {
    _id: "5",
    name: "Skin Care",
    image: "/images/category/skin-care.jpg",
  },
  {
    _id: "6",
    name: "Hair Care",
    image: "/images/category/hair-care.jpg",
  },
  {
    _id: "7",
    name: "Medical Devices",
    image: "/images/category/medical-devices.jpg",
  },
  {
    _id: "8",
    name: "First Aid",
    image: "/images/category/first-aid.jpg",
  },
  {
    _id: "9",
    name: "Mother Care",
    image: "/images/category/mother-care.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="p-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
           <Link
            key={category._id}
            href={`/categories/${category._id}`}
            className="group block"
          >
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              {/* IMAGE */}
              <Image
                src={category.image || "/placeholder.png"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-500" />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-semibold capitalize">
                  {category.name}
                </h3>

                <div className="w-0 h-[2px] bg-white mt-1 transition-all duration-500 group-hover:w-14" />
              </div>

              {/* BADGE */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-800 shadow">
                Medical
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
