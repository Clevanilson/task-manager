import { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  preset: "ts-jest",
  coverageDirectory: "tests/coverage",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
