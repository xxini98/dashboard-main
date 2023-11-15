import { CheckIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Checkbox } from '@chakra-ui/react';

// Data array outside of the component
const tableData = [
    { checked: true, label: 'millimetres (mm)', multiplier: 25.4, icon: <CloseIcon /> },
    { checked: false, label: 'centimetres (cm)', multiplier: 30.48, icon: <InfoIcon /> },
    { checked: false, label: 'metres (m)', multiplier: 0.91444, icon: <CheckIcon /> },
    { checked: true, label: 'millimetres (mm)', multiplier: 25.4, icon: <CloseIcon /> },
    { checked: false, label: 'centimetres (cm)', multiplier: 30.48, icon: <InfoIcon /> },
    { checked: false, label: 'metres (m)', multiplier: 0.91444, icon: <CheckIcon /> },
    { checked: true, label: 'millimetres (mm)', multiplier: 25.4, icon: <CloseIcon /> },
    { checked: false, label: 'centimetres (cm)', multiplier: 30.48, icon: <InfoIcon /> },
    { checked: false, label: 'metres (m)', multiplier: 0.91444, icon: <CheckIcon /> },
];

const Check = () => {
    return (
        <TableContainer>
            <Table variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead pos={'sticky'}>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((row, index) => (
                        <Tr key={index}>
                            <Td>
                                <Checkbox defaultChecked={row.checked}>Checkbox</Checkbox>
                            </Td>
                            <Td>
                                {row.icon} {row.label}
                            </Td>
                            <Td isNumeric>{row.multiplier}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default Check;
