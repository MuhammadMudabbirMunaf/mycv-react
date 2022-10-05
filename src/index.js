import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Hi() {
  return (
    <div className='mainOne'>
      <div className='mainTwo'>
        <div className='image'></div>
        <div className='one'>Contact</div>
          <div className='contactInfo'>
            <p>Phone : 0312-3456789</p>
            <p>Email : abc@gmail.com</p>
            <p>Twitter : abcdefgh</p>
          </div>
        <div className='two'>Education</div>
          <div className='educationInfo'>
            <p>Bachelors</p>
            <p>Intermediate</p>
            <p>Matriculation</p>
          </div>
        <div className='three'>Skills</div>
          <div className='skillInfo'>
            <p>Graphic Designer</p>
            <p>Web Developer</p>
            <p>Content Writer</p>
          </div>
      </div>

      <div className='name'>Muhammad Mudabbir</div>
      <div className='description'>Certified Graphic Designer, Web Developer, and Content Writer</div>
      <p className='objective'>Seeking a challenging position in a reputed organization <br/>
      where I can learn new skills,expand my knowledge,<br/>  and leverage my learnings. To get 
      an opportunity where<br/> I can make the best of my potential and contribute<br/> to the 
      organization's growth.</p>
      <div className='expHead'>Work Experience</div>
          <div className='experience1'>
            <p>ABC Solutions Aug 2021 - Oct 2021</p>
            <p>I worked at ABC Solutions and my position was <br/>Customer Support Representative (CSR).</p>
          </div>
          <div className='experience2'>
            <p>ABC Internationals Nov 2021 - Feb 2022</p>
            <p>I worked at ABC Internationals and my position was <br/>Customer Support Representative (CSR).</p>
          </div>
          <div className='experience3'>
            <p>ABC International Marketing Solutions Mar 2022 - May 2022</p>
            <p>I worked at ABC International Marketing Solutions and <br/>my position was Customer Support Representative (CSR).</p>
          </div>
    </div>
  )
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));