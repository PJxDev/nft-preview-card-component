/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import img1 from "/images/image-equilibrium.jpg";
import nftIcon from "/images/icon-ethereum.svg";
import clockIcon from "/images/icon-clock.svg";
import viewIcon from "/images/icon-view.svg";
import avatar from "/images/image-avatar.png";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

        <title>Frontend Mentor | NFT preview card component</title>
      </Head>

      <main className="bg-veryDarkBlueMain | text-softBlue | font-body | h-screen | p-7 | flex | flex-col | justify-center | items-center">
        <article className="bg-veryDarkBlueCard | p-6 | rounded-xl | flex | flex-col | gap-4 | max-w-xs">
          <header className="flex | flex-col | gap-4 ">
            <picture
              className="relative"
              onMouseOver={() => {
                document.getElementById("hover-img").classList.toggle("hidden");
              }}
              onMouseOut={() => {
                document.getElementById("hover-img").classList.toggle("hidden");
              }}
            >
              <Image
                id="main-image"
                src={img1}
                alt="picture that shows the representation of the NFT"
                layout="responsive"
                className="rounded-lg"
              />
              <div
                id="hover-img"
                className="bg-cyan | absolute | w-full | h-full | top-0 | bg-opacity-40 | rounded-lg | hidden"
              >
                <picture className="flex | justify-center | items-center | h-full || hover:cursor-pointer">
                  <Image
                    src={viewIcon}
                    alt="Icon of an eye"
                    layout="fixed"
                    width={30}
                    height={30}
                  />
                </picture>
              </div>
            </picture>
            <h2 className=" flex | text-white | text-xl | font-semibold">
              <a className="hover:text-cyan | hover:cursor-pointer">
                Equilibrium #3429
              </a>
            </h2>
          </header>
          <p className="text-md | font-light">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <section className="flex | flex-row | justify-between | items-center">
            <label className="text-cyan | flex | items-center | gap-2 ">
              <Image src={nftIcon} alt="Icon of ethereum" />
              0.041 ETH
            </label>
            <label className="flex | items-center | gap-2 | font-light">
              <Image src={clockIcon} alt="Icon of a clock" />3 days left
            </label>
          </section>
          <hr className="text-veryDarkBlueLine" />
          <footer className="flex | items-center | gap-5 ">
            <picture className="relative | w-8 | h-8 | border-[1px] | border-solid | border-white | rounded-full">
              <Image src={avatar} alt="Creator's avatar" layout="fill" />
            </picture>
            <h3 className="font-light">
              Creation of{" "}
              <a className="text-white || hover:text-cyan | hover:cursor-pointer">
                Jules Wyvern
              </a>
            </h3>
          </footer>
        </article>
      </main>
    </div>
  );
}
