import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";

import { BaseLink } from "./BaseLink";

interface SubItem {
  name: string;
  href: string;
}

interface Item {
  name: string;
  href?: string;
  subItems?: SubItem[];
}

interface NavItemProps {
  item: Item;
}

export function NavItem({ item }: NavItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setshowDropdown] = useState<boolean>(false);

  const timeoutDuration = 200;
  let timeoutId: NodeJS.Timeout;

  const openDropdown = () => {
    clearTimeout(timeoutId);
    setshowDropdown(true);
  };
  const closeDropdown = () => {
    timeoutId = setTimeout(() => setshowDropdown(false), timeoutDuration);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        onClick={() => setshowDropdown(!showDropdown)}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        {Object.prototype.hasOwnProperty.call(item, "href") ? (
          <Link
            href={item.href || '/'}
            className="inline-flex items-center pl-8 pt-1 text-base font-medium hover:text-slate-600"
          >
            {item.name}
          </Link>
        ) : (
          <div className="inline-flex items-center mr-2  pl-8 pt-1 text-base font-medium hover:text-slate-600 fill-slate-500 hover:fill-slate-600">
            {item.name}
          </div>
        )}
        {Object.prototype.hasOwnProperty.call(item, "subItems") ? <img src="/images/arrow-down.svg" alt="down arrow" className="inline" /> : null}
      </Menu.Button>

      {Array.isArray(item.subItems) && item.subItems.length > 0 && (
        <Transition
          as={Fragment}
          show={showDropdown}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-5"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-5"
        >
          <Menu.Items
            // className="absolute top-5 flex flex-col dark:bg-slate-900/95 backdrop-blur"
            className="absolute w-28 top-5 flex flex-col mt-4 bg-white backdrop-blur"

            ref={dropdownRef}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            {item.subItems.map((subItem, index) => (
              <Menu.Item
                key={subItem.name || index}
                // onClick={() => setshowDropdown(false)}
              >
                <BaseLink
                  href={subItem.href}
                  className="border-teal-300 border-t-2 flex pb-2 px-1 pt-1 text-sm font-medium hover:text-slate-600"
                >
                  <p className="mx-auto">

                    {subItem.name}
                  </p>
                </BaseLink>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      )}
    </Menu>
  );
}

export default NavItem;
