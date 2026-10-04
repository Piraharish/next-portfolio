import { Capabilities } from "@/components/capabilities/Capabilities";
import { Contact } from "@/components/contact/Contact";
import { Experience } from "@/components/experience/Experience";
import { Hero } from "@/components/hero/Hero";
import { Works } from "@/components/work/Works";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <Suspense>
        <Hero />
      </Suspense>
      <Suspense>
        <Capabilities />
      </Suspense>
      <Suspense>
        <Works />
      </Suspense>
      <Suspense>
        <Experience />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}
