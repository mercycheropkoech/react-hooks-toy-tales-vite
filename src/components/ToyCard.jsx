function ToyCard({ toy, toys, setToys }) {

  // PATCH request
  function handleLike() {
    const updatedLikes = toy.likes + 1

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: updatedLikes
      })
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        const updatedToys = toys.map((t) =>
          t.id === updatedToy.id ? updatedToy : t
        )

        setToys(updatedToys)
      })
  }

  // DELETE request
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then(() => {
        const filteredToys = toys.filter(
          (t) => t.id !== toy.id
        )

        setToys(filteredToys)
      })
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{toy.likes} Likes</p>

      <button onClick={handleLike}>
        ❤️ Like
      </button>

      <button onClick={handleDelete}>
        Donate to Goodwill
      </button>
    </div>
  )
}

export default ToyCard
