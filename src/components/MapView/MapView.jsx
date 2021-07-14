import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  MapViewContainer,
  MapViewWrapper,
  MapWrapper,
  PaginationWrapper,
  SearchBar,
  SearchBarWrapper,
  SearchBox,
  SearchBoxWrapper,
  SearchWrap,
  YellowStrip,
} from "./MapViewStyles";
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import SearchCard from "../SearchCard/SearchCard";
import { Stores } from "../../data/users";
import { easeCubic } from "d3-ease";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "../UI Button/ButtonStyles";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#F67F2A",
    },
  },
}));

const MapView = () => {
  const [state, setState] = useState({ currentPage: 1, itemsPerPage: 3 });

  const { currentPage, itemsPerPage } = state;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = Stores.slice(firstIndex, lastIndex);

  const pgNumbers = [];

  for (let i = 1; i <= Math.ceil(Stores.length / itemsPerPage); i++) {
    pgNumbers.push(i);
  }

  function handleClick(e, val) {
    setState((state) => {
      return {
        ...state,
        currentPage: val,
      };
    });
  }

  const [viewport, setViewport] = useState({
    latitude: 40.712776,
    longitude: -74.005974,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  const mapRef = useRef();

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const classes = useStyles();

  const onClick = (store) => {
    setViewport({
      ...viewport,
      latitude: store["storeCoords"]["latitude"],
      longitude: store["storeCoords"]["longitude"],
      zoom: 14,
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    });
  };

  return (
    <>
      <MapViewContainer id="map">
        <MapViewWrapper>
          <MapWrapper>
            <ReactMapGL
              ref={mapRef}
              {...viewport}
              mapboxApiAccessToken="pk.eyJ1IjoiYWFrYXNoMDEiLCJhIjoiY2twd3kzMjlhMGE1aTJxb2JkNDl5M25tbSJ9.moKiX-WybqofDbRR67JJrw"
              onViewportChange={handleViewportChange}
              mapStyle={"mapbox://styles/mapbox/streets-v11"}
            >
              <Marker
                latitude={viewport.latitude}
                longitude={viewport.longitude}
              >
                <FaMapMarkerAlt size="40px" color="#ffd600" />
              </Marker>
            </ReactMapGL>
          </MapWrapper>
          <SearchBoxWrapper>
            <SearchBarWrapper>
              <input
                type="text"
                placeholder="Enter a location"
                name="search"
                style={{
                  padding: "5px",
                  width: "250px",
                  height: "34px",
                  background: "#ffffff",
                  border: "0.2px solid #000000",
                }}
              />
              <button
                type="submit"
                style={{
                  height: "35px",
                  width: "102px",
                  background: "#FCD804",
                  border: "none",
                  marginLeft: "20px",
                }}
              >
                SEARCH
              </button>
            </SearchBarWrapper>
            <SearchBox>
              {(window.screen.width <= 768 ? currentItems : Stores).map(
                (store, i) => (
                  <SearchCard
                    clickHandler={() => onClick(store)}
                    name={store["CustomerName"]}
                    address={store["Address"]}
                    phone={store["CompanyName"]}
                    coords={store["storeCoords"]}
                  />
                )
              )}
            </SearchBox>
            <PaginationWrapper>
              <Pagination
                classes={{ ul: classes.ul }}
                count={pgNumbers.length}
                page={currentPage}
                variant="outlined"
                onChange={handleClick}
              />
            </PaginationWrapper>
          </SearchBoxWrapper>
        </MapViewWrapper>
      </MapViewContainer>
      <YellowStrip>
        {"Can't find a store ?"}
        <Button
          width="140px"
          height="30px"
          fontSize="16px"
          noHover
          special
          color="#fff"
          marginL="15px"
          paddingT="0"
        >
          Click Here
        </Button>
      </YellowStrip>
    </>
  );
};

export default MapView;
