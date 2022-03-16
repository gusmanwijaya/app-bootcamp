import Head from "next/head";

export default function HeadTitle({ title }) {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Semina | {title}</title>
    </Head>
  );
}