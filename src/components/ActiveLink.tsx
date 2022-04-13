import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement // needs to be any react element
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as)))) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {/* clone element */}
      {cloneElement(children, {
        color: isActive ? 'orange.500' : 'gray.50'
      })}
    </Link>
  )
}
