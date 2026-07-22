import Image from "next/image";
import Link from "next/link";

export default function AuthorCard() {
  return (
    <div className="mt-12 bg-[#F3F4F6] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
      <Image
        src="/team/steve.jpg"
        alt="Steve Germain, licensed Medicare broker and founder of A&E Insurance Agency"
        width={88}
        height={88}
        className="rounded-full object-cover shrink-0"
      />
      <div>
        <p className="text-[#1A1A2E] font-extrabold text-lg leading-tight">Steve Germain</p>
        <p className="text-[#1A72C0] text-sm font-semibold mb-2">
          Licensed Medicare Broker · Miami, FL
        </p>
        <p className="text-[#4B5563] text-sm leading-relaxed mb-3">
          Steve has helped more than 3,000 South Florida families make sense of Medicare since
          2009. He wrote <em>Medicare Decoded</em> for people turning 65 — and he answers his own
          phone.
        </p>
        <p className="text-xs text-[#9CA3AF]">
          NPN 19921707 · Licensed in 35 states ·{" "}
          <Link href="/about/steve" className="text-[#1A72C0] font-medium hover:underline">
            More about Steve →
          </Link>
        </p>
      </div>
    </div>
  );
}
