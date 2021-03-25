import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { getSomeData } from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSomeData()

  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home ({ allPostsData, data }) {
  return (
    <div>
      <Head>
        <title>Next.js Starter Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex justify-between h-screen">
        <div className="w-4/12 bg-white relative">
          <h1 className=' text-black absolute right-0 text-2xl m-2'>Conrad</h1>
        </div>

        <div className="w-8/12 bg-black h-screen relative">
          <h1 className=' text-white left-0 absolute text-2xl m-2'>Trost</h1>
        </div>
      </div>

      <Image 
        src="/images/profile.jpeg"
        width={144}
        height={144}
      />

      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li className='block' key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>

      {data.map = () => {
        return <h1>test</h1>
      }}

      </div>
  )
}
