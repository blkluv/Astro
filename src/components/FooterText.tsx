import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const pjson = require("../../package.json");

function FooterText() {
  return (
    <div style={{ padding: "32px 0px" }}>
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
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        Version: {pjson.version}
      </a>{" "}
      - by Eric Suzuki
    </div>
  );
}

export default FooterText;
