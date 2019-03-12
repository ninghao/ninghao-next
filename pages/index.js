import Link from 'next/link'
import MainLayout from '../components/MainLayout'

const ListItem = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <MainLayout>
    <ul>
      <ListItem id='hello-ninghao' title='hello ninghao.net' />
      <ListItem id='learn-next' title='learn next.js from ninghao' />
    </ul>
  </MainLayout>
)

export default Index