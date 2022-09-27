/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import img1 from "/images/image-equilibrium.jpg";
import nftIcon from "/images/icon-ethereum.svg";
import clockIcon from "/images/icon-clock.svg";
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
            <Image
              src={img1}
              alt="picture that shows the representation of the NFT"
              layout="responsive"
              className="rounded-lg"
            />
            <h2 className=" text-white | text-xl | font-semibold">
              Equilibrium #3429
            </h2>
          </header>
          <p className="text-md | font-light">
            {" "}
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
              <Image
                src={avatar}
                alt="Creator's avatar"
                layout="fill"
              />
            </picture>
            <h3 className="font-light">Creation of <strong className="text-white">Jules Wyvern</strong></h3>
          </footer>
        </article>
      </main>
    </div>
  );
}
