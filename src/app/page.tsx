import { Header, Hero, ProjectTagline } from "@/components";

const Home = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <ProjectTagline/>
      </main>
    </>
  );
};

export default Home;
