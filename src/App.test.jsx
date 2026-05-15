import { fireEvent, render, screen } from "@testing-library/react"
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

describe("Card count in AllTheBooks", () => {
  it("renders as many cards as there are books", () => {
    render(<App />)

    const bookCards = screen.getAllByTestId("book-card")
    expect(bookCards).toHaveLength(books.length)
  })
})

describe("Filter field in MyNav", () => {
  it("filters books by word 'justice'", () => {
    render(<App />)

    const inputField = screen.getByPlaceholderText(/book title/i)

    fireEvent.input(inputField, { target: { value: "justice" } })
    const bookCards = screen.getAllByTestId("book-card")
    expect(bookCards).toHaveLength(2)
  })
  it("filters books by phrase 'ciao a chi mi legge' and returns empty state", () => {
    render(<App />)

    const inputField = screen.getByPlaceholderText(/book title/i)

    fireEvent.input(inputField, { target: { value: "ciao a chi mi legge" } })
    const emptyState = screen.getByText(/no books/i)
    expect(emptyState).toBeInTheDocument()
  })
  it("filter books by word 'war' and after empty field returns all the books", () => {
    render(<App />)

    const inputField = screen.getByPlaceholderText(/book title/i)

    fireEvent.input(inputField, { target: { value: "war" } })
    const bookCardsFilledField = screen.getAllByTestId("book-card")
    expect(bookCardsFilledField).toHaveLength(13)

    fireEvent.input(inputField, { target: { value: "" } })
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
  it("add border after click", () => {
    render(<App />)

    const bookCards = screen.getAllByTestId("book-card")

    fireEvent.click(bookCards[0])
    expect(bookCards[0]).toHaveClass("border-danger")
  })
  it("add border after click and returns without border after another click", () => {
    render(<App />)

    const bookCards = screen.getAllByTestId("book-card")

    fireEvent.click(bookCards[0])
    expect(bookCards[0]).toHaveClass("border-danger")

    fireEvent.click(bookCards[0])
    expect(bookCards[0]).not.toHaveClass("border-danger")
  })
  it("add border after click and returns without border after another click in another card", () => {
    render(<App />)

    const bookCards = screen.getAllByTestId("book-card")

    fireEvent.click(bookCards[0])
    expect(bookCards[0]).toHaveClass("border-danger")

    fireEvent.click(bookCards[1])
    expect(bookCards[0]).not.toHaveClass("border-danger")
  })
})

describe("SingleComment instances", () => {
  it("not renders at startup", () => {
    render(<App />)

    const singleComments = screen.queryAllByTestId("single-comment")
    expect(singleComments).toHaveLength(0)
  })
})

describe("CommentArea", () => {
  it("renders default empty state", () => {
    render(<App />)

    const emptyState = screen.getByText(/no comments/i)
    expect(emptyState).toBeInTheDocument()
  })
  it("renders comments area", async () => {
    render(<App />)

    const booksCards = screen.getAllByTestId("book-card")

    fireEvent.click(booksCards[1])
    const commentArea = await screen.findByTestId("comments-area")
    expect(commentArea).toBeInTheDocument()
  })
  it("renders comments area and return empty", async () => {
    render(<App />)

    const booksCards = screen.getAllByTestId("book-card")

    fireEvent.click(booksCards[1])
    const commentArea = await screen.findByTestId("comments-area")
    expect(commentArea).toBeInTheDocument()

    fireEvent.click(booksCards[1])
    const emptyState = await screen.getByText(/no comments/i)
    expect(emptyState).toBeInTheDocument()
  })
  it("renders comments", async () => {
    render(<App />)

    const booksCards = screen.getAllByTestId("book-card")

    fireEvent.click(booksCards[0])
    const bookComments = await screen.findAllByTestId("single-comment")
    expect(bookComments).not.toHaveLength(0)
  })
})
