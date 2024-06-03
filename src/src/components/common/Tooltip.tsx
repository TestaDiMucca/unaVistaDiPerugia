import { Tooltip as DefaultTooltip, TooltipProps } from '@chakra-ui/react';
import React from 'react';

type Props = TooltipProps;

const Tooltip: React.FC<Props> = ({ children, ...tooltipProps }) => (
  <DefaultTooltip hasArrow {...tooltipProps}>
    {children}
  </DefaultTooltip>
);

export default Tooltip;
