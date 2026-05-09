import nextJest from "next/jest.js";
const createJestConfig = nextJest({
  dir: "./",
});

const customConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

export default createJestConfig(customConfig)