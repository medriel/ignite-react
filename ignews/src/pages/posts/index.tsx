import Head from 'next/head'
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