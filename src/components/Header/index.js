import React from "react";
import _ from "lodash";
import { CssBaseline, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import SearchBar from "material-ui-search-bar";
import HistoryIcon from "@material-ui/icons/History";
import HideOnScroll from "../HideOnScroll";

import "./styles.scss";

const Header = (props) => {
  const [value, setValue] = React.useState("");
  const [hideRecent, setHideRecent] = React.useState(false);
  const localData = JSON.parse(window.localStorage.getItem("history"));
  const handleChange = (val) => {
    setValue(val);
    setHideRecent(false);
  };

  /* istanbul ignore next */
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <SearchBar
              value={value}
              onChange={(newValue) => handleChange(newValue)}
              onCancelSearch={() => setValue("")}
              onRequestSearch={() => {
                if (_.isEmpty(localData) && value !== "") {
                  window.localStorage.setItem(
                    "history",
                    JSON.stringify([value])
                  );
                }

                if (localData?.length > 0) {
                  let shouldAdd = localData.includes(value);
                  if (!shouldAdd) {
                    window.localStorage.setItem(
                      "history",
                      JSON.stringify([value, ...localData])
                    );
                  }
                }
                props.search(value);
                setHideRecent(true);
              }}
              style={{ height: 40, margin: "0 auto", maxWidth: 1000 }}
            />
            {localData?.length > 0 && value.length > 0 && !hideRecent && (
              <div className="recent-search">
                {localData.map((res, i) => {
                  return (
                    <div className="item" key={i} onClick={() => setValue(res)}>
                      <HistoryIcon />
                      <span>{res}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
