import { useState } from 'react';
import './App.css';
const faqs = [
  {
    title: 'Do I need to read The Hobbit before The Lord of the Rings?',
    text: 'Not necessarily, but it helps! The Hobbit sets the stage and introduces key characters like Bilbo and Gandalf. Plus, its a fun read with more singing and fewer Nazgûl. 🎶👀',
  },
  {
    title: 'Is the movie trilogy faithful to the books?',
    text: 'Pretty close, but there are differences! Some characters were cut (sorry, Tom Bombadil 😢), and a few events were changed for pacing. But overall, the movies capture the epic spirit of Tolkien’s world. 🎬🗺️',
  },
  {
    title: 'Who is the real hero of The Lord of the Rings?',
    text: 'Hot debate! Some say Frodo, some say Sam. Honestly, Samwise carried Frodo and the story on his back. MVP of Middle-earth. 🥔❤️',
  },
];

function AccordionItem({ item: { title, text }, num }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen && 'open'}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => {
        const idx = i < 9 ? String(i + 1).padStart(2, '0') : i + 1;
        return <AccordionItem item={item} num={idx} key={i} />;
      })}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
