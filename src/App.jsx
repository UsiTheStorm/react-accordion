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

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return <div>TODO</div>;
}
