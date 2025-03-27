import EditorHardo from "@/components/EditorHardo";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import LatestTweet from "@/components/LatestTweet";
import Minting from "@/components/Minting";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";


export default function Home() {
  return (
    <>
      <Hero />
      <EditorHardo />
      <LatestTweet />
      <Minting />
      <Roadmap />
      <Team />
      <Faq/>
    </>
  );
}
