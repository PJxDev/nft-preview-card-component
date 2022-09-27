import Head from "next/head";
import Image from "next/image";

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

        <title>Frontend Mentor | NFT preview card component</title>
      </Head>

      <main className="">
        <article>
          
        Equilibrium #3429 Our Equilibrium collection promotes balance and calm.
        0.041 ETH 3 days left Creation of Jules Wyvern
        </article>
      </main>
    </div>
  );
}
