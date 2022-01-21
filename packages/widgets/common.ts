export { readmeDocs } from "../common";

export const argTypes = {
  position: {
    description: "The position in the view at which to add the component",
    type: "string",
    control: { type: "select" },
    options: [
      "bottom-leading",
      "bottom-left",
      "bottom-right",
      "bottom-trailing",
      "top-leading",
      "top-left",
      "top-right",
      "top-trailing",
      "manual"
    ]
  }
};
