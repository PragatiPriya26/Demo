export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Good Morning <br />
        <span>✨ Beautiful Soul ✨</span>
      </h1>

      <p>How are you feeling today?</p>

      <div className="moods">
        <button>😊 Great</button>
        <button>😌 Okay</button>
        <button>😶 Meh</button>
        <button>😔 Low</button>
      </div>
    </section>
  );
}