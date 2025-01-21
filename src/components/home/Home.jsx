import "./Home.css";

const Home = () => {
  const downloadResume = () => {
    const pdfURL = "Alex_Nguyen_Tech_Resume.pdf";
    
    const aTag = document.createElement("a");
    aTag.href = pdfURL;
    aTag.setAttribute("download", "Alex_Nguyen_Resume.pdf");
    document.body.appendChild(aTag);

    try {
      aTag.click();
      console.log("Successfully downloaded resume");
    } catch (error) {
      console.error("Failed to download resume", error);
    } finally {
      document.body.removeChild(aTag);
    }
  };

  return (
    <div className="home" id="home">
      <h1>Alex Nguyen</h1>
      <p>I solve problems and build software.</p>
      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
};

export default Home;
