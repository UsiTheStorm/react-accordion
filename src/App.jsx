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

function AccordionItem({ item: { title, text }, num, onOpen, currOpen }) {
  function handleToggle() {
    onOpen(num);
  }
  // Adding 0 befor single digit number
  const displayNum = String(num).padStart(2, '0');

  const isOpen = num === currOpen;

  return (
    <div className={`item ${isOpen && 'open'}`} onClick={handleToggle}>
      <p className="number">{displayNum}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setIsOpen] = useState(null);

  function handleIsOpen(num) {
    // Close accordion after click if its open
    currOpen !== num ? setIsOpen(num) : setIsOpen(null);
  }

  return (
    <div className="accordion">
      {data.map((item, i) => {
        return (
          <AccordionItem
            item={item}
            num={i + 1}
            key={i}
            onOpen={handleIsOpen}
            currOpen={currOpen}
          />
        );
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
