import { FAQ, Header, Hero, ProjectTagline, Highlight, Banner } from "@/components";

const Home = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <ProjectTagline />
        <FAQ />
        <Highlight />
        <Banner />
      </main>
    </>
  );
};

export default Home;
