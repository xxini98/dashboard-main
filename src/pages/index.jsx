import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import MiniStatistics from '../components/home/MiniStatistics';

const Home = () => {
    return (
        <Layout title="DashBoard" pagename="DashBoard">
            {/* <SimpleGrid columns={[sm:1, md:2, lg:3, '2xl':6]} spacing={10}> */}
            <SimpleGrid columns={[1, 2, 3, null, 6]} spacing={10}>
                <MiniStatistics />
                <MiniStatistics />
                <MiniStatistics />
                <MiniStatistics />
                <MiniStatistics />
                <MiniStatistics />
            </SimpleGrid>
        </Layout>
    );
};

export default Home;
