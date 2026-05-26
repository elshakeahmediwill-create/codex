"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { useLanguage } from "../../../context/LanguageContext";

import {
  ShieldCheck,
  Truck,
  Headphones,
  CreditCard,
  Send,
  Pill,
  ChevronRight,
} from "lucide-react";

import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="relative mt-16 overflow-hidden border border-white/40 bg-gradient-to-r from-[#eef6ff] via-[#f5fbff] to-[#e7faf7] shadow-[0_20px_50px_rgba(15,118,110,0.08)] backdrop-blur-xl">

      {/* MAIN */}

      <div className="relative z-10 px-8 pb-6 pt-10 md:px-14">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">

          {/* LEFT SIDE */}

          <div className="lg:col-span-1">

            {/* LOGO */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="rounded-2xl bg-[#14b8a6]/10 p-3">

                <Pill
                  className="text-[#14b8a6]"
                  size={24}
                />
              </div>

              <div>

                <h1 className="text-3xl font-bold leading-none">

                  <span className="text-[#14b8a6]">
                    Pharma
                  </span>

                  <span className="text-[#115e59]">
                    Care
                  </span>
                </h1>

                <p className="mt-1 text-xs text-gray-500">
                  {t.trustedPharmacy}
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}

            <p className="mt-5 text-[15px] leading-8 text-[#4A5565]">
              {t.footerDesc}
            </p>

            {/* SOCIALS */}

            <div className="mt-6 flex gap-4">

              {[
                FiFacebook,
                FiInstagram,
                FiTwitter,
                FiYoutube,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E3EEEB] bg-white text-[#18B7A0] shadow-sm transition-all duration-300 hover:scale-110 hover:bg-[#14b8a6] hover:text-white"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>

            {/* LEFT IMAGE */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative mt-6 h-[150px] w-[150px]"
            >
              <Image
                src="/images/footerpills.png"
                alt="capsule"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* SHOP */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">

                <Truck
                  className="text-[#18B7A0]"
                  size={22}
                />
              </div>

              <h3 className="text-xl font-semibold text-[#115e59]">
                {t.shop}
              </h3>
            </div>

            <ul className="space-y-4">

              {[
                t.allCategories,
                t.medicines,
                t.supplements,
                t.personalCare,
                t.beautyProducts,
                t.oralCare,
              ].map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 text-[#4A5565] transition-all duration-300 hover:text-[#18B7A0] ${
                    lang === "ar"
                      ? "hover:-translate-x-1"
                      : "hover:translate-x-1"
                  }`}
                >
                  <ChevronRight
                    size={16}
                    className={
                      lang === "ar"
                        ? "rotate-180"
                        : ""
                    }
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">

                <Headphones
                  className="text-[#18B7A0]"
                  size={22}
                />
              </div>

              <h3 className="text-xl font-semibold text-[#115e59]">
                {t.helpSupport}
              </h3>
            </div>

            <ul className="space-y-4">

              {[
                t.contactUs,
                t.faqs,
                t.shippingDelivery,
                t.returnsRefunds,
                t.trackOrder,
                t.prescriptionGuide,
              ].map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 text-[#4A5565] transition-all duration-300 hover:text-[#18B7A0] ${
                    lang === "ar"
                      ? "hover:-translate-x-1"
                      : "hover:translate-x-1"
                  }`}
                >
                  <ChevronRight
                    size={16}
                    className={
                      lang === "ar"
                        ? "rotate-180"
                        : ""
                    }
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">

                <ShieldCheck
                  className="text-[#18B7A0]"
                  size={22}
                />
              </div>

              <h3 className="text-xl font-semibold text-[#115e59]">
                {t.aboutUs}
              </h3>
            </div>

            <ul className="space-y-4">

              {[
                t.aboutPharmaCare,
                t.ourMission,
                t.careers,
                t.blog,
                t.privacyPolicy,
                t.termsConditions,
              ].map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 text-[#4A5565] transition-all duration-300 hover:text-[#18B7A0] ${
                    lang === "ar"
                      ? "hover:-translate-x-1"
                      : "hover:translate-x-1"
                  }`}
                >
                  <ChevronRight
                    size={16}
                    className={
                      lang === "ar"
                        ? "rotate-180"
                        : ""
                    }
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">

                <Send
                  className="text-[#18B7A0]"
                  size={20}
                />
              </div>

              <h3 className="text-xl font-semibold text-[#115e59]">
                {t.stayUpdated}
              </h3>
            </div>

            <p className="mb-5 text-[15px] leading-7 text-[#4A5565]">
              {t.newsletterDesc}
            </p>

            {/* INPUT */}

            <div className="relative">

              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="h-13 w-full rounded-full border border-white bg-white/90 px-5 outline-none backdrop-blur-md focus:border-[#18B7A0]"
              />

              <button
                className={`absolute top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#14b8a6] to-[#14b8a6] text-white shadow-md ${
                  lang === "ar"
                    ? "left-2"
                    : "right-2"
                }`}
              >
                <Send size={18} />
              </button>
            </div>

            {/* RIGHT IMAGE */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative -mt-3 flex h-[220px] w-full justify-end pe-6"
            >
              <Image
                src="/images/medical.png"
                alt="medical"
                fill
                className="scale-125 object-contain object-right"
              />
            </motion.div>
          </div>
        </div>

        {/* FEATURES */}

        <div className="relative z-20 -mt-4 flex items-center justify-center">

          <div className="grid w-full max-w-[1200px] grid-cols-1 overflow-hidden rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(15,118,110,0.08)] md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: ShieldCheck,
                title: t.genuineProducts,
              },

              {
                icon: Truck,
                title: t.fastDelivery,
              },

              {
                icon: Headphones,
                title: t.expertSupport,
              },

              {
                icon: CreditCard,
                title: t.securePayments,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={index}
                  className="flex items-center gap-4 border-r border-[#EDF3F1] p-5 last:border-r-0"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F2FBF9]">

                    <Icon
                      className="text-[#18B7A0]"
                      size={24}
                    />
                  </div>

                  <h4 className="text-[15px] font-semibold leading-6 text-[#0B1533]">
                    {item.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="border-t border-[#DDEDEA] bg-white/30 px-8 py-5 backdrop-blur-md md:px-14">

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

          {/* COPYRIGHT */}

          <div>

            <p className="text-center text-sm text-[#4A5565] lg:text-left">
              {t.copyright}
            </p>

            <p className="mt-1 text-center text-sm text-[#18B7A0] lg:text-left">
              {t.tagline}
            </p>
          </div>

          {/* PAYMENTS */}

          <div className="flex flex-wrap items-center justify-center gap-3">

            {[
              "/images/visa.png",
              "/images/mastercard.png",
              "/images/applepay.png",
              "/images/paypal.png",
            ].map((item, index) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={index}
                className="flex h-[55px] w-[90px] items-center justify-center rounded-2xl border border-[#DDEDEA] bg-white shadow-sm"
              >
                <Image
                  src={item}
                  alt="payment"
                  width={55}
                  height={28}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* STORE BUTTONS */}

          <div className="flex flex-wrap justify-center gap-3">

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="relative h-[52px] w-[160px]"
            >
              <Image
                src="/images/googleplay.png"
                alt="google play"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="relative h-[52px] w-[160px]"
            >
              <Image
                src="/images/appstore.png"
                alt="app store"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}