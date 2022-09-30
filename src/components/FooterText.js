import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

var pjson = require("../../package.json");
console.log(pjson.version);

function FooterText() {
  return (
    <div>
      <br />
      <br />
      <GitHubIcon
        style={{
          fontSize: "15px",
          position: "relative",
          top: "3px",
          right: "5px",
        }}
      />
      <a
        href="https://github.com/erikksuzuki/Astrology"
        target="_blank"
        style={{ color: "white" }}
      >
        Version: {pjson.version}
      </a>{" "}
      - by Eric Suzuki
    </div>
  );
}

export default FooterText;
