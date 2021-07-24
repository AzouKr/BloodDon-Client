import React from "react";
import "./Donate.css";
import { useState } from "react";
import Axios from "axios";
import PhoneInput from "react-phone-number-input/input";

function AboutUs() {
  let link = <a href="https://blooddonations.netlify.app/Terms" target="_blank" rel="noopener noreferrer" >terms and conditions</a>;
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

  const states = [
    {num:1, nom:'Adrar'},{num:2, nom:'Chlef'},{num:3, nom:'Laghouat'},{num:4, nom:'Oum El Bouaghi'},{num:5, nom:'Batna'},{num:6, nom:'Béjaïa'},
    {num:7, nom:'Biskra'},{num:8, nom:'Béchar'},{num:9, nom:'Blida'},{num:10, nom:'Bouira'},{num:11, nom:'Tamanrasset'},{num:12, nom:'Tébessa'},
    {num:13, nom:'Tlemcen'},{num:14, nom:'Tiaret'},{num:15, nom:'Tizi Ouzou'},{num:16, nom:'Alger'},{num:17, nom:'Djelfa'},{num:18, nom:'Jijel'},
    {num:19, nom:'Sétif'},{num:20, nom:'Saïda'},{num:21, nom:'Skikda'},{num:22, nom:'Sidi Bel Abbès'},{num:23, nom:'Annaba'},{num:24, nom:'Guelma'},
    {num:25, nom:'Constantine'},{num:26, nom:'Médéa'},{num:27, nom:'Mostaganem'},{num:28, nom:'MSila'},{num:29, nom:'Mascara'},{num:30, nom:'Ouargla'},
    {num:31, nom:'Oran'},{num:32, nom:'El Bayadh'},{num:33, nom:'Illizi'},{num:34, nom:'Bordj Bou Arréridj'},{num:35, nom:'Boumerdès'},{num:36, nom:'El Tarf'},
    {num:37, nom:'Tindouf'},{num:38, nom:'Tissemsilt'},{num:39, nom:'El Oued'},{num:40, nom:'Khenchela'},{num:41, nom:'Souk Ahras'},{num:42, nom:'Tipaza'},
    {num:43, nom:'Mila'},{num:44, nom:'Ain Defla'},{num:45, nom:'Naama'},{num:46, nom:'Aïn Témouchent'},{num:47, nom:'Ghardaia'},{num:48, nom:'Relizane'},
    {num:49, nom:'El Mghair'},{num:50, nom:'El Menia'},{num:51, nom:'Ouled Djellal'},{num:52, nom:'Bordj Baji Mokhtar'},{num:53, nom:'Béni Abbès'},
    {num:54, nom:'Timimoun'},{num:55, nom:'Touggourt'},{num:56, nom:'Djanet'},{num:57, nom:'In Salah'},{num:58, nom:'In Guezzam'},
]


    function display() {
      return states.map((item) => {
        return (
          <option value={item.nom}>{item.num} - {item.nom}</option>
        );
      });
    }

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
              country="DZA"
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
                {display()}
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
