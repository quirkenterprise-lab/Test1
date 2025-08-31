module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  rules: {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "@next/next/no-img-element": "off"
  }
};