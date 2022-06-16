
import { useState } from 'react'

const Contact = () => {
  const [base64, setBase64] = useState("");

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    console.log("file:", file);
    getBase64(file);
  };

  const onLoad = (fileString) => {
    console.log("fileString", fileString);
    setBase64(fileString);
  };

  const getBase64 = (file) => {
    let reader = new FileReader(0);
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("base64");
    console.log(base64);

    fetch(
      "https://ft6od4mifc.execute-api.ca-central-1.amazonaws.com/sendEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: "ctaylor17@outlook.com",
          senderEmail: "ctaylor17@outlook.com", //"collegeprocam@gmail.com",
          message: "This is the message.",
          base64Data: base64,
          date: new Date(),
          fileName: "TEST_FILE_NAME",
        }),
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This code comes from the YouTube video found at{" "}
          <a
            style={{ color: "white" }}
            href="https://www.youtube.com/watch?v=-_hRWBpaJZk"
          >
            https://www.youtube.com/watch?v=-_hRWBpaJZk
          </a>
        </p>
        <form>
          <input type="file" accept="image/jpeg" onChange={onChange} />
        </form>
        <button onClick={handleSubmit}>SEND TO LAMBDA</button>
      </header>
    </div>
  );
}

export default Contact;