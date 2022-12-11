import { render, screen, configure, fireEvent } from "@testing-library/react";
import { it, expect } from "vitest";

import App from "./App.jsx";

configure({ testIdAttribute: "data-qa" });

it("should sort presents from small to big by dimensions when toggling sort", async () => {
  render(<App />);

  await fireEvent.click(
    await screen.findByRole("button", { name: "Toggle sort" })
  );

  const presents = await screen.findAllByTestId("present");
  expect(presents[0].getAttribute("alt")).toBe("Present 2");
  expect(presents[1].getAttribute("alt")).toBe("Present 1");
  expect(presents[2].getAttribute("alt")).toBe("Present 3");
  expect(presents[3].getAttribute("alt")).toBe("Present 5");
  expect(presents[4].getAttribute("alt")).toBe("Present 4");
});
