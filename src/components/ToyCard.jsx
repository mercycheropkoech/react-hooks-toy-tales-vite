function ToyCard({ toy, toys, setToys }) {
  function handleLike() {
    const updatedToy = {
      ...toy,
      likes: toy.likes + 1,
    };

    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedToy.likes }),
    })
      .then((res) => res.json())
      .then(() => {
        setToys(toys.map((t) => (t.id === toy.id ? updatedToy : t)));
      });
  }

  function handleDonate() {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => {
      setToys(toys.filter((t) => t.id !== toy.id));
    });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      {/* IMPORTANT: trailing space is required by test */}
      <p>{toy.likes} Likes </p>

      <button onClick={handleLike}>Like &lt;3</button>

      <button onClick={handleDonate}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;