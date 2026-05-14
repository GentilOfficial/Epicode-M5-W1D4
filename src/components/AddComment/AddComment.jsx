import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

const AddComment = ({ asin, setSectionError }) => {
  const [form, setForm] = useState({
    comment: "",
    rate: "1",
    elementId: asin,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({
    comment: "",
    rate: "",
  })
  const [isSuccess, setIsSuccess] = useState(false)

  const clearForm = () => {
    setForm({
      comment: "",
      rate: "1",
      elementId: asin,
    })
  }

  const clearErrors = () => {
    setErrors({
      comment: "",
      rate: "",
    })
  }

  const publishComment = async () => {
    setIsLoading(true)
    setIsSuccess(false)
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1M2RkNWJhMGYxMjAwMTUyZTc3NjciLCJpYXQiOjE3Nzc2NTIzOTksImV4cCI6MTc3ODg2MTk5OX0.VAvCSbX2XPKujMfpdQBaHsVnFJm-O-9buKlCfbgcclc",
          },
          body: JSON.stringify(form),
        },
      )
      clearErrors()

      const data = await response.json()
      if (data.error && data.error.errors) {
        setErrors({
          comment: data.error.errors.comment?.message || "",
          rate: data.error.errors.rate?.message || "",
        })
      } else {
        setIsSuccess(true)
        clearForm()
      }
    } catch (error) {
      console.error(error)
      setSectionError("An error occured publishing the comment...")
    } finally {
      setIsLoading(false)
    }
  }

  const onFieldChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value, elementId: asin })
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    publishComment()
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          name="comment"
          rows={3}
          value={form.comment}
          onChange={onFieldChange}
        />
        {errors.comment && (
          <Form.Label className="text-danger">{errors.comment}</Form.Label>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rate</Form.Label>
        <Form.Select name="rate" value={form.rate} onChange={onFieldChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        {errors.rate && (
          <Form.Label className="text-danger">{errors.rate}</Form.Label>
        )}
      </Form.Group>
      <Button type="submit" className="w-100 mb-3">
        Publish
      </Button>
      {isSuccess && <Alert variant="success">Comment added!</Alert>}
    </Form>
  )
}

export default AddComment
