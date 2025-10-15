"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import indiaData from "./india-states.json"; // Place file in /public or /src

export default function IndiaMap() {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 600;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("background", "transparent");

    // Projection setup
    const projection = d3.geoMercator()
      .center([80, 22]) // Center roughly over India
      .scale(900)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);
    const states = feature(indiaData, indiaData.objects.states).features;

    // Tooltip div
    const tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.7)")
      .style("color", "#fff")
      .style("padding", "6px 10px")
      .style("border-radius", "4px")
      .style("font-size", "14px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Draw states
    svg.selectAll("path")
      .data(states)
      .join("path")
      .attr("d", path)
      .attr("fill", "#f1f5f9")
      .attr("stroke", "#64748b")
      .attr("stroke-width", 0.8)
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(150).style("opacity", 1);
        tooltip.html(`<strong>${d.properties.name}</strong><br/>${getInfo(d.properties.name)}`)
          .style("left", `${event.pageX + 8}px`)
          .style("top", `${event.pageY - 20}px`);

        d3.select(event.target)
          .attr("fill", "#f97316") // orange highlight
          .attr("stroke-width", 1.5);
      })
      .on("mousemove", (event) => {
        tooltip.style("left", `${event.pageX + 8}px`)
               .style("top", `${event.pageY - 20}px`);
      })
      .on("mouseout", (event) => {
        tooltip.transition().duration(200).style("opacity", 0);
        d3.select(event.target)
          .attr("fill", "#f1f5f9")
          .attr("stroke-width", 0.8);
      });

    return () => tooltip.remove();
  }, []);

  // Info for each state
  const getInfo = (name) => {
    const data = {
      "Goa": "Sunny beaches and serene Portuguese charm.",
      "Kerala": "Backwaters, greenery, and Ayurveda bliss.",
      "Darjeeling": "Misty hills and world-famous tea gardens.",
      "Uttarakhand": "Home to Char Dham and the mighty Himalayas.",
    };
    return data[name] || "Explore this beautiful destination.";
  };

  return <svg ref={svgRef} className="w-full h-auto" />;
}
