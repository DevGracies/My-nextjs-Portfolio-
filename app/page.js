import Grid from "./components/Grid";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
   
      <div className="relative justify-center overflow-hidden items-center flex sm:px-10 px-5 mx-auto flex-col">
        <Navigation />
        <Header />
        <Grid />
      </div>
    
  );
}
