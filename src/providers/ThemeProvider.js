import { createContext, useContext, useState } from "react";

/* LIGHT THEME */
const lightTheme = {
  // Define your light theme colors, fonts, etc.
  colours: {
    primaryBrown: "rgb(129 83 13 / 30%)",
    secondaryBrown: "rgb(129 83 13 / 65%)",
    primaryRed: "rgb(204 5 5 / 100%)",
  },

  fonts: {
    primary: "Poppins",
    heading: "Bauhaus Std",
  },

  fontSize: {
    micro: 10,
    mini: 12,
    small: 14,
    medium: 16,
    large: 20,
    extraLarge: 24,
    superSize: 44,
  },

  fontWeight: {
    light: 400,
    normal: 500,
    bold: 600,
  },

  borderRadius: {
    smallCurve: 8,
    mediumCurve: 12,
    largeCurve: 14,
  },
};

/* DARK THEME */

const darkTheme = {
  colours: {
    primaryBrown: "rgb(129 83 13 / 38%)",
  },

  fonts: {
    primary: "Noto Sans",
    heading: "Noto Sans",
  },

  fontSize: {
    micro: 10,
    mini: 12,
    small: 14,
    medium: 16,
    large: 20,
    extraLarge: 24,
    superSize: 44,
  },

  fontWeight: {
    light: 400,
    normal: 500,
    bold: 600,
  },

  borderRadius: {
    smallCurve: 8,
    mediumCurve: 12,
    largeCurve: 14,
  },
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => console.log("change theme"),
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
