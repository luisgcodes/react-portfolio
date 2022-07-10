import resume from "../../assets/resume/Luis_Gutierrez_Resume.pdf";

const Resume = () => {
  return (
    <>
      <h1>RESUME</h1>
      <section className="resume content">
          <p>Download My Resume
            <a href={resume} download> Here ! <span className="icon icon-download" aria-label="download icon"></span></a>
          </p>
      </section>
    </>
  )
}

export default Resume;