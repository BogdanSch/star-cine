import React from "react";

export default function Section(props) {
  return (
    <section className={props.className} id={props.id}>
      <div className="container">{props.children}</div>
    </section>
  );
}
