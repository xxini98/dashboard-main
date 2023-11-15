import React from 'react';
import { Grid, GridItem, Card, CardHeader, Heading, CardBody } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import Development from '../components/tables/Development';
import Check from '../components/tables/Check';

const Tables = () => {
    return (
        <Layout title="Tables" pagename={'Tables'}>
            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem colSpan={1}>
                    <Card h={'100%'}>
                        <CardHeader>
                            <Heading size="md">Development Table</Heading>
                        </CardHeader>

                        <CardBody py={2} px={5}>
                            <Development />
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card h={'100%'}>
                        <CardHeader>
                            <Heading size="md">Client Report</Heading>
                        </CardHeader>
                        <CardBody>
                            <Check />
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card h={'100%'}>
                        <CardHeader>
                            <Heading size="md">4-Column Table</Heading>
                        </CardHeader>

                        <CardBody py={2} px={5}>
                            <Development />
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card h={'100%'}>
                        <CardHeader>
                            <Heading size="md">Complex Table</Heading>
                        </CardHeader>

                        <CardBody py={2} px={5}>
                            <Development />
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </Layout>
    );
};

export default Tables;
