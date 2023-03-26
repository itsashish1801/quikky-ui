import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quikky UI - Free Open Source Animated Components</title>
        <meta
          name='description'
          content='Quikky UI is a collection of free Tailwind CSS + Framer motion pre-animated components that can be used in your react projects.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/quikky.svg' />
      </Head>
      <main>
        <h1>Hello from Quikky</h1>
      </main>
    </>
  );
}
