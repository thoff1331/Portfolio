import "../Resume/resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-elements">
        <h1
          onClick={() => {
            window.open(
              "https://pdfhost.io/v/48XGrYlXJ_Trevor_Hoffman_Resume_pdf.pdf"
            );
          }}
        >
          Click Here to view my Resume
        </h1>
      </div>
    </div>
  );
}
export default Resume;
