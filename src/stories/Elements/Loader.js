import React from "react";

import { storiesOf } from "@storybook/react";

import Loader from "../../Elements/Loader";
import Wizard from "../../Components/Wizard";

storiesOf("Loader", module).add("Loader", () => (
  <div style={{ backgroundColor: "black", height: "100vh" }}>
    <Loader />
  </div>
));
