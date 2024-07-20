import React from "react";
import { USA } from "@react-simple-maps/usa";

function ComposableMap() {
  const values = {
    size: "80%",

    ok: {
      color: "blue"
    },
    nj: {
      color: "orange"
    },
    ca: {
      color: "blue"
    },
    ny: {
      color: "orange"
    },
    pa: {
      color: "orange"
    },
    mi: {
      color: "blue"
    },
    ks: {
      color: "#FF7043"
    },
    co: {
      color: "orange"
    },
    in: {
      color: "#FF7043"
    },
    wa: {
      color: "#FF7043"
    },
    il: {
      color: "orange"
    }
  };

  return (
    <div className="ComposableMap" style={{ width: 900, height: 600 }}>
      <USA values={values} />
    </div>
  );
}

export default ComposableMap;
