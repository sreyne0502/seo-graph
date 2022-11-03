
import { getAllPostsForHome } from '../lib/api';

export async function getStaticProps(){

  const posts = await getAllPostsForHome();

  console.log('posts is : ' , posts.edges)

  return {
    props : {posts: posts.edges}
  };

}

{/* Connect next js with wordpress */}
export default function Home(posts) {
  console.log('props post : ' , posts.posts);
  return (
    <div>
      {
      posts.posts.map((post, index) => {
            return (
              <div key={index} >
                <h2>{post.node.date}</h2>
                <h2>{post.node.title}</h2>
                <h2>{post.node.content}</h2>
              </div>
            )
          })
        }
    </div>
  )
}


