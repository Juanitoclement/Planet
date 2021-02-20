import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

import "./styles.scss";

function Card({ name, climate, terrain, keywords }) {
  const climateList = climate.split(",");
  const terrainList = terrain.split(",");

  const Highlight = ({ children }) => (
    <span
      style={{ color: "yellow", fontWeight: 500, textDecoration: "underline" }}
    >
      {children}
    </span>
  );

  return (
    <li className="card">
      <div className="card-content-container">
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
            <div className="category-wrapper">
              <span className="category">Climate: </span>
              {climateList.map((climateType, i) => (
                <span className="category-detail" key={i}>
                  {climateType}
                </span>
              ))}
            </div>

            <div className="category-wrapper">
              <span className="category">Terrain: </span>
              {terrainList.map((terrainType, i) => (
                <span className="category-detail blue" key={i}>
                  {terrainType}
                </span>
              ))}
            </div>

            <h2>
              <Highlighter
                searchWords={[keywords]}
                autoEscape={true}
                textToHighlight={name}
                highlightTag={Highlight}
              />
            </h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={name} className={`card-open-link`} />
    </li>
  );
}

export default Card;
