import React from "react";

const Section = ({ id, title, children }) => {
  return (
    <section id={id} style={styles.section}>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

const styles = {
  section: {
    height: "100vh",
    paddingTop: "80px", // leave space for navbar
    paddingLeft: "40px",
    paddingRight: "40px",
    scrollMarginTop: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderBottom: "1px solid #ddd"
  }
};

export default Section;
