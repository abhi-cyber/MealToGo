import React from "react";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);
