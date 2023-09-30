import Layout from '@/components/Layout';

const Page = () => {
  return (
    <>
      <div>{/* PAGE CONTENT */}</div>
    </>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
