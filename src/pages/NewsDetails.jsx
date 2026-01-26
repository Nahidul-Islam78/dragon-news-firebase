
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsCardDetails from '../components/NewsCardDetails';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
  const data = useLoaderData()
  const { id } = useParams()
  console.log(data, id);
  const[news,setNews]=useState({})
  useEffect(() => {
    const newsDetails = data.find(singleNews => singleNews.id == id)
    setNews(newsDetails)
  }, [data, id])
  
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-10 gap-5">
        <section className="col-span-7">
          <NewsCardDetails news={news}></NewsCardDetails>
        </section>
        <aside className="col-span-3">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;