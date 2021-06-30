import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm jazzg62. I'm a front-end engineer. You can contact me on <a href="https://twitter.com/jazzg625">Twitter</a>.</p>
        <p>
            Bingo, As you can see, I'm learning Next.js. If you are also interested in next.js. Welcome to discuss with me.
        </p>
      </section>
    </Layout>
  )
}