import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  // ElementType -> quando passamos o nome do componente,
  // e nao a declaração do elemento (<RiDashboardLine />)
  icon: React.ElementType
  children: string
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}