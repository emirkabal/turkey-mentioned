import Flag from "@/app/assets/images/landing/flag.svg";
import BannedRobloxCharacter from "@/app/assets/images/landing/tr-bannedrobloxsad-character.png";
import IconicMemeImage from "@/app/assets/images/landing/iconic-meme.png";
import ShareImage from "@/app/assets/images/landing/share.png";
import WhatImage from "@/app/assets/images/landing/whatisthis.png";
import Image from "next/image";
import FAQComponent from "@/components/faq";

export default function Home() {
  return (
    <>
      <section className="flex h-screen items-center justify-center flex-col">
        <div className="group relative w-24 h-auto mx-auto">
          <Flag className="w-24 transition-opacity h-auto group-hover:opacity-0 mx-auto my-8 rounded-lg" />
          <Image
            src={BannedRobloxCharacter}
            className="absolute w-24 h-auto mx-auto top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 rounded-lg"
            alt="turkey banned roblox :("
            width={100}
            height={100}
          />
        </div>
        <div className="text-center max-w-xl mx-auto space-y-4 p-4">
          <h1 className="text-4xl font-bold text-center">
            Welcome to{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-tr from-red-600 from-30% to-orange-300">
              Turkey Mentioned
            </span>
          </h1>
          <p className="max-w-lg mx-auto">
            Discover and share Turkey-Mentioned, the popular Turkish internet
            meme filled with Turkish flags and wolf howls. Explore iconic meme
            texts and share them with a click.
          </p>
          <div>
            <div className="inline-block mt-4 font-medium border-red-400 border-2 rounded-full p-4 text-red-400">
              Coming soon
            </div>
            <p className="mt-24 opacity-50">
              If you want to see features scroll down to bottom
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-lg lg:max-w-5xl mx-auto space-y-96 mt-56">
        <div className="flex flex-col-reverse gap-24 lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Discover Iconic Memes</h2>
            <p className="text-lg dark:text-gray-300">
              Explore a collection of famous Turkey-Mentioned memes that have
              taken the internet by storm. Each meme features creative,
              flag-filled responses from Turkish users in international threads.
            </p>
          </div>
          <div className="lg:w-1/2 p-4 flex justify-center">
            <Image
              src={IconicMemeImage}
              alt="discover iconic memes"
              width={1080}
              height={1080}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-24 lg:flex-row-reverse justify-between items-center">
          <div className="lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Share the Fun</h2>
            <p className="text-lg dark:text-gray-300">
              Love Turkey-Mentioned? Share your favorite memes with just one
              click! Spread the fun across social media and show your friends
              the best of Turkish internet culture.
            </p>
          </div>
          <div className="lg:w-1/2 p-4 flex justify-center">
            <Image
              src={ShareImage}
              alt="share the fun"
              width={1080}
              height={1080}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-24 lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">
              What Is Turkey-Mentioned?
            </h2>
            <p className="text-lg dark:text-gray-300">
              Learn the history behind the Turkey-Mentioned meme. Understand how
              it became a viral symbol of Turkish internet pride and how it
              continues to thrive in online communities today.
            </p>
          </div>
          <div className="lg:w-1/2 p-4 flex justify-center">
            <Image
              src={WhatImage}
              alt="huh? what is this?"
              width={1080}
              height={1080}
            />
          </div>
        </div>
      </section>

      <FAQComponent />

      <footer>
        <div className="max-w-3xl mx-auto p-6 py-56">
          {/* <p className="text-center text-lg dark:text-gray-300">
              Turkey Mentioned © {new Date().getFullYear()}. All rights reserved.
            </p> */}
          <p className="text-center dark:text-gray-300">
            Created by{" "}
            <a
              className="dark:text-white hover:underline"
              target="_"
              href="https://github.com/emirkabal"
            >
              @emirkabal
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
