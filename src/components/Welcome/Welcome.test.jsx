import { render, screen } from "@testing-library/react"
import Welcome from "./Welcome"

describe("Welcome", () => {
  render(<Welcome />)

  const title = screen.getByText("EPIBOOKS")
  const subtitle = screen.getByText(
    "An incredible book illustration from EPIBOOKS!",
  )

  it("renders content", () => {
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
