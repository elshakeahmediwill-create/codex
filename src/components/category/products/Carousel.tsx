"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLanguage } from "@/src/context/LanguageContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroCarousel() {
  const { t, lang } = useLanguage();
  const slides = [
    {
      image: "/images/baby-care.png",
      badge: t.offer1Badge,
      title: t.offer1Title,
      subtitle: t.offer1Subtitle,
      description: t.offer1Description,
      discount: "50%",
    },
    {
      image: "/images/jar.png",
      badge: t.offer2Badge,
      title: t.offer2Title,
      subtitle: t.offer2Subtitle,
      description: t.offer2Description,
      discount: "FREE",
    },
    {
      image: "/images/products/shampo.png",
      badge: t.offer3Badge,
      title: t.offer3Title,
      subtitle: t.offer3Subtitle,
      description: t.offer3Description,
      discount: "40%",
    },
  ];

  return (
    <section className="relative w-full px-4 py-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        key={lang}
        loop
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="hero-swiper overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[380px] overflow-hidden rounded-[32px] bg-gradient-to-br from-white via-[#eefcf8] to-[#c9f5ea]">
              {/* Background Glow */}
              <div className="absolute right-20 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#14b8a6]/10 blur-3xl" />

              {/* Decorative Shapes */}
              <div className="absolute left-12 top-12 h-28 w-28 rounded-full  bg-[#14b8a6]/10" />
              <div className="absolute right-20 bottom-12 h-20 w-20 rounded-full bg-[#14b8a6]/10" />

              <div className="absolute right-36 top-12 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]/20"
                  />
                ))}
              </div>

              <div
                className={`grid h-full items-center md:grid-cols-2 ${
                  lang === "ar" ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* PRODUCT SIDE */}
                <div className="relative hidden h-full items-center justify-center md:flex">
                  {/* Big Circle */}
                  <div className="absolute h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#14b8a6]/20 to-[#14b8a6]/5" />

                  {/* Discount Badge */}
                  <div className="absolute right-20 top-10 z-30 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#1ccbb6] via-[#14b8a6] to-[#0f766e] text-white shadow-2xl ring-8 ring-white/40">
                    <span className="text-xs tracking-wider">{t.save}</span>
                    <span className="text-3xl font-bold">{slide.discount}</span>
                  </div>

                  {/* Product Card */}
                  <div
                    className="
          relative z-20
          flex h-[300px] w-[300px]
          items-center justify-center
          rounded-[40px] 
          
        "
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      sizes="60vw"
                      className="object-contain p-6 "
                    />
                  </div>

                  {/* Product Shadow */}
                  <div className="absolute bottom-12 h-10 w-72 rounded-full bg-black/10 blur-xl" />
                </div>

                {/* CONTENT SIDE */}
                <div
                  className={`relative px-10 md:px-16 ${
                    lang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {/* Huge Background Text */}
                  <div className="absolute right-0 top-0 text-[130px] font-extrabold leading-none tracking-tight text-[#14b8a6]/5 md:text-[170px]">
                    {t.offer}
                  </div>

                  <div className="relative z-10 max-w-xl">
                    <span className="mb-4 inline-flex items-center rounded-full bg-[#14b8a6]/10 px-4 py-2 text-sm font-semibold text-[#115e59]">
                      {slide.badge}
                    </span>

                    <h1 className="mb-2 text-5xl font-black tracking-tight text-[#0f766e] md:text-7xl">
                      {slide.title}
                    </h1>

                    <h2 className="mb-4 text-2xl font-semibold text-[#14b8a6] md:text-3xl">
                      {slide.subtitle}
                    </h2>

                    <p className="mb-5 max-w-md text-base leading-relaxed text-slate-600">
                      {slide.description}
                    </p>

                    <div className="mb-7 flex items-center gap-2">
                      <span className="text-yellow-400">★★★★★</span>

                      <span className="text-sm text-slate-500">
                        {t.trustedCustomers}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <button
                        className="
              rounded-full
              bg-gradient-to-r
              from-[#14b8a6]
              to-[#0f766e]
              px-10
              py-3.5
              font-semibold
              text-white
              shadow-lg
              transition-all
              hover:scale-105
              hover:shadow-xl
            "
                      >
                        {t.shopOffer}
                      </button>

                      <button
                        className="
              rounded-full
              border
              border-[#14b8a6]/20
              bg-white/70
              backdrop-blur-md
              px-10
              py-3.5
              font-semibold
              text-[#115e59]
              transition
              hover:bg-[#14b8a6]/5
            "
                      >
                        {t.viewDetails}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous */}
      <button className="custom-prev absolute left-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#115e59] shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-[#14b8a6] hover:text-white">
        <ChevronLeft size={18} />
      </button>

      <button className="custom-next absolute right-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#115e59] shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-[#14b8a6] hover:text-white">
        <ChevronRight size={18} />
      </button>
    </section>
  );
}
