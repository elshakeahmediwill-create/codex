"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

type Category = {
  _id: string;
  name: string;
  image: string;
};

export default function CategoriesHome() {
  const { t } = useLanguage();

  const pharmacyCategories: Category[] = [
    {
      _id: "1",
      name: t.medicines,
      image: "/images/medicines.png",
    },
    {
      _id: "2",
      name: t.vitamins,
      image: "/images/vitamins.png",
    },
    {
      _id: "3",
      name: t.babyCare,
      image: "/images/baby-care.png",
    },
    {
      _id: "4",
      name: t.skinCare,
      image: "/images/skincare.png",
    },
    {
      _id: "5",
      name: t.hairCare,
      image: "/images/hair_care.png",
    },
    {
      _id: "6",
      name: t.dentalCare,
      image: "/images/dental.png",
    },
    {
      _id: "7",
      name: t.medicalDevices,
      image: "/images/devices.png",
    },
    {
      _id: "8",
      name: t.supplements,
      image: "/images/supplement.webp",
    },
  ];

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span className="h-6 w-1 rounded-full bg-[#14b8a6]" />
          {t.shopBy}
          <span className="text-[#14b8a6]">{t.category}</span>
        </h2>

        <Link
          href="/categories"
          className="text-sm font-medium text-[#14b8a6] hover:underline"
        >
          {t.viewAll} →
        </Link>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {pharmacyCategories.map((cat) => (
          <div
            key={cat._id}
            className="group flex flex-col items-center justify-center text-center"
          >
            <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full border border-gray-200 bg-gray-50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm font-medium transition-colors duration-300 group-hover:text-[#14b8a6]">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}