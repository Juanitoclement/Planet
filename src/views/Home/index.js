import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchPlanet } from "../../redux/modules/Planet/action";
import Card from "../../components/Card";
import Header from "../../components/Header";
import logoRocket from "../../assets/rocket.png";

import "./styles.scss";

const Home = (props) => {
  const baseUrl = `https://swapi.dev/api/planets/`;
  const { planet, nextPage } = props;

  const [hasMore, setHasMore] = useState(true);
  const [planetList, setPlanetList] = useState([]);
  const [url, setUrl] = useState(baseUrl);
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    props.fetchPlanet(url);
  }, []);

  useEffect(() => {
    console.log(planetList.length, planet, "check");
    if (planetList.length === 0) {
      setPlanetList(planet);
    }
    if (planetList.length > 0) {
      setPlanetList([...planetList, ...planet]);
    }
  }, [planet]);

  useEffect(() => {
    if (nextPage !== null || "") {
      setUrl(nextPage);
      setHasMore(true);
    }

    if (nextPage === null) {
      setHasMore(false);
    }
  }, [nextPage]);

  const fetchData = () => {
    props.fetchPlanet(url);
  };

  const refresh = () => {
    props.fetchPlanet(baseUrl);
    setPlanetList([]);
    setHasMore(true);
  };

  const search = (val) => {
    setPlanetList([]);
    setKeywords(val);
    props.fetchPlanet(baseUrl + `?search=${val}`);
  };

  return (
    <div id="scrollableDiv" className="home-wrapper">
      <Header search={search} />
      <InfiniteScroll
        dataLength={planetList.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Spinner color="primary" className="loader" />}
        endMessage={
          <div className="end-message">
            {!hasMore && planetList.length > 0 ? (
              <b>Yay! You have seen it all</b>
            ) : (
              <div className="not-found">
                <img src={logoRocket} />
                <h5>Not Found, Please Try Again!</h5>
                <Button outline color="primary" onClick={refresh}>
                  Refresh
                </Button>
              </div>
            )}
          </div>
        }
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={60}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        {planetList.map((res, i) => {
          return <Card data={res} key={i} keywords={keywords} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    planet: state.planet.data,
    nextPage: state.planet.nextPage,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPlanet,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
