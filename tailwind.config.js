const THEME = {
  COLORS: {
    primary: "#3B82F6",
    secondary: "#FBCFE8",
    disabled: "#E0E0E0",
    disabledText: "rgba(74, 74, 89, 0.5)",
    inputPlaceholder: "rgba(74, 74, 89, 0.3)",
    inputBorderHover: "#C4C4C4",
    light: "#fff",
    dark: "#194350",
  },
};

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Ubuntu"],
      serif: ["Ubuntu"],
    },
    extend: {
      colors: {
        primary: {
          light: THEME.COLORS.primary,
          DEFAULT: THEME.COLORS.primary,
          dark: THEME.COLORS.primary,
        },
        secondary: {
          light: THEME.COLORS.secondary,
          DEFAULT: THEME.COLORS.secondary,
          dark: THEME.COLORS.secondary,
        },
        disabled: {
          light: THEME.COLORS.disabled,
          DEFAULT: THEME.COLORS.disabled,
          dark: THEME.COLORS.disabled,
        },
        disabledText: {
          light: THEME.COLORS.disabledText,
          DEFAULT: THEME.COLORS.disabledText,
          dark: THEME.COLORS.disabledText,
        },
        inputPlaceholder: {
          light: THEME.COLORS.inputPlaceholder,
          DEFAULT: THEME.COLORS.inputPlaceholder,
          dark: THEME.COLORS.inputPlaceholder,
        },
        inputText: {
          light: THEME.COLORS.dark,
          DEFAULT: THEME.COLORS.dark,
          dark: THEME.COLORS.dark,
        },
        inputBorder: {
          light: THEME.COLORS.disabled,
          DEFAULT: THEME.COLORS.disabled,
          dark: THEME.COLORS.disabled,
        },
        inputBorderHover: {
          light: THEME.COLORS.inputBorderHover,
          DEFAULT: THEME.COLORS.inputBorderHover,
          dark: THEME.COLORS.inputBorderHover,
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
        "disabled",
      ],
    },
  },
  plugins: [],
};
