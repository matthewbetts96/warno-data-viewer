import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const colours = [
  "#00FF00",
  "#FF0000",
  "#FF9900",
  "#000033",
  "#FF0066",
  "#999999",
  "#000000",
  "#00FF99",
  "#00FFFF",
  "#99FF00",
];

export const ArmourRadar = ({ units }) => {
  if (!units && !units.length) {
    return <></>;
  }
  const bar = units.map((i) => {
    const {
      ArmorDescriptorFront = 0,
      ArmorDescriptorRear = 0,
      ArmorDescriptorSides = 0,
      ArmorDescriptorTop = 0,
      ClassNameForDebug = "",
    } = i;
    return {
      name: ClassNameForDebug,
      Front: ArmorDescriptorFront,
      Rear: ArmorDescriptorRear,
      Sides: ArmorDescriptorSides,
      Top: ArmorDescriptorTop,
    };
  });

  const data = [
    units.reduce((previousValue, currentValue) => {
      const { ClassNameForDebug, ArmorDescriptorFront } = currentValue;
      return {
        ...previousValue,
        armour: "Front",
        [ClassNameForDebug]: ArmorDescriptorFront,
      };
    }, {}),
    units.reduce((previousValue, currentValue) => {
      const { ClassNameForDebug, ArmorDescriptorRear } = currentValue;
      return {
        ...previousValue,
        armour: "Rear",
        [ClassNameForDebug]: ArmorDescriptorRear,
      };
    }, {}),
    units.reduce((previousValue, currentValue) => {
      const { ClassNameForDebug, ArmorDescriptorSides } = currentValue;
      return {
        ...previousValue,
        armour: "Sides",
        [ClassNameForDebug]: ArmorDescriptorSides,
      };
    }, {}),
    units.reduce((previousValue, currentValue) => {
      const { ClassNameForDebug, ArmorDescriptorTop } = currentValue;
      return {
        ...previousValue,
        armour: "Top",
        [ClassNameForDebug]: ArmorDescriptorTop,
      };
    }, {}),
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="armour" />
        <PolarRadiusAxis angle={0} domain={[0, 25]} />
        {bar.map(({ name }, idx) => {
          return (
            <Radar
              key={idx}
              name={name}
              dataKey={name}
              stroke={colours[idx]}
              fill={colours[idx]}
              fillOpacity={0.6}
            />
          );
        })}
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ArmourRadar;
