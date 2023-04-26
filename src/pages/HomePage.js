import Hero from '../sections/home/hero';
import Footer from '../sections/home/footer';
import Mobile from '../sections/home/mobile';
import NavBar from '../sections/home/header';
import Hotels from './Hotels'

export default function HomePage() {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Hero />
      <Mobile />
      <Hotels />
      <Footer />
    </>
  );
}
