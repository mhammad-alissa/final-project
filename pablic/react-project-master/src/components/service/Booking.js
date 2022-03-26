import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Booking() {
    const [date_chosen, setdate] = useState("");
    const [time_of_day, settime] = useState("");
    const [notes, setnote] = useState("");

    function Date(event) {
		setdate(event.target.value);
	}
    function Time(event) {
		settime(event.target.value);
	}
    function Note(event) {
		setnote(event.target.value);
	}

    function Submit(e) {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem("users"))) {

		const formData = new FormData();
		formData.append("phoneuser", JSON.parse(localStorage.getItem("users")).phone);
		formData.append("username", JSON.parse(localStorage.getItem("users")).name);
		formData.append("product_id", JSON.parse(localStorage.getItem("products")).p_id);
		formData.append("product_name", JSON.parse(localStorage.getItem("products")).p_name);
		formData.append("product_img", JSON.parse(localStorage.getItem("products")).p_image);
		formData.append("date_chosen",date_chosen);
		formData.append("time_of_day",time_of_day);
		formData.append("notes",notes);
	

		 axios({
			method: "post",
			url: "http://localhost/final-project/php/booking.php",
			data: formData,
			config: { headers: { "content-Type": "multipart/form-data" } },
		 })
			.then((res) => {
				window.location.href = "http://localhost:3000/service";
			})
			.catch((error) => {
				console.log(error.response);
			});
   } else {
            localStorage.setItem("url","yes");
            window.location.href = "http://localhost:3000/login";

        }
	};

       
  return (
    
    <div
    className="bookingForm col-lg-4 col-md-12 col-sm-12"
    style={{ marginTop: "200px", marginBottom: "90px" }}
   >
    {/* <!-- Contact Form --> */}
    <div className="contact_form_container">
      <img
        src={
          localStorage.getItem("users")
            ? `userImages/${
                JSON.parse(localStorage.getItem("users")).image
              }`
            : ""
        }
        alt="user"
        width={"90px"}
        height={"90px"}
        style={
          localStorage.getItem("users")
            ? { borderRadius: "50%", marginLeft: "31%" }
            : { display: "none" }
        }
      />
      <div className="contact_title text-center">
        {localStorage.getItem("users")
          ? JSON.parse(localStorage.getItem("users")).name
          : ""}
      </div>
      <form id="contact_form" className="contact_form text-center" method="post">
          {/* <input type="hidden" value={username} onChange={Name}></input> */}
        <div style={{ color: "white", fontSize: "14px" }}>Date</div>
        <input
          id="txtDate"
          type="date"
          name="date"
          className="check_in search_input"
          style={{ marginBottom: "15px" }}
          value={date_chosen}
          onChange={Date}
        />
        <label className="search-booking">
          {/* {this.state.bookingErrors.date} */}
        </label>
        <div style={{ color: "white", fontSize: "14px" }}>Time</div>
        <input
          type="Time"
          name="time"
          className="check_out search_input"
          style={{ marginBottom: "15px" }}
          value={time_of_day}
          onChange={Time}
        />
     
          {/* {this.state.bookingErrors.time} */}
       
        <div style={{ color: "white", fontSize: "14px" }}>
          notes
        </div>
        <textarea
          name="notes"
          className="check_out search_input"
          style={{ marginBottom: "15px", height: "120px" }}
          value={notes}
          onChange={Note}
        >
         
        </textarea>
        <button
          className="button search_button"
          onClick={Submit}
        >
          Book Now<span></span>
          <span></span>
          <span></span>
        </button>
      </form>
    </div>
  </div>
  )
}
