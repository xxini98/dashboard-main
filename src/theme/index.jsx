import { extendTheme } from '@chakra-ui/react';
import { textTheme } from './components/text';
import { tableTheme } from './components/table';
import { progressTheme } from './components/progress';
import { checkboxTheme } from './components/checkbox';
import { cardTheme } from './components/card';
// import { containerTheme } from './components/container';

const theme = extendTheme({
    components: {
        // 컴포넌트 : 각 테마의 마지막 expoert const 이름
        Text: textTheme,
        Table: tableTheme,
        Progress: progressTheme,
        Checkbox: checkboxTheme,
        Card: cardTheme,
    },
    styles: {
        global: {
            html: {
                width: '100%',
                height: '100%',
            },
            body: {
                bg: 'white',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: '400',
                color: '#2B3674',
            },
            // styles for the `a`
            a: {
                color: '#2B3674',
                _hover: {
                    textDecoration: 'none !important',
                },
            },
            li: {
                listStyle: 'none',
            },
        },
    },
    space: {
        4: '25px',
    },
    colors: {
        primary: '#4318FF',
        globalBg: '#F4F7FE',
        secondary_grey_700: '#707EAE',
        Secondary_Grey_600: '#A3AED0',
    },
    breakpoints: {
        sm: '480px',
        md: '720px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
    },
});

export default theme;
