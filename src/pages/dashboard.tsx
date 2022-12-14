import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic"

import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from 'apexcharts';
import { Header } from "../components/Header";

// lazyloading -> sem passar na camada backend next
// somente carrega pelo browser
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  colors: [theme.colors.orange[500], ' #546E7A', '#E91E63'],
  xaxis: {
    type: 'datetime',
    axisTicks: { color: theme.colors.orange[500] },
    categories: [
      '2022-03-18T00:00:00.000Z',
      '2022-03-19T00:00:00.000Z',
      '2022-03-20T00:00:00.000Z',
      '2022-03-21T00:00:00.000Z',
      '2022-03-22T00:00:00.000Z',
      '2022-03-23T00:00:00.000Z',
      '2022-03-24T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text>Week s subscription</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
          >
            <Text>Conversion %</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}