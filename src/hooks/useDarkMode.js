import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode(props) {
  const [darkMode, setDarkMode] = useLocalStorage("darkmodetoggle", false);

  return [darkMode, setDarkMode];
}

export default useDarkMode;
