import { GetStaticProps } from 'next';
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container} >
        <div className={styles.posts} >
          <a href="#">
            <time>31 de julho de 2021</time>
            <strong>Breve descrição</strong>
            <p>Conteudo que vai ter no posto, vem todos aqui formando um paragrafo, aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </a>
          <a href="#">
            <time>31 de julho de 2021</time>
            <strong>Breve descrição</strong>
            <p>Conteudo que vai ter no posto, vem todos aqui formando um paragrafo, aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </a>
          <a href="#">
            <time>31 de julho de 2021</time>
            <strong>Breve descrição</strong>
            <p>Conteudo que vai ter no posto, vem todos aqui formando um paragrafo, aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </a>
          <a href="#">
            <time>31 de julho de 2021</time>
            <strong>Breve descrição</strong>
            <p>Conteudo que vai ter no posto, vem todos aqui formando um paragrafo, aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  )

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}