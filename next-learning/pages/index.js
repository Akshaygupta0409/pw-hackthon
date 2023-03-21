import Nav from "@/components/Nav";

import Fiels from "@/components/Fiels";
import React from "react";

function index() {
  return (
    <div>
      <Nav></Nav>
      <div className="grid gap-4 grid-cols-3 ml-9">
        <Fiels title="Email"/>
        <Fiels  title="Issue"/>
        <Fiels title="Phone.No"/>
      </div>
    </div>
  );
}

export default index;
