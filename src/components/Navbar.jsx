import React from "react";

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={styles.nav}>
      {["home", "projects", "faqs", "location", "contact"].map((item) => (
        <button key={item} onClick={() => scrollTo(item)} style={styles.button}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    zIndex: 999,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  button: {
    border: "none",
    background: "none",
    fontSize: "16px",
    cursor: "pointer",
    padding: "8px 12px"
  }
};

export default Navbar;
