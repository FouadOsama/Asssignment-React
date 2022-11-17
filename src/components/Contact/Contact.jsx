function Contact() {
  return (
    <>
      <div className="contact text-center mt-5">
        <h2 className="fs-1 fw-bolder mb-5">CONTACT ME</h2>
        <div className="container m-auto">
          <input
            type="text"
            className="form-control mb-3 w-50 input-custom"
            placeholder="Name"
            aria-label="First name"
          />
          <input
            type="email"
            className="form-control mb-3 w-50"
            placeholder="Email Address"
            aria-label="email"
          />
          <input
            type="number"
            className="form-control mb-3 w-50"
            placeholder="Phone Number"
            aria-label="text"
          />
          <input
            type="text"
            className="form-control mb-3 w-50"
            placeholder="Message"
            aria-label="message"
          />
          <div className="d-flex mb-5">
            <button className="btn btn-success">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
