import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../theme';

export const SvgFigure = () => (
  <Svg>
    <Path
      fill={COLORS.SECOND_COLOR}
      fillOpacity="2"
      d="M0,96L48,128C96,160,192,224,288,256C384,288,480,288,576,282.7C672,277,768,267,864,234.7C960,203,1056,149,1152,149.3C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    />
  </Svg>
);
