import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Skills from '../components/Skills'
import OpenSource from '../components/OpenSource'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan P. Romano</title>
      </Head>
    <Main />
    <About />
    <OpenSource />
    <Skills />
    <Contact />
    </div>
  )
}
