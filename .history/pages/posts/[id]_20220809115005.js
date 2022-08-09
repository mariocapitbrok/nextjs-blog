import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../utils/posts'

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

const Post = () => {
  return <Layout>...</Layout>
}

export default Post
