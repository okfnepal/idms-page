import Link from "next/link";
import { useEffect, useState } from "react";

import { MobileNavigation } from "./MobileNavigation";
import { NavItem } from "./NavItem";


const navLinks = [
  { href: "/", name: "Home" },
  {
    name: "About", subItems:
      [{ href: "/about-idms", name: "About IDMS" },
      { href: "/about-okn", name: "About OKN" }]
  },
  { href: "/#features", name: "Features" },
  { href: "/showcases", name: "Showcase" },]


function NavbarTitle() {
  const chunk = (
    <>
      <img
        src="/images/okn-logo.svg"
        alt="logo"
        className="w-full h-12 mr-1 fill-white"
      />
    </>
  );

  return (
    <Link
      href="/"
      aria-label="Home page"
      className="flex items-center font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white"
    >
      {chunk}
    </Link>
  );
}

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modifierKey, setModifierKey] = useState();

  // useEffect(() => {
  //   setModifierKey(
  //     /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl "
  //   );
  // }, []);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 max-w-full
        ${isScrolled
          ? "bg-background/75 dark:bg-background-dark/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:dark:bg-background-dark/75"
          : "bg-background dark:bg-background-dark"
        }
      `}
    >
      <div className="mx-auto w-full md:px-8 max-w-screen-xl flex md:flex-col">
        <div className="mr-2 sm:mr-4 flex md:hidden inline">
          <MobileNavigation navigation={navLinks} />
        </div>
        <div className="flex flex-none justify-between ">
          <NavbarTitle />
          <div className="hidden md:flex ml-8">
            {navLinks.map((item, index) => (
              <NavItem item={item} key={item.name || index} />
            ))}
          </div>
      </div>
      </div>
    </header>
  );
}
