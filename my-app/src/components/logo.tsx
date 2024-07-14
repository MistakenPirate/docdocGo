import Link from "next/link";
import Image from "next/image";
import { Karla } from "next/font/google";
import { cn } from "@/lib/utils";

const karla = Karla({ subsets: ["latin"], weight: "500" });

function Logo() {
  return (
    <div className="flex items-center">
      <Link href={"/"}>
        <Image src="./logo.svg" height={40} width={40} alt="logo" />
      </Link>
      <h2 className={cn("text-2xl ml-2",karla.className)}>DocDocGo</h2>
    </div>
  );
}

export default Logo;