import React from 'react';
import {
  Accordion,
  AccordionProps,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Flex,
  Box,
  Text,
  TextProps,
} from '@chakra-ui/react';

type Props = AccordionProps & {
  title: string;
  textProps?: TextProps;
  variant?: 'box' | 'header';
};

/** A single expandable section in the accordion style */
const SingleAccordion: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  children,
  textProps = {},
  variant = 'box',
  ...accordionProps
}: Props) => (
  <Accordion
    allowToggle
    borderWidth="0"
    color={variant === 'box' ? 'text.secondary' : 'text.primary'}
    reduceMotion
    {...accordionProps}
  >
    <AccordionItem border="none">
      <AccordionButton
        pl={variant === 'header' ? '0' : undefined}
        pt={variant === 'header' ? '0' : undefined}
        pb={variant === 'header' ? '4' : undefined}
        _hover={variant === 'header' ? { background: 'unset' } : undefined}
      >
        <Flex w="full" gap="2" alignItems="center">
          <Text
            fontSize={variant === 'box' ? 'sm' : 'lg'}
            mb="0"
            {...textProps}
          >
            {title}
          </Text>
          <Box>
            <AccordionIcon fontSize={variant === 'header' ? '2xl' : 'xl'} />
          </Box>
        </Flex>
      </AccordionButton>
      <AccordionPanel p={variant === 'header' ? '0' : undefined}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default SingleAccordion;
