import React from "react";
import {
  SimpleGrid,
  Flex,
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import { MoonIcon } from "@chakra-ui/icons";

import MiniStatistics from "../components/home/MiniStatistics";
import IconBox from "../components/icon/IconBox";
import LineChart from "../components/charts/Linechart";
import {
  lineChartDataOverallRevenue,
  lineChartOptionsOverallRevenue,
} from "../components/charts/chartData";
import ApexChart from "../components/charts/ColumnChart";

const boxBg = "secondary.500";

const Home = () => {
  return (
    <Layout title="DashBoard" pagename="DashBoard">
      {/* <SimpleGrid columns={[sm:1, md:2, lg:3, '2xl':6]} spacing={10}> */}
      <SimpleGrid columns={[1, 2, 3, null, 6]} spacing={10}>
        <MiniStatistics
          name="Earnings"
          value="$340.5"
          startCont={
            <IconBox w="56px" h="56px" bg={boxBg} icon={<MoonIcon />} />
          }
        />
        <MiniStatistics
          name="Spend this month"
          value="$642.39"
          startCont={
            <IconBox w="56px" h="56px" bg={boxBg} icon={<MoonIcon />} />
          }
        />
        <MiniStatistics name="Sales" value="$574.34" growth="+23%" />
        <MiniStatistics
          name="Your Balance"
          value="$1,000"
          endCont={
            <Flex
              w={"56px"}
              h={"56px"}
              bg={"gray.100"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50%"}
            >
              <MoonIcon />
            </Flex>
          }
        />
        <MiniStatistics name="New Tasks" value="145" />
        <MiniStatistics name="Total Projects" value="$2433" />
      </SimpleGrid>

      {/* 그래프 들어가는 자리 */}
      <SimpleGrid columns={[1, 2]} spacing={"20px"} mt={"20px"}>
        <Card>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
            <LineChart
              chartData={lineChartDataOverallRevenue}
              chartOptions={lineChartOptionsOverallRevenue}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>
          <CardBody>
            <ApexChart />
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
