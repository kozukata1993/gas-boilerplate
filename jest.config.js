module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
  roots: ["./src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  preset: "ts-jest",
};
