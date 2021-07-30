import React from 'react';
import './about.css';

function About() {
  return (
    <>
      <h1 className='title'>About Me</h1>
      <div className='about'>
        <br></br>
        <p>Welcome to my website! My name is Radha, and I'm going to be a second-semester
          junior in fall 2021. I go to Cornell University where I'm majoring in computer
          science and minoring in information science in the College of Engineering.
          I'm looking for an internship for summer 2022 and am open to any and all
          tech opportunities. You can take a look at my projects and resume on the other
          pages of this site, and be sure to check out my links at the bottom of the page,
          including my GitHub and LinkedIn.
        </p>
        <br></br>
        <h2 className='facts-head'>Fast Facts:</h2>
        <div className='facts'>
          <p className='red'><strong>Hometown:</strong> Albany, NY</p>
          <p className='gray'><strong>Projected Graduation:</strong> December 2022</p>
          <p className='red'><strong>Favorite CS Class:</strong> Intro to Python (CS 1110) and
            Functional Programming (CS 3110)</p>
          <p className='gray'><strong>Favorite Non-CS Class:</strong> Prisons, Politics, and Policy
            (AMST 3155) and Intro to Data Science (INFO 2950)</p>
          <p className='red'><strong>Favorite Book: </strong> Normally I would say <em>Harry Potter</em>,
            but I recently read <em>Educated</em> by Tara Westover and it was phenomenal. Also love <em>
              In Cold Blood</em> by Truman Capote.</p>
          <p className='gray'><strong>Favorite Movie:</strong> If not the <em>Harry Potter</em> movies,
            then maybe <em>Iron Man</em> or <em>Avengers: Endgame</em>.</p>
          <p className='red'><strong>Favorite Musician:</strong> Taylor Swift</p>
          <p className='gray'><strong>Favorite Podcast:</strong> <em>This American Life</em></p>
          <p className='red'><strong>Hobbies:</strong> piano, reading, writing, cooking</p>
        </div>
      </div>
    </>
  );
}

export default About;