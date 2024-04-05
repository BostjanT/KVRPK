// pages/article/[id].tsx
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import novice from '@/public/news.json'

type ArticlePageProps = {
    id: number
    naslov: string
    datum: string
    vsebina: string
    tip: string
    slika: string
    width: number
    height: number
}[]



const ArticlePage = () => {
  const article: ArticlePageProps = novice.vnosi
  const router = useRouter();
  const { id } = router.query;

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Article ID: {id}</h1>
      <h2>{article.naslov}</h2>
      <p>{article.vsebina}</p>
    </div>
  );
};
/* 
export const getStaticPaths: GetStaticPaths = async () => {
  const data = require('../../public/news.json');
  const paths = data.vnosi.map((article: ArticlePageProps) => ({
    params: { id: article.id.toString() }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id;
  const data = require('../../articles.json');
  const article = data.articles.find((a: Article) => a.id.toString() === id);

  return { props: { article } };
};
 */
export default ArticlePage;
