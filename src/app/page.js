import Box3D from './components/Box3D';

export default function HomePage() {
  return (
    <section className="home">
      <div className="hero-text">
        <h1>Hello, I'm [Your Name]</h1>
        <p>A Developer | Designer | Tester</p>
      </div>
      <Box3D />
    </section>
  );
}
