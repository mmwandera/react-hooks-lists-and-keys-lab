import React from "react";

// In the NavBar component, there is an array with three strings representing each link on the page. For each of those strings, create an <a> tag that looks like this:
// <a href="#home">home</a>
// Make sure each <a> element also gets a unique key prop.

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link) => (
    <a href={`#${link}`} key={link}>{link}</a>
  ))

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {linkElements}
    </nav>
  );
}

export default NavBar;
