import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';

export default function Home({allPostData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm jazzg62. I'm a front-end engineer. You can contact me on <a href="https://twitter.com/jazzg625">Twitter</a>.</p>
        <p>
            Bingo, As you can see, I'm learning  to Next.js. By the way, If you are also interested in next.js. Welcome to discuss with me.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg}`} >Blog</h2>
        <ul className={`${utilStyles.list}`} >
          {
            allPostData.map(({id, date, title})=>(
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                {id}
                <br />
                {date}
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}

// static generation
export async function getStaticProps(){
  const allPostData = getSortedPostsData();
  // console.log('reading 构建时调用');
  return {
    props:{
      allPostData
    }
  }
}


// export async function getServerSideProps(context) {
//   const allPostData = getSortedPostsData();
//   console.log('rendering, 每次请求该路由都会调用');
//   return {
//     props: {
//       // props for your component
//       allPostData
//     }
//   }
// }