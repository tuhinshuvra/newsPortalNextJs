import Head from "next/head";
import dynamic from 'next/dynamic';
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsesQuery } from "@/redux/api/api";


const HomePage = ({ allNews }) => {

  const { data, isLoading, isError, error } = useGetNewsesQuery();
  // console.log("allNews : ", allNews);

  const DynamicBanner = dynamic(() => import('@/components/UI/Banner'), {
    loading: () => <h1> Loading</h1>
  })




  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <AllNews
        // key={allNews._id}
        allNews={allNews}
      ></AllNews>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  console.log("api/news data :", data);

  return {
    props: {
      allNews: data.data,
    },
    revalidate: 10,
  };
}