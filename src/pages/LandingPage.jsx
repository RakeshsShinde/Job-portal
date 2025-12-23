import React, { useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companyData from "../data/companies.json";
import faqData from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  const plugin = useRef(Autoplay({ delay: 1000 }));
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      {/* hero sections  */}
      <section className="text-center">
        <h1
          className="flex flex-col items-center justify-center
         gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter"
        >
          Find your dream job{" "}
          <span className="flex items-center gap-1">
            and get <img className="h-14 sm:h-24 lg:h-32" src={logo} />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find perfect candidate
        </p>
      </section>
      <div className=" flex justify-center gap-6">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find jobs
          </Button>
        </Link>
        <Link to={"/jobs"}>
          <Button variant="destructive" size="xl">
            Post Job
          </Button>
        </Link>
      </div>

      {/* carosual */}
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companyData.map((cmp) => {
            return (
              <CarouselItem key={cmp.id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={cmp.path}
                  alt={cmp.name}
                  className="h-9 sm:h-12 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      {/* banner image  */}
      <img src={"/banner.jpeg"} className="w-full " />

      {/* cards  */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for job,,track applications and more.{" "}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            post jobs,manage applications,and find best candidates.
          </CardContent>
        </Card>
      </section>

      {/* Accordion for faq */}
      <Accordion type="single" collapsible>
        {faqData.map((que, index) => {
          return (
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger>{que?.question}?</AccordionTrigger>
              <AccordionContent>{que?.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
}
