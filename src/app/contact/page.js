import Globe3D from '../components/Globe3D';

export default function ContactPage() {
  return (
    <section className="page contact">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea rows={4} placeholder="Your Message" />
        <button type="submit">Send</button>
      </form>
      <Globe3D />
    </section>
  );
}
