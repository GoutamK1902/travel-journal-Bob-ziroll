import React from "react";
import Entry from "./Entry";
import data from "../data";

export default function AllEntries() {
  return (
    <>
      {data &&
        data.map((entry) => (
          <Entry
            key={entry.id}
            // entry={entry}
            {...entry} // Spread object - using spread operator- no longer need to specify props.entry.name =>>> props.name
            wordlimit={20}
          />
        ))}
    </>
  );
}
