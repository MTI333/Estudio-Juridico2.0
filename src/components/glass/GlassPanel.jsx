// src/components/glass/GlassPanel.jsx
import React from 'react';
import { useGlassRefraction } from './useGlassRefraction';
import './glass.css';

const BLUR_BEFORE = 3;
const BLUR_AFTER = 6;
const SATURATE = 1.7;
const DISPLACEMENT = 64;

const RefractionFilter = ({ id, width, height, slices }) => (
  <svg aria-hidden="true" className="glass-filter">
    <filter
      id={id}
      x="0"
      y="0"
      width={width}
      height={height}
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feGaussianBlur in="SourceGraphic" stdDeviation={BLUR_BEFORE} result="soft" />
      <feFlood floodColor="rgb(128 128 128)" result="still" />
      {slices.map((slice) => (
        <feImage
          key={slice.part}
          href={slice.href}
          x={slice.x}
          y={slice.y}
          width={slice.width}
          height={slice.height}
          preserveAspectRatio="none"
          result={slice.part}
        />
      ))}
      <feMerge result="map">
        <feMergeNode in="still" />
        {slices.map((slice) => (
          <feMergeNode key={slice.part} in={slice.part} />
        ))}
      </feMerge>
      <feDisplacementMap
        in="soft"
        in2="map"
        scale={DISPLACEMENT}
        xChannelSelector="R"
        yChannelSelector="G"
        result="bent"
      />
      <feGaussianBlur in="bent" stdDeviation={BLUR_AFTER} result="frost" />
      <feColorMatrix in="frost" type="saturate" values={String(SATURATE)} />
    </filter>
  </svg>
);

const GlassPanel = ({ as: Tag = 'div', radius = 18, pill = false, className = '', children, ...rest }) => {
  const { panel, filter, style } = useGlassRefraction({ pill, radius });
  const shape = pill ? 'glass--pill' : `glass--r${radius}`;

  return (
    <Tag ref={panel} className={`glass ${shape} ${className}`.trim()} style={style} {...rest}>
      {children}
      {filter && <RefractionFilter {...filter} />}
    </Tag>
  );
};

export default GlassPanel;
