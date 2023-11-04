function App() {
  return (
    <div className="container">
      <h1>Design system</h1>

      <section id="colors">
        <h2>
          <span>01</span> colors
        </h2>

        <div className="flex">
          <div>
            <div
              className="bg-dark text-white"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>RGB 11, 13, 23</p>
            <p>HSL 230°, 35%, 7%</p>
          </div>
          <div>
            <div
              className="bg-accent text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>RGB 208, 214, 249</p>
            <p>HSL 231°, 77%, 90%</p>
          </div>
          <div>
            <div
              className="bg-white text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #FFFFF
            </div>
            <p>RGB 255, 255, 255</p>
            <p>HSL 0°, 0%, 100%</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
