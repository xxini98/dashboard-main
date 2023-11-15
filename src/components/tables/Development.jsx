import {
    Table,
    TableCaption,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Image,
    HStack,
    Progress,
    Text,
    Flex,
    Box,
} from '@chakra-ui/react';
import apple from '../../assets/images/tables/apple.svg';
import android from '../../assets/images/tables/android.svg';
import windows from '../../assets/images/tables/windows.svg';

const data = [
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 100,
    },
    {
        title: 'Marketplace2',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
        ],
        number: 10,
        percentage: 30,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
    {
        title: 'Marketplace',
        image: [
            {
                src: apple,
                alt: 'apple',
            },
            {
                src: android,
                alt: 'android',
            },
            {
                src: windows,
                alt: 'windows',
            },
        ],
        number: 25.4,
        percentage: 75.5,
    },
];

const Development = () => {
    return (
        <TableContainer>
            {/*  size={['sm', 'md', 'lg']} */}
            <Table variant="simple">
                <TableCaption>Development Table</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Title</Th>
                        <Th>Title</Th>
                        <Th isNumeric>Title</Th>
                        <Th>Title</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index}>
                            <Td>{item.title}</Td>
                            <Td>
                                <HStack spacing={1} alignItems={'center'}>
                                    {item.image.map((images, i) => (
                                        <Image key={i} src={images.src} alt={images.alt} />
                                    ))}
                                </HStack>
                            </Td>
                            <Td isNumeric>{item.number}</Td>
                            <Td>
                                <Flex alignItems={'center'}>
                                    <Box w="32px" textAlign={'right'}>
                                        {item.percentage}
                                    </Box>
                                    <Text variant="txt134" color="#777">
                                        %
                                    </Text>
                                    <Progress w="63px" ml="10px" value={item.percentage} />
                                </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default Development;
