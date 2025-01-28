import Image from "next/image";
import { Anton } from "next/font/google";
import { Fetch } from "@/app/lib";
import { Github, Leaf, Linkedin, Mail, Twitter } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the brains behind Viriditas",
};

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

interface TeamMember {
  id: number;
  serial: number;
  user: string;
  slug: string;
  position: string;
  image: string;
}

export default async function Page() {
  const data = await Fetch({ endpoint: "main/team" });
  const teamMembers: TeamMember[] = data;

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-base-200 py-20">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className={`${anton.className} text-3xl tracking-tight`}>
              Meet Our Team
            </h1>
            <p className="max-w-2xl text-lg text-base-content/70">
              The passionate individuals behind our green revolution
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="mx-auto max-w-7xl py-20">
        <div className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-xl bg-base-100 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.user}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="relative p-6">
                <h3 className="mb-1 text-xl font-bold">{member.user}</h3>
                <p className="text-sm text-base-content/70">
                  {member.position}
                </p>

                <div className="mt-4 flex space-x-3">
                  <Link href={"#"} className="btn btn-circle btn-ghost btn-sm">
                    <Mail className="h-4 w-4" />
                  </Link>
                  <Link href={"#"} className="btn btn-circle btn-ghost btn-sm">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link href={"#"} className="btn btn-circle btn-ghost btn-sm">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
