import React, { useState } from 'react';
import { BiChevronUp } from "react-icons/bi";
import './App.css';
import { BsCopy } from "react-icons/bs";

const Formulaire = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formValues = Object.fromEntries(new FormData(event.target).entries());
    setFormData(formValues); // Store form values
    setIsModalVisible(true); // Show modal
  };

  // Function to close modal
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      className='divBody'
      style={{
        minHeight: '100vh',
        background: darkMode ? '#0d1117' : '#1d181e',
        color: darkMode ? '#000' : '#000',
        // padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleFormSubmit}
        style={{
          background: darkMode ? '#1d181e' : '#1d181e',
          padding: '2rem',
          borderRadius: '8px',
          // marginLeft:'10px',
          boxShadow: darkMode
            ? '0px 4px 12px rgba(0, 0, 0, 0.5)'
            : '0px 4px 12px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        {/* Odds and Over */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="odds">Odds</label>
            <input type="text" id="odds" name="odds" defaultValue="-3333" placeholder="Odds" />
          </div>
          <div className="form-group">
            <label htmlFor="over">Over</label>
            <input type="text" id="over" name="over" defaultValue="24.5" placeholder="Over" />
          </div>
        </div>

        {/* Team 1 and Team 2 */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="team1">Team 1</label>
            <input type="text" id="team1" name="team1" defaultValue="Lions" placeholder="Team 1" />
          </div>
          <div className="form-group">
            <label htmlFor="team2">Team 2</label>
            <input type="text" id="team2" name="team2" defaultValue="Cowboys" placeholder="Team 2" />
          </div>
        </div>

        {/* Wager and Paid */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="wager">Wager</label>
            <input type="text" id="wager" name="wager" defaultValue="$1" placeholder="Wager" />
          </div>
          <div className="form-group">
            <label htmlFor="paid">Paid</label>
            <input type="text" id="paid" name="paid" defaultValue="$1.03" placeholder="Paid" />
          </div>
        </div>

        {/* Event Odd and Event Player */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="eventOdd">Event Odd</label>
            <input type="text" id="eventOdd" name="eventOdd" defaultValue="24.5" placeholder="Event Odd" />
          </div>
          <div className="form-group">
            <label htmlFor="eventPlayer">Event Player</label>
            <input type="text" id="eventPlayer" name="eventPlayer" defaultValue="CeeDee Lamb" placeholder="Event Player" />
          </div>
        </div>

        {/* Event and Event Result */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="event">Event</label>
            <input type="text" id="event" name="event" defaultValue="to record 25+ receiving yards" placeholder="Event" />
          </div>
          <div className="form-group">
            <label htmlFor="eventResult">Event Result</label>
            <input type="text" id="eventResult" name="eventResult" defaultValue="37" placeholder="Event Result" />
          </div>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#04c073',
            borderColor: '#52c41a',
            width: '100%',
            height: '45px',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            fontSize: '16px',
            marginTop: '2rem',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Soumettre
        </button>
      </form>

      {isModalVisible && (
        <div className='modal'>
          <div className='modal-content'>
           {/* <button onClick={handleModalClose}>x</button> */}

            {/* <img src={Image} alt="" style={{ width: '100%', height: 'auto' }} /> */}
            {/* <p><strong>Odds:</strong> {formData.odds}</p>
            <p><strong>Over:</strong> {formData.over}</p>
            <p><strong>Team 1:</strong> {formData.team1}</p>
            <p><strong>Team 2:</strong> {formData.team2}</p>
            <p><strong>Wager:</strong> {formData.wager}</p>
            <p><strong>Paid:</strong> {formData.paid}</p>
            <p><strong>Event Odd:</strong> {formData.eventOdd}</p>
            <p><strong>Event Player:</strong> {formData.eventPlayer}</p>
            <p><strong>Event:</strong> {formData.event}</p>
            <p><strong>Event Result:</strong> {formData.eventResult}</p> */}
            <div className="odds">
              <p><strong>{formData.odds}</strong></p>
            </div>

            <div className="Over">
              <b>Over  {formData.over} , Over  {formData.over}</b>
            </div>
            <div className="Team">
              <p><strong>{formData.team1} @ {formData.team2}</strong></p>
            </div>

            <div className="Money">
              <div className="Wager">
                <b>Wager</b><br />
                <b className='paidmoney'>{formData.wager}</b>
              </div>

              <div className="Paid">
                <b>Paid</b><br />
                <b className='paidmoney'>{formData.paid}</b>
              </div>
            </div>

            <div className="MenuID">
              <div className="UID">
                <b>ID:28282828282828282 <BsCopy /></b>
              </div>

              <div className="btnhidden">
                hide
                <BiChevronUp />
              </div>
            </div>

            <div className='Score'>
              {/* <div className="eventOdd1">
                <b>{formData.eventOdd}</b>
                <p>{formData.eventPlayer} - {formData.event}</p>
                <p className='max'>37</p>
                <div className="bar1">
                  <div className="sidebar"
                    style={{
                      width: '90px' 
                    }}
                  ></div>
                </div>
              </div> */}

              <div className="eventOdd1">
                <b>Over : {formData.eventOdd}</b>
                <p>{formData.eventPlayer} - {formData.event}</p>
                <p className='max'>37</p>
                <div className="bar1">
                  <div className="sidebar"
                    style={{
                      width: `${Math.min((formData.eventOdd / 37) * 100, 100)}%`
                    }}
                  >
                  </div>
                  <span
                    className='oddvaleur'
                    style={{
                      paddingLeft: `${Math.min((formData.eventOdd / 37) * 100, 100)}%`  // Appliquer la règle de trois pour padding-left
                    }}
                  >
                    {formData.eventOdd}
                  </span>
                </div>
              </div>




              <br />

              <div className="eventOdd2">
                <b>Over : {formData.eventOdd}</b>
                <p>{formData.eventPlayer} - {formData.event}</p>
                <p className='max'>37</p>
                <div className="bar2">
                  <div className="sidebar"
                    style={{
                      width: `${Math.min((formData.eventOdd / 37) * 100, 100)}%`
                    }}
                  >
                  </div>
                  <span
                    className='oddvaleur'
                    style={{
                      paddingLeft: `${Math.min((formData.eventOdd / 37) * 100, 100)}%`  // Appliquer la règle de trois pour padding-left
                    }}
                  >
                    {formData.eventOdd}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Formulaire;
