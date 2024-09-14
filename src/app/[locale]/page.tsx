"use client";

import Flag from "@/app/assets/images/landing/flag.svg";
import BannedRobloxCharacter from "@/app/assets/images/landing/tr-bannedrobloxsad-character.png";
import Image from "next/image";
import MouseIcon from "@/app/assets/icons/mouse.svg";
import FAQComponent from "@/components/faq";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "@/components/language-switcher";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <>
      <div className="fixed bottom-0 right-0 p-6">
        <LanguageSwitcher />
      </div>
      <section className="flex h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
          className="group relative mx-auto h-auto w-24"
        >
          <Flag className="mx-auto my-8 h-auto w-24 rounded-lg transition-opacity group-hover:opacity-0" />
          <Image
            src={BannedRobloxCharacter}
            className="absolute top-1/2 mx-auto h-auto w-24 -translate-y-1/2 rounded-lg opacity-0 transition-opacity group-hover:opacity-100"
            alt="turkey banned roblox :("
            width={100}
            height={100}
          />
        </motion.div>
        <div className="mx-auto max-w-2xl space-y-6 p-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-center text-4xl font-bold lg:text-7xl"
          >
            {t.rich("title", {
              br: () => <br />,
              cool: (chunks) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-gradient-to-tr from-red-600 from-30% to-orange-300 bg-clip-text text-transparent"
                >
                  {chunks}
                </motion.span>
              ),
            })}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
            className="mx-auto max-w-lg dark:text-zinc-300"
          >
            {t("description")}
          </motion.p>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75, delay: 1.5 }}
              className="mt-4 inline-block rounded-full border-2 border-red-400 p-4 font-medium text-red-400"
            >
              {t("coming-soon")}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ ease: "easeInOut", duration: 0.75, delay: 1.8 }}
              className="mt-24 opacity-50"
            >
              {t("scroll")}
              <MouseIcon className="mx-auto mt-4 h-8 w-auto" />
            </motion.p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-lg space-y-72 lg:max-w-5xl lg:space-y-96">
        <motion.div
          initial={{ x: "2vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          viewport={{ amount: 0.5, once: true }}
          className="flex flex-col-reverse items-center justify-between gap-12 text-center lg:flex-row lg:gap-24 lg:text-left"
        >
          <div className="p-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold">{t("feature.1.title")}</h2>
            <p className="text-lg dark:text-zinc-300">
              {t("feature.1.description")}
            </p>
          </div>
          <div className="flex justify-center p-4 lg:w-1/2">
            <Image
              src={`/assets/images/landing/${locale}/iconic-meme.png`}
              alt="discover iconic memes"
              width={1080}
              height={1080}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "-2vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          viewport={{ amount: 0.5, once: true }}
          className="flex flex-col-reverse items-center justify-between gap-12 text-center lg:flex-row-reverse lg:gap-24 lg:text-left"
        >
          <div className="p-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold">{t("feature.2.title")}</h2>
            <p className="text-lg dark:text-zinc-300">
              {t("feature.2.description")}
            </p>
          </div>
          <div className="flex justify-center p-4 lg:w-1/2">
            <Image
              src={`/assets/images/landing/${locale}/share-the-fun.png`}
              alt="share the fun"
              width={1080}
              height={1080}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "2vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          viewport={{ amount: 0.5, once: true }}
          className="flex flex-col-reverse items-center justify-between gap-12 text-center lg:flex-row lg:gap-24 lg:text-left"
        >
          <div className="p-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold">{t("feature.3.title")}</h2>
            <p className="text-lg dark:text-zinc-300">
              {t("feature.3.description")}
            </p>
          </div>
          <div className="flex justify-center p-4 lg:w-1/2">
            <Image
              src={`/assets/images/landing/${locale}/what-is-this.png`}
              alt="huh? what is this?"
              width={1080}
              height={1080}
            />
          </div>
        </motion.div>
      </section>

      <FAQComponent />

      <footer>
        <div className="mx-auto max-w-3xl p-6 py-56">
          {/* <p className="text-center text-lg dark:text-zinc-300">
              Turkey Mentioned © {new Date().getFullYear()}. All rights reserved.
            </p> */}
          <p className="text-center dark:text-zinc-300">
            Created by{" "}
            <a
              className="hover:underline dark:text-white"
              target="_"
              rel="noopener noreferrer"
              href="https://x.com/emirkabal"
            >
              @emirkabal
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
