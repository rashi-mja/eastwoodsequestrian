import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="About" description="Let's get to know each other" />
      <hr className="my-8" />

      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <div className="mx-auto mt-8 w-[400px]">
          <div className="relative flex flex-col items-center gap-2 rounded-md bg-secondary px-4 py-6">
            <Image
              src={siteConfig.authorImage}
              width={82}
              height={82}
              alt={siteConfig.name}
              className="absolute -top-8 mb-4 rounded-full border bg-primary"
            />
            <h3 className="mt-8 text-lg font-semibold">{siteConfig.author}</h3>
            <p className="text-center text-sm text-muted-foreground">
              Web Developer
            </p>
            <div className="flex items-center space-x-2">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.path}
                  rel="noreferrer"
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80",
                  )}
                >
                  <social.icon className="size-6" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base">
          At Eastwood Equestrian, we are dedicated to fostering a love for
          equestrian sports and nurturing the bond between horse and rider.
          Nestled in the heart of nature, Eastwood Equestrian is a haven for
          riders of all skill levels, from beginners taking their first steps
          into the world of horsemanship to seasoned equestrians seeking
          advanced training.
          <br />
          <br />
          Our facilities are equipped with state-of-the-art amenities,
          including spacious arenas, expert trainers, and well-cared-for
          horses. We pride ourselves on creating a community that values
          respect, dedication, and the joy of riding. Whether you’re here to
          learn, compete, or simply enjoy the serene connection with horses,
          Eastwood Equestrian is your perfect destination.
        </p>
      </div>
    </div>
  );
}
