import React, { useState } from "react";
import { Collapse } from "reactstrap";
import Highlighter from "react-highlight-words";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { commaSeparators } from "../../utils/helper";

import "./styles.scss";

const Card = ({ data, keywords }) => {
  const {
    name,
    climate,
    residents,
    gravity,
    population,
    terrain,
    diameter,
    films,
    orbital_period,
    rotation_period,
    surface_water,
  } = data;
  const [isExpand, setExpand] = useState(false);

  const expandMore = () => {
    setExpand(!isExpand);
  };

  const Highlight = ({ children }) => (
    <span style={{ color: "blue" }}>{children}</span>
  );

  return (
    <div className="planet-container">
      <div className="planet-header">
        <h4>Planet: </h4>
        <span className="name">
          <Highlighter
            searchWords={[keywords]}
            autoEscape={true}
            textToHighlight={name}
            highlightTag={Highlight}
          />
        </span>
        {/*<span className="detail">Detail</span>*/}
      </div>
      <div className="planet-body">
        <div>
          <span>Climate: </span>
          {climate}
        </div>
      </div>
      <div className="planet-body">
        <div>
          <span>Terrain: </span>
          {terrain}
        </div>
      </div>
      <div className="planet-body">
        <div>
          <span>Population: </span>
          {commaSeparators(population)}
        </div>
      </div>
      <div className="planet-body">
        <div>
          <span>Residents: </span>
          {residents.length}
        </div>
        {residents.length > 0 && (
          <div>
            <span>Show</span>
            <ChevronRightIcon />
          </div>
        )}
      </div>
      <div className="planet-body">
        <div>
          <span>Films: </span>
          {films.length}
        </div>
        {films.length > 0 && (
          <div>
            <span>Show</span>
            <ChevronRightIcon />
          </div>
        )}
      </div>
      <div className="show-more" onClick={expandMore}>
        {isExpand ? <span>Show Less</span> : <span>Show More</span>}
      </div>
      <Collapse isOpen={isExpand}>
        <div className="collapsible-body">
          <div className="detail">
            <div>
              <span>Gravity: </span>
              {gravity}
            </div>
          </div>
          <div className="detail">
            <div>
              <span>Diameter: </span>
              {commaSeparators(diameter)}
            </div>
          </div>
          <div className="detail">
            <div>
              <span>Surface Water: </span>
              {surface_water}
            </div>
          </div>
          <div className="detail">
            <div>
              <span>Orbital Period: </span>
              {orbital_period}
            </div>
          </div>
          <div className="detail">
            <div>
              <span>Rotation Period: </span>
              {rotation_period}
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Card;
