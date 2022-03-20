import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, pageNumber }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="sx"
        width="4"
        colorScheme="orange"
        disabled
        _disabled={{
          bgColor: 'orange.500',
          cursor: 'default'
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="sx"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {pageNumber}
    </Button>
  )
}