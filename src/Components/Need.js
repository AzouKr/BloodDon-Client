import React from "react";
import "./Need.css";
import { useState } from "react";
import Axios from "axios";

function Need() {
  const [info, setinfo] = useState([]);
  const [groupe, setgroupe] = useState("");
  const [state, setstate] = useState("");
  const [show1, setshow1] = useState(true);
  const [show2, setshow2] = useState(true);


  const infolist = () => {
    Axios.post("https://blood-don.herokuapp.com/info", {
      groupe: groupe,
      state: state,

    }).then((response) => {
      setinfo(response.data);
      console.log(info);
    });
  };
  
  const Validation = () => {
    let valid = true;
    if (state === ''){
      setshow1(false);
      valid =false;
    }
    if (groupe === ''){
      setshow2(false);
      valid =false;
    }
    if(valid){
      infolist();
    }
  };


  function display() {
    return info.map((item) => {
      return (
        <li className="table-row">
              <div className="col col-22" data-label="Customer Name">
                {item.phone}
              </div>
              <div className="col col-33" data-label="Amount">
                {item.groupe}
              </div>
              <div className="col col-33" data-label="Amount">
                {item.gender}
              </div>
              <div className="col col-44" data-label="Payment Status">
                {item.state}
              </div>
            </li>
      );
    });
  }

  return (
    <div>
      <div>
        <div className="input-group">
          <input  style={{border: !show1? '1px solid red':null}}
          onChange={(e) => {
                setstate(e.target.value);
              }}
            className="form-control"
            placeholder="State"
            aria-label=""
            aria-describedby="basic-addon1"
          />
          <div class="input-group-append">
            <button
              className="btn btn-success"
              type="button"
              onClick={()=>{Validation()}}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-g">
          <input style={{border: !show2? '1px solid red':null}}
            onChange={(e) => {
                setgroupe(e.target.value);
              }}
            className="form-control"
            placeholder="Groupe"
            aria-label=""
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className="container">
        <br></br>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-2">Phone</div>
              <div className="col col-3">Groupe</div>
              <div className="col col-3">Gender</div>
              <div className="col col-4">State</div>
            </li>
            {display()}
          </ul>
        </div>
    </div>
  );
}

export default Need;
