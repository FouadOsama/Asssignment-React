import { useState } from "react";
import capin from "../../Images/cabin.png";
import cake from "../../Images/cake.png";
import tent from "../../Images/circus.png";
import control from "../../Images/game.png";
import safe from "../../Images/safe.png";
import submarine from "../../Images/submarine.png";

function Portfolio() {
  let portData = [
    {
      id: 0,
      img: capin,
      name: "LOG CABIN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      id: 1,
      img: cake,
      name: "TASTY CAKE",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      id: 2,
      img: tent,
      name: "CIRCUS TENT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      id: 3,
      img: control,
      name: "CONTROLLER",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      id: 4,
      img: safe,
      name: "LOCKED SAFE",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      id: 5,
      img: submarine,
      name: "SUBMARINE",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
  ];
  let [selectedItem, setSelectedItem] = useState({});
  return (
    <>
      <div className="mt-5 mb-5">
        <div className="container text-center">
          <h2 className="fs-2 fw-bold">PORTFOLIO</h2>
          <div className="row g-3 main">
            {portData.map((item) => (
              <div className="col-4" key={item.id}>
                <a
                  onClick={() => setSelectedItem(item)}
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                >
                  <img className="w-50" src={item.img} />
                </a>

                <div
                  className="modal fade"
                  id="exampleModalToggle"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel"
                  tabIndex="-1"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-center">
                      <div className="modal-header text-center">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel"
                        >
                          {selectedItem.name}
                        </h1>
                      </div>
                      <div className="modal-body">
                        <img className="w-75" src={selectedItem.img} />
                        <p>{selectedItem.desc}</p>
                      </div>
                      <div className="modal-footer d-flex justify-content-center text-center bg-primary w-50 m-auto p-0 align-items-center rounded-3 mb-2">
                        <h4 className="fs-5 p-0">close window</h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <img className="w-100 rounded-3" src={item.img} /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
