import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Gnb from './Gnb';
import { Box, Heading } from '@chakra-ui/react';
import DividerCus from '../../common/DividerCus';

const Header = () => {
    return (
        <HeaderWapper left={{ base: '-290px', lg: '0' }}>
            <HeaderStyle as="h1" id="logo">
                <Link to="/">
                    <span>horizon</span> free
                </Link>
            </HeaderStyle>
            <DividerCus />
            <Gnb />
        </HeaderWapper>
    );
};

const HeaderStyle = styled(Heading)`
    a {
        display: block;
        transition: color 0.3s ease-in-out;
        text-transform: uppercase;
        text-align: center;
        font-size: 26px;
        /* font-family: 'Poppins', sans-serif; */
        color: var(--primary-dark);
        span {
            font-weight: 700;
        }
        &:hover {
            color: var(--primary);
        }
    }
`;

const HeaderWapper = styled(Box)`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 290px;
    padding: 50px 32px;
    background-color: var(--white);
    transition: left 0.2s ease-in-out;
`;

export default Header;
