import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2> Nurturing the leaders today</h2>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta amet dolor consequatur vel, quis optio quam culpa temporibus et, corporis labore? Delectus sequi blanditiis amet obcaecati fugit animi voluptate corporis incidunt culpa!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam deleniti veniam nihil, quas corporis deserunt culpa voluptate molestias accusantium ipsam ea magnam ipsa accusamus recusandae ducimus dicta. Dolore ipsam deleniti vero facilis.</p>
      </div>
    </div>
  )
}

export default About
