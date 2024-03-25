const colors = (mode: any) => ({
  ...(mode === "dark"
    ? {
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
        },
        blueAccent: {
          100: "#23395d",
          200: "#203354",
          300: "#1c2e4a",
          400: "#192841",
          500: "#152238",
          600: "#fff",
          700: "fff",
          800: "#fff",
        },
      }
    : {
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
        },
        blueAccent: {
          100: "#FFFFFF",
          200: "#FAF9F6",
          300: "#F9F6EE",
          400: "#F5F5DC",
          500: "#EDEADE",
          600: "#000",
          700: "fff",
          800: "#192841",
        },
      }),
});

export default colors;
