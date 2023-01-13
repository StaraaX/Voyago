import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

const FullWidth = styled.div`
  width: 99vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;
const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Company = styled.div`
  position: relative;
  width: ${(props) => props.scale * 75}px;
  height: ${(props) => props.scale * 75}px;
`;

const Circle = styled.div`
  position: absolute;
  transform: scale(0.5);
  object-position: center center;
  will-change: transform, opacity;
  width: ${(props) => props.scale * 200}px;
  height: ${(props) => props.scale * 200}px;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Logo = styled.img`
  display: block;
  /* https://stackoverflow.com/questions/24843676/how-can-i-fit-a-square-html-image-inside-a-circle-border */
  /* just making it < 70.7% */
  object-fit: contain;
  width: 80%;
  height: 80%;
`;

const Companies = ({ size, onStartPerformance, onEndPerformance }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  const selected = new Set();
  while (selected.size < 25 && selected.size < countries.length) {
    const index = Math.floor(Math.random() * 250);
    const country = countries[index];
    selected.add(country);
  }
  const icons = Array.from(selected).map((country) => country.flags.png);

  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }
  return (
    <FullWidth>
      <div className="max-w-xl mt-10 md:mx-auto sm:text-center lg:max-w-2xl md:mt-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">{"D"}</span>
          </span>
          {""}
          estinations populaires
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          VOYAGO propose une large sélection de destinations à travers le monde
          pour répondre aux besoins et aux souhaits de nos clients. Nous avons
          des experts en voyage pour des destinations populaires comme les îles
          tropicales, les villes européennes, les parcs nationaux américains et
          bien plus encore. Nous travaillons avec les meilleures entreprises
          locales pour vous offrir des options de voyage uniques et
          personnalisées pour chaque destination.
        </p>
      </div>
      <Height height={300}>
        <Marquee
          key={key}
          velocity={12}
          //scatterRandomly
          minScale={0.7}
          resetAfterTries={200}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(8, Number).map((id) => (
            <Motion
              key={`marquee-example-company-${id}`}
              initDeg={randomIntFromInterval(0, 360)}
              direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
              velocity={10}
              radius={scale * 100}
            >
              <Company scale={scale}>
                <Circle scale={scale}>
                  <Logo src={icons[id]} alt="" />
                </Circle>
              </Company>
            </Motion>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

export default React.memo(withSize()(Companies));
