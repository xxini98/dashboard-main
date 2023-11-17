import { MoonIcon } from '@chakra-ui/icons';
import { Card, CardBody, Flex, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

const MiniStatistics = () => {
    return (
        <Card>
            <CardBody>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Flex
                        w={'56px'}
                        h={'56px'}
                        bg={'gray.100'}
                        mr={'18px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderRadius={'50%'}
                    >
                        <MoonIcon />
                    </Flex>
                    <Stat>
                        <StatLabel color={'#A3AED0'}>Collected Fees</StatLabel>
                        <StatNumber fontSize={'24px'}>$0.00</StatNumber>
                        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                    </Stat>
                    <Flex
                        w={'56px'}
                        h={'56px'}
                        bg={'gray.100'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderRadius={'50%'}
                    >
                        <MoonIcon />
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default MiniStatistics;
