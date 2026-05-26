"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Pill, Upload } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
export default function Hero() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t.supplements,
      image: "/images/pill.webp",
    },

    {
      title: t.diabetes,
      image: "/images/medicine.webp",
    },

    {
      title: t.beautyProducts,
      image: "/images/jar.png",
    },

    {
      title: t.oralCare,
      image: "/images/tooth.webp",
    },
  ];

  return (
    <section className="bg-[#f7fcfb] pb-5">

      {/* MAIN BANNER */}

      <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-r from-[#eef6ff] via-[#f5fbff] to-[#e7faf7] pt-5">

        {/* FLOATING ITEMS */}

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-10 top-2"
        >
          <Image
            src="/images/Footerpills.png"
            alt="pill"
            width={80}
            height={80}
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[42%] top-14"
        >
          <Image
            src="/images/jar.webp"
            alt="bottle"
            width={150}
            height={150}
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-10 top-12"
        >
          <Image
            src="/images/motiontwo.png"
            alt="capsule"
            width={100}
            height={100}
          />
        </motion.div>

        {/* MAIN CONTENT */}

        <div className="relative z-10 grid min-h-[540px] items-center lg:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="px-8 py-6 lg:px-16"
          >

            {/* TITLE */}

            <h1 className="text-[44px] font-bold leading-[1] text-[#115e59] lg:text-[62px]">

              {t.yourTrusted}

              <span className="mt-3 block bg-gradient-to-r from-[#14b8a6] via-[#0f9b8e] to-[#115e59] bg-clip-text text-transparent">
                {t.onlinePharmacy}
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-[680px] text-[18px] leading-8 text-[#4b5563]">
              {t.heroDescription}
            </p>

            {/* BUTTONS */}

            <div className="mt-6 flex flex-wrap gap-5">

              {/* SHOP BUTTON */}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#14b8a6] to-[#0f9b8e] px-8 py-4 text-base font-medium text-white shadow-[0_12px_30px_rgba(20,184,166,0.28)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">

                  <Pill size={18} />
                </div>

                {t.shopMedicines}
              </motion.button>

              {/* UPLOAD BUTTON */}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-full border border-white bg-white/85 px-8 py-4 text-base font-medium text-[#115e59] shadow-lg backdrop-blur-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14b8a6]/10">

                  <Upload size={18} />
                </div>

                {t.uploadPrescription}
              </motion.button>
            </div>

            {/* CATEGORIES */}

            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">

              {categories.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="rounded-[28px] border border-white/60 bg-white/60 p-5 text-center shadow-[0_10px_30px_rgba(15,118,110,0.05)] backdrop-blur-xl"
                >
                  <div className="flex justify-center">

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={65}
                      height={65}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-4 text-[15px] font-semibold text-[#111827]">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex h-full items-end justify-center"
          >

            {/* MAIN CURVED SHAPE */}

            <div className="absolute bottom-0 left-1/2 h-[540px] w-[470px] -translate-x-1/2 rounded-t-[240px] bg-[#14b8a6]" />

            {/* DOCTOR IMAGE */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex justify-center"
            >
              <Image
                src="/images/doctor.png"
                alt="Doctor"
                width={450}
                height={700}
                priority
                className="h-[540px] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}