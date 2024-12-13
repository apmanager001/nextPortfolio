'use client'
import React, { useEffect } from 'react'
import { ResponsiveChoropleth } from "@nivo/geo";
import worldFeatures from './world_countries.json'
import CustomTooltip from './customTooltip';

const Map = () => {
  const data = [
    { id: "FRA", value: ["08/02/2022 - 08/16/2022","12/03/2022 - 02/08/2023"], color: "#ff6347" }, // Tomato
    { id: "USA", value: "Living There", color: "#4682b4" }, // SteelBlue
    { id: "GTM", value: '04/04/2018 - 04/09/2018', color: "#3cb371" }, // MediumSeaGreen
    { id: "JPN", value: "05/24/2024 - 06/03/2024", color: "#ffd700" }, // Gold
    { id: "TWN", value: '06/04/2024 - 06/09/2024', color: "#ff4500" }, // OrangeRed
    { id: "TUR", value: "11/17/2023 - 11/23/2024", color: "#8a2be2" }, // BlueViolet
    { id: "KHM", value: '04/04/2015 - 04/20/2015', color: "#dda0dd" }, // Plum
    { id: "THA", value: '12/03/2019 - 12/16/2019', color: "#00ced1" }, // DarkTurquoise
    { id: "GRC", value: '11/24/2023 - 11/25/2023', color: "#ff69b4" }, // HotPink
    { id: "ITA", value: '12/02/2023 - 12/05/2023', color: "#cd5c5c" }, // IndianRed
    { id: "CYP", value: '11/28/2023', color: "#6495ed" }, // CornflowerBlue
    { id: "EGY", value: '11/29/2023 - 11/30/2023', color: "#ffdab9" }, // PeachPuff
    { id: "ESP", value: '12/07/2023 - 12/09/2023', color: "#7fffd4" }, // Aquamarine
    { id: "PRT", value: '12/10/2023 - 12/12/2023', color: "#ffd700" }, // Gold
    { id: "CAN", value: "Frequently", color: "#adff2f" }, // GreenYellow
  ];

  const defs = data.map((d) => ({
    id: d.id,
    type: "linearGradient",
    colors: [
      { offset: 0, color: d.color },
      { offset: 100, color: d.color },
    ],
  }));

  const fill = data.map(d => ({ match: { id: d.id }, id: d.id }));
  return (
    <div className="h-[600px] w-full mb-5">
      <ResponsiveChoropleth
        data={data}
        features={worldFeatures.features}
        margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={defs}
        fill={fill}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -40,
            itemsSpacing: 0,
            itemWidth: 120,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#eee",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: { itemTextColor: "#777", itemOpacity: 1 },
              },
            ],
            data: data.map((d) => ({
              id: d.id,
              label:
                worldFeatures.features.find((f) => f.id === d.id)?.properties
                  .name || d.id,
              color: d.color,
            })),
          },
        ]}
        tooltip={({ feature }) => { 
            const countryData = data.find(d => d.id === feature.id); 
            if (!countryData) return null; 
            return <CustomTooltip feature={feature} />; 
        }}
      />
      <div className="text-center text-gray-500">
        Total Countries Visited:{' '}{data.length}
      </div>
    </div>
  );
}

export default Map