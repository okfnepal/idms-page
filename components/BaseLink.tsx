import Link from "next/link";
import { forwardRef, AnchorHTMLAttributes, ReactNode } from "react";

interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
  }

const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>((props, ref) => {
  const { href, children, ...rest } = props;
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

BaseLink.displayName = "BaseLink";

export { BaseLink };