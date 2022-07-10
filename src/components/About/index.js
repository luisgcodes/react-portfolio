// My Headshot !
import headshot from "../../assets/images/me1.jpg"
// A little about me!!
const About = () => {
  return (
    <section className="content" id="about">  
      <h1>ABOUT ME</h1>
      <div className="about-me">
        <div>
          <p>Hello, I'm Luis — An Aspiring Software Engineer who is on the road to specialize in Front-End Development.</p>
          <p>Front-end development caught my attention late of 2021 and ever since it has kept it's grip on me. I began to do research and soon decided to go the "Self Taught" route but I knew that if I wanted to get the most out of the early stages of my journey, I should enroll in a bootcamp and that's what I did.</p>
          {}
          <p>Apart from this new found love, I enjoy gaming and finding new ways to become as creative as I can be with the things I get into. I've dipped my toes in photography, photoshop, video editing, designing and producing shirts/decals.</p>
        </div> 
        <img src={headshot} alt="Me"/>
      </div>
    </section>
  )
}
export default About;