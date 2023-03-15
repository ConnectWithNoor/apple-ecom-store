import Image from "next/image";
import Link from "next/link";
import BasketIcon from "@/components/basketIcon";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";

function Header() {
  const session = false;

  return (
    <header className="sticky top-0 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      {/* logo */}
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </div>
        </Link>
      </div>

      {/* nav */}

      <nav className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </nav>

      {/* icons */}
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <BasketIcon />

        {session ? (
          <Image
            src="https://www.tradiesinbusiness.com.au/wp-content/uploads/2022/08/avatar-jongen-voorbeeld-1.jpg"
            alt="user"
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            // onClick={() => signout}
          />
        ) : (
          <UserIcon
            className="headerIcon"
            // onClick={() => signIn}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
