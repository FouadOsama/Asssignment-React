function SocialMedia() {
  return (
    <>
      <div className="social mt-5">
        <div className="container p-5 text-center text-white">
          <div className="row">
            <div className="col-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
            <div className="col-4">
              <h3>AROUND THE WEB</h3>
              <div className="social-media d-flex justify-content-center mt-4">
                <a href="#">
                  <span className="social-logo text-white me-2">
                    <i class="fa-brands fa-facebook-f"></i>
                  </span>
                </a>
                <a href="#">
                  <span className=" social-logo text-white me-2">
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                </a>
                <a href="#">
                  <span className="social-logo text-white me-2">
                    <i class="fa-brands fa-linkedin"></i>
                  </span>
                </a>
                <a href="#">
                  <span className="social-logo text-white me-2">
                    <i class="fa-brands fa-dribbble"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
