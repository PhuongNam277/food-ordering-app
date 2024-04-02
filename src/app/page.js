import Header from "@/components/layout/Header";
import Hero from "../components/layout/Hero";
import Image from "next/image";
import Link from "next/link";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>

      <Hero />
      
      <HomeMenu />

      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={'Our story'}
          mainHeader={'About us'}
        />

        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dlkasjdlw dalwjdajsd dawjdopawjd aopwdopawj awpdjpaw
            akjw;odkj;oa dkawokdo daopdjpoasjd absolutekldjaiwjdiaj
            jda;wjd jdanwjd idawdoijaiod aowdid awdioa iajdiaud 
            jdawoj aoiwjdia sidjaw ajwd aaida awhd ajdap
          </p>

          <p>
            Lorem ipsum dlkasjdlw dalwjdajsd dawjdopawjd aopwdopawj awpdjpaw
            akjw;odkj;oa dkawokdo daopdjpoasjd absolutekldjaiwjdiaj
            jda;wjd jdanwjd idawdoijaiod aowdid awdioa iajdiaud 
            jdawoj aoiwjdia sidjaw ajwd aaida awhd ajdap
          </p>

          <p>
            Lorem ipsum dlkasjdlw dalwjdajsd dawjdopawjd aopwdopawj awpdjpaw
            akjw;odkj;oa dkawokdo daopdjpoasjd absolutekldjaiwjdiaj
          </p>

        </div>

      </section>

      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />

        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+84987722789">
            +84 987 722 789
          </a>
        </div>
        
      </section>

      

    </>
  );
}
