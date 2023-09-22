const Tabs = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-evenly" }}>
      <button className="active">Music</button>
      <button>Sports</button>
      <button>Business</button>
      <button>Food</button>
      <button>Art</button>
    </nav>
  )
}

export { Tabs }