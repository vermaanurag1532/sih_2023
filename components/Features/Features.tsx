import { features } from "@/constants/featuers";
import classes from "./Features.module.css";
import Image from "next/image";
import clsx from "clsx";
import Chart from "react-google-charts";
import { useState } from "react";
export const options = {
  chart: {
    title: "Dustbin data",
    subtitle: "Overall data shown as below",
  },
};
const Features = () => {
  const [dustbinData, setDustbinData] = useState<{
    d1: number;
    d2: number;
    d3: number;
  }>({
    d1: 0,
    d2: 0,
    d3: 0,
  });

  return (
    <section className={classes.section} id="features">
      <div className={classes.main}>
        <h1 className={clsx(classes.heading, "gradient")}>Applications</h1>
        <div className={classes.chartmain}>
          <Chart
            className={classes.chart}
            chartType="Bar"
            width="600px"
            height="400px"
            data={[
              ["Type", "Level"],
              ["Biodegradable", dustbinData.d1],
              ["NonNiodegradable", dustbinData.d2],
              ["Undetected", dustbinData.d3],
            ]}
            options={options}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
