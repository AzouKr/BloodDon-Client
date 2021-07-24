import React from "react";
import "./Donate.css";
import { useState } from "react";
import Axios from "axios";
import PhoneInput from "react-phone-number-input/input";

function AboutUs() {
  let link = <a href="https://blooddonations.netlify.app/Terms">terms and conditions</a>;
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [groupe, setgroupe] = useState("");
  const [gender, setgender] = useState("");
  const [phone, setphone] = useState(0);
  const [state, setstate] = useState("");
  const [adresse, setadresse] = useState("");
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(true);
  const [show2, setshow2] = useState(true);
  const [show3, setshow3] = useState(true);
  const [show4, setshow4] = useState(true);
  const [show5, setshow5] = useState(true);
  const [show6, setshow6] = useState(true);
  const [show7, setshow7] = useState(true);
  const [show8, setshow8] = useState(true);

  const addDonate = () => {
    Axios.post("https://blood-don.herokuapp.com/create", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      groupe: groupe,
      gender: gender,
      adresse: adresse,
      state: state,
    }).then(() => {
      console.log("yesssss");
    });
  };

  const Validation = () => {
    let valid = true;
    if (!email.includes("@")) {
      setshow1(false);
      valid = false;
    }
    if (firstname === "") {
      setshow2(false);
      valid = false;
    }
    if (lastname === "") {
      setshow3(false);
      valid = false;
    }
    if (gender === "") {
      setshow4(false);
      valid = false;
    }
    if (groupe === "") {
      setshow5(false);
      valid = false;
    }
    if (phone === 0) {
      setshow6(false);
      valid = false;
    }
    if (state === "") {
      setshow7(false);
      valid = false;
    }
    if (adresse === "") {
      setshow8(false);
      valid = false;
    }

    console.log(valid);
    if (valid) {
      setshow(true);
      addDonate();
    }
  };

  return (
    <div>
      <div class="wrapper">
        <div class="title">Registration Form</div>
        <div class="form">
          <div class="inputfield">
            <label>First Name</label>
            <input
              style={{ border: !show2 ? "1px solid red" : null }}
              type="text"
              class="input"
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
          </div>
          <div class="inputfield">
            <label>Last Name</label>
            <input
              style={{ border: !show3 ? "1px solid red" : null }}
              type="text"
              class="input"
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </div>
          <div class="inputfield">
            <label>Email Address</label>
            <input
              style={{ border: !show1 ? "1px solid red" : null }}
              class="input"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div class="inputfield">
            <label>Gender</label>
            <div class="custom_select">
              <select
                style={{ border: !show4 ? "1px solid red" : null }}
                onChange={(e) => {
                  setgender(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div class="inputfield">
            <label>Groupe</label>
            <div class="custom_select">
              <select
                style={{ border: !show5 ? "1px solid red" : null }}
                onChange={(e) => {
                  setgroupe(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <div class="inputfield">
            <label>Phone Number</label>
            <PhoneInput
              style={{ border: !show6 ? "1px solid red" : null }}
              country="US"
              value={phone}
              class="input"
              onChange={setphone}
            />
          </div>
          <div class="inputfield">
            <label>State</label>
            <div class="custom_select">
              <select
                style={{ border: !show7 ? "1px solid red" : null }}
                onChange={(e) => {
                  setstate(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="Alger">Alger</option>
                <option value="Oran">Oran</option>
                <option value="Constantine">Constantine</option>
                <option value="Setif">Setif</option>
                <option value="Ouargla">Ouargla</option>
                <option value="Blida">Blida</option>
                <option value="Bechar">Bechar</option>
                <option value="Jijel">Jijel</option>
              </select>
            </div>
          </div>
          <div class="inputfield">
            <label>Address</label>
            <textarea
              style={{ border: !show8 ? "1px solid red" : null }}
              class="textarea"
              onChange={(e) => {
                setadresse(e.target.value);
              }}
            ></textarea>
          </div>
          <div class="inputfield terms">
            <p>By clicking submit you agree to our {link} </p>
          </div>
          <div class="inputfield">
            <input
              type="submit"
              value="Register"
              class="btn"
              // eslint-disable-next-line no-unused-expressions
              onClick={() => {
                Validation();
              }}
            />
          </div>
        </div>
      </div>

      {show ? (
        <div className="alert alert-success" role="alert">
          <strong>Well done!</strong> You successfully Registered
        </div>
      ) : null}
    </div>
  );
}

export default AboutUs;
