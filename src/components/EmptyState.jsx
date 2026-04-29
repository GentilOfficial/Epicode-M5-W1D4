const EmptyState = ({ message }) => {
  return (
    <div className="flex align-items-center p-5 w-100 mx-auto rounded-2 border bg-light">
      <p className="m-0 text-center text-secondary text-uppercase">{message}</p>
    </div>
  )
}

export default EmptyState
