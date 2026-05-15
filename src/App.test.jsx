import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it } from "vitest"
import App from "./App"
import books from "./data/books/history.json"

describe("Rendering of Welcome", () => {
  it("renders title", () => {
    render(<App />)

    const title = screen.getByRole("heading", { name: /epibooks/i })
    expect(title).toBeInTheDocument()
  })
  it("renders alert", () => {
    render(<App />)

    const alert = screen.getByText(
      /an incredible book illustration from epibooks!/i,
    )
    expect(alert).toBeInTheDocument()
  })
})

describe("Cards count in AllTheBooks", () => {
  it("renders as many cards as there are books", () => {
    render(<App />)

    const bookCards = screen.getAllByTestId("book-card")
    expect(bookCards).toHaveLength(books.length)
  })
})

describe("Filter field in MyNav", () => {
  it("filters books by word 'justice'", async () => {
    render(<App />)

    const inputField = screen.getByPlaceholderText(/book title/i)
    await userEvent.type(inputField, "justice")

    const bookCards = screen.getAllByTestId("book-card")
    const expectedResult = books.filter((book) =>
      book.title.toLowerCase().includes("justice"),
    )
    expect(bookCards).toHaveLength(expectedResult.length)
  })
  it("filters books by phrase 'ciao a chi mi legge' and returns empty state", async () => {
    render(<App />)

    const inputField = screen.getByPlaceholderText(/book title/i)
    await userEvent.type(inputField, "ciao a chi mi legge")

    const emptyState = screen.getByText(/no books/i)
    expect(emptyState).toBeInTheDocument()
  })
  it("filter books by word 'war' and after empty field returns all the books", async () => {
    render(<App />)

    const inputField = screen.getByPlaceholderText(/book title/i)
    await userEvent.type(inputField, "war")

    const bookCardsFilledField = screen.getAllByTestId("book-card")
    const expectedResult = books.filter((book) =>
      book.title.toLowerCase().includes("war"),
    )
    expect(bookCardsFilledField).toHaveLength(expectedResult.length)

    await userEvent.clear(inputField)
    const bookCardsEmptyField = screen.getAllByTestId("book-card")
    expect(bookCardsEmptyField).toHaveLength(books.length)
  })
})

describe("Events on SingleBook cards", () => {
  it("starts without border", () => {
    render(<App />)
    const bookCards = screen.getAllByTestId("book-card")
    expect(bookCards[0]).not.toHaveClass("border-danger")
  })
  it("adds a border after click", async () => {
    render(<App />)

    const bookCards = screen.getAllByTestId("book-card")

    await userEvent.click(bookCards[0])
    expect(bookCards[0]).toHaveClass("border-danger")
  })
  it("add border after click and returns without border after another click", async () => {
    render(<App />)

    const bookCards = screen.getAllByTestId("book-card")

    await userEvent.click(bookCards[0])
    expect(bookCards[0]).toHaveClass("border-danger")

    await userEvent.click(bookCards[0])
    expect(bookCards[0]).not.toHaveClass("border-danger")
  })
  it("add border after click and returns without border after another click on other card", async () => {
    render(<App />)

    const bookCards = screen.getAllByTestId("book-card")

    await userEvent.click(bookCards[0])
    expect(bookCards[0]).toHaveClass("border-danger")

    await userEvent.click(bookCards[1])
    expect(bookCards[0]).not.toHaveClass("border-danger")
    expect(bookCards[1]).toHaveClass("border-danger")
  })
})

describe("Comments listing", () => {
  describe("CommentArea", () => {
    it("renders default empty state", () => {
      render(<App />)

      const emptyState = screen.getByText(/no comments/i)
      expect(emptyState).toBeInTheDocument()
    })
    it("renders comments area", async () => {
      render(<App />)

      const bookCards = screen.getAllByTestId("book-card")

      await userEvent.click(bookCards[1])
      const commentArea = await screen.findByTestId("comments-area")
      expect(commentArea).toBeInTheDocument()
    })
    it("renders comments area and return empty", async () => {
      render(<App />)

      const bookCards = screen.getAllByTestId("book-card")

      await userEvent.click(bookCards[1])
      const commentArea = await screen.findByTestId("comments-area")
      expect(commentArea).toBeInTheDocument()

      await userEvent.click(bookCards[1])
      const emptyState = screen.getByText(/no comments/i)
      expect(emptyState).toBeInTheDocument()
    })
  })
  describe("SingleComment", () => {
    it("not renders at startup", () => {
      render(<App />)

      const singleComments = screen.queryAllByTestId("single-comment")
      expect(singleComments).toHaveLength(0)
    })
    it("renders comments after book card click", async () => {
      render(<App />)

      const bookCards = screen.getAllByTestId("book-card")

      await userEvent.click(bookCards[1])
      const bookComments = await screen.findAllByTestId("single-comment")
      expect(bookComments).not.toHaveLength(0)
    })
  })
})
