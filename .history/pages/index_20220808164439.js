import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../utils/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am passionate about technology and code. JavaScript particularly
          catches my attention at this moment because it opens up many
          possibilities for web programming. I like to code, design websites,
          applications and keep up to date with new technological advances. I am
          recently certifying my knowledge to give security to companies that
          place their trust in me and my team. I also try in my free time to
          continue doing code challenges to improve my skills as a developer.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}

export default Home
