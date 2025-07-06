import {
  FAQ,
  Header,
  Hero,
  ProjectTagline,
  Highlight,
  Banner,
  ConstructionTimeline,
  Contact,
  Footer,
} from "@/components";

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
        <ConstructionTimeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
