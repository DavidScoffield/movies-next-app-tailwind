import Head from 'next/head'
import Layout from '../components/Layout'
import ListMovies from '../components/ListMovies'
import Search from '../components/Search'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Movify</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Search />

      {/* <Recomendations /> */}

      {/* ListMovies */}
      <ListMovies />

      {/* Footer */}
    </Layout>
  )
}
