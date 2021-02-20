import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./styles.scss";
import { commaSeparators } from "../../utils/helper";

export function Item({ id, data }) {
  if (data.length === 0) {
    window.location.replace("/");
  }
  const {
    climate,
    terrain,
    name,
    residents,
    gravity,
    population,
    diameter,
    films,
    orbital_period,
    rotation_period,
    surface_water,
  } = data.find((item) => item.name === id);

  const climateList = climate.split(",");
  const terrainList = terrain.split(",");
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div
          className="card-content"
          layoutId={`card-container-${name}`}
        >
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${name}`}
          >
            <img
              className="card-image"
              src={`https://source.unsplash.com/1200x450/?${terrain.replace(
                / /g,
                ""
              )}`}
              alt=""
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${name}`}
          >
            <div>
              <span className="category">Climate: </span>
              {climateList.map((climateType, i) => (
                <span className="category-detail" key={i}>
                  {climateType}
                </span>
              ))}
            </div>

            <div>
              <span className="category">Terrain: </span>
              {terrainList.map((terrainType, i) => (
                <span className="category-detail blue" key={i}>
                  {terrainType}
                </span>
              ))}
            </div>

            <h2>{name}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <div>
              <span className="category">Total Resident: </span>
              <span className="category-detail green">{residents.length}</span>
            </div>
            <div>
              <span className="category">Total Films: </span>
              <span className="category-detail green">{films.length}</span>
            </div>
            <div>
              <span className="category">Gravity: </span>
              <span className="category-detail clear">{gravity}</span>
            </div>
            <div>
              <span className="category">Population: </span>
              <span className="category-detail yellow">
                {commaSeparators(population)}
              </span>
            </div>
            <div>
              <span className="category">Diameter: </span>
              <span className="category-detail yellow">
                {commaSeparators(diameter)}
              </span>
            </div>
            <div>
              <span className="category">Orbital Period: </span>
              <span className="category-detail yellow">
                {commaSeparators(orbital_period)}
              </span>
            </div>
            <div>
              <span className="category">Rotation Period: </span>
              <span className="category-detail yellow">
                {commaSeparators(rotation_period)}
              </span>
            </div>
            <div>
              <span className="category">Surface water: </span>
              <span className="category-detail yellow">
                {commaSeparators(surface_water)}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
