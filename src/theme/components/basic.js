import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// Define the base style for the Card
const baseStyle = defineStyle({
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    alignItems: 'center',
    gap: 6,
});

// Define variants for the Card
const variants = {
    rounded: defineStyle({
        padding: 8,
        borderRadius: 'xl',
        boxShadow: 'xl',
    }),
    smooth: defineStyle({
        padding: 6,
        borderRadius: 'base',
        boxShadow: 'md',
    }),
};

// Define the default props for the Card
const defaultProps = {
    variant: 'smooth',
};

// Combine the styles into a style configuration
export const cardTheme = defineStyleConfig({
    baseStyle,
    variants,
    defaultProps,
});
