import Head from 'next/head';
import Link from 'next/link';

const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
};

export default FirstPost;
