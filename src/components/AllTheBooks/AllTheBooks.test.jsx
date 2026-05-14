import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import books from "../../data/books/history.json"
import AllTheBooks from "./AllTheBooks"

describe("AllTheBooks", () => {
  render(
    <BrowserRouter>
      <AllTheBooks filter="" selected="" setSelected={() => {}} />
    </BrowserRouter>,
  )

  const detailLinks = screen.getAllByText(/details/i)

  it("renders as many cards as there are books", () => {
    expect(detailLinks).toHaveLength(books.length)
  })
})
