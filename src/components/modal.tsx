import "./modal.scss";

// @Rom: BITTE LESEN!!!
// Ein Modal soll eine global erreichbare Komponente sein
//      und muss in der Lage sein mehrere Komponenten zu render.
// Wir wollen nicht für jede Form ein eigenes modal anlegen!

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="header">
        {/* das svg ist nicht responsive */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffc107"
            fill-opacity="1"
            d="M0,160L14.1,181.3C28.2,203,56,245,85,256C112.9,267,141,245,169,218.7C197.6,192,226,160,254,133.3C282.4,107,311,85,339,117.3C367.1,149,395,235,424,266.7C451.8,299,480,277,508,256C536.5,235,565,213,593,202.7C621.2,192,649,192,678,197.3C705.9,203,734,213,762,202.7C790.6,192,819,160,847,133.3C875.3,107,904,85,932,106.7C960,128,988,192,1016,229.3C1044.7,267,1073,277,1101,266.7C1129.4,256,1158,224,1186,224C1214.1,224,1242,256,1271,250.7C1298.8,245,1327,203,1355,176C1383.5,149,1412,139,1426,133.3L1440,128L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
          ></path>
        </svg> */}
      </div>
      <div className="body">
        <div className="menu-img">
          <input type="text/name" placeholder="Menu name" />
          <input type="text" placeholder="Menu description" />
          <input type="number" placeholder="0.00€"></input>
        </div>
      </div>
    </div>
  );
};

export default Modal;
