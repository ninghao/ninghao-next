import http from 'axios'
import { withRouter } from 'next/router'
import MainLayout from '../components/MainLayout'

const Post = withRouter((props) => (
  <MainLayout>
    <h3>{props.post.title}</h3>
    <p>{props.post.description}</p>
  </MainLayout>
))

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const response = await http.get(`http://localhost:3333/posts/${id}`)

  return {
    post: response.data
  }
}

export default Post