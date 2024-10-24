// import { useState } from 'react';
// import { BiShoppingBag, BiChevronUp } from "react-icons/bi";
// import { AiFillCloseCircle } from 'react-icons/ai';
// import HeaderPic from './assets/HardRock.jpg';
// import { BiSolidCopyAlt } from "react-icons/bi";
// import Logo from './Capture.jpg';
// import { BiMoney } from "react-icons/bi";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function NavBar() {
//   return (
//     <div className="row align-middle hr-header-wrapper hide-for-small-only navbar">
//       <div className="column small-order-1">
//         <div className="row align-middle logo-and-verticals gg">
//           <div className="column shrink">
//             <img
//               className="header-logo"
//               src={Logo}
//               alt="HR Logo"
//               data-cy="header-logo"
//             />
//           </div>
//           <div className="solde">
//             <BiMoney />300
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Betting = ({ matches, handleSelect }) => {
//   const [selectedBets, setSelectedBets] = useState({});

//   const onBetSelect = (matchId, option, odds, name) => {
//     setSelectedBets((prevState) => {
//       if (prevState[matchId]) {
//         const newState = { ...prevState };
//         delete newState[matchId];
//         handleSelect(matchId, null, null, null);
//         return newState;
//       } else {
//         const newState = {
//           ...prevState,
//           [matchId]: { option, odds, name }
//         };
//         handleSelect(matchId, option, odds, name);
//         return newState;
//       }
//     });
//   };

//   return (
//     <div className="betting-container">
//       {matches.map((match) => (
//         <div key={match.id} className="match">
//           <h2>{match.team1} Vs {match.team2}</h2>
//           <p>{match.competition}</p>

//           <div className="bet-options">
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === '1' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, '1', match.odds.team1, match.team1)}
//             >
//               <div>1</div>
//               <br />
//               <span>{match.odds.team1}</span>
//             </div>
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === 'X' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, 'X', match.odds.draw, 'Draw')}
//             >
//               <span>X</span>
//               <br />
//               <span>{match.odds.draw}</span>
//             </div>
//             <div
//               className={`bet-option ${selectedBets[match.id]?.option === '2' ? 'selected' : ''}`}
//               onClick={() => onBetSelect(match.id, '2', match.odds.team2, match.team2)}
//             >
//               <span>2</span>
//               <br />
//               <span>{match.odds.team2}</span>
//             </div>
//           </div>
//           <br />
//           <br />
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// const Card = ({ selectedBets, wager }) => {
//   const [isMiseVisible, setIsMiseVisible] = useState(true);

//   const payout = Object.keys(selectedBets).reduce((acc, matchId) => {
//     return acc * (selectedBets[matchId]?.odds || 1);
//   }, wager);

//   const toggleMiseVisibility = () => {
//     setIsMiseVisible(!isMiseVisible);
//   };

//   return (
//     <div className="bodyFroms">
//       <div className="bodyContents">
//         <img src={HeaderPic} alt="Header" />
//         <div className="description">
//           <div className="descriptionLeft">
//             <span>SGP</span>
//             <span className="bet">Multiple Bets</span>
//           </div>
//           <div className="descriptionRight">
//             {Object.keys(selectedBets).length} Bets
//           </div>
//         </div>

//         <div className="Details">
//           {Object.keys(selectedBets).map((matchId) => (
//             <div key={matchId}>
//               <p>{selectedBets[matchId]?.name} - {selectedBets[matchId]?.option}</p>
//             </div>
//           ))}
//         </div>

//         <div className="money">
//           <div className="wager">
//             Wager <br />
//             <b className="bigFont">{wager ? `$${wager}` : 'No wager set'}</b>
//           </div>
//           <div className="Paid">
//             Paid <br />
//             <b className="bigFont">{wager ? `$${payout.toFixed(2)}` : 'N/A'}</b>
//           </div>
//         </div>

//         <div className="footerContents">
//           <div className="Uid">
//             ID:1923781083198468726
//             <button
//               onClick={() => {
//                 navigator.clipboard.writeText("1923781083198468726");
//                 toast.success("ID copiée dans le presse-papiers !"); // Afficher un toast de succès
//               }}
//             >
//               <BiSolidCopyAlt />
//             </button>
//           </div>
//           <div className="HidenBtn" onClick={toggleMiseVisibility}>
//             {isMiseVisible ? 'Hide' : 'Show'}
//             <BiChevronUp className='IconsAffiche' />
//           </div>
//         </div>

//         {isMiseVisible && (
//           <div className="Mise">
//             {Object.keys(selectedBets).map((matchId) => (
//               <div className="MiseBody" key={matchId}>
//                 <div className="MiseCote">
//                   <span>
//                     <AiFillCloseCircle />
//                   </span>
//                   Odds: {selectedBets[matchId]?.odds}
//                 </div>
//                 <span className="MiseDescriptipn">
//                   Selected bet for {selectedBets[matchId]?.name}.

//                 </span>
//                 <br />
//                 <span className='MiseDescriptionNote'> {selectedBets[matchId]?.odds} </span>
//                 <br />
//                 <div className='line'>
//                   <div className="miniline"></div>
//                 </div>
// <br />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const FormsPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedBets, setSelectedBets] = useState({});
//   const [wager, setWager] = useState(1);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (matchId, option, odds, name) => {
//     setSelectedBets((prevBets) => {
//       if (option === null) {
//         const newBets = { ...prevBets };
//         delete newBets[matchId];
//         return newBets;
//       }
//       return {
//         ...prevBets,
//         [matchId]: { option, odds, name }
//       };
//     });
//   };

//   const matches = [
//     {
//       id: 1,
//       team1: 'Real Madrid',
//       team2: 'FC Barcelona',
//       competition: 'International Clubs',
//       odds: { team1: 3.25, draw: 2.86, team2: 3.25 },
//     },
//     {
//       id: 2,
//       team1: 'M United',
//       team2: 'Chelsea FC',
//       competition: 'Premier League',
//       odds: { team1: 2.90, draw: 3.10, team2: 3.25 },
//     },
//     {
//       id: 3,
//       team1: 'Bayern Munich',
//       team2: 'Borussia Dortmund',
//       competition: 'Bundesliga',
//       odds: { team1: 1.80, draw: 3.50, team2: 4.55 },
//     },
//   ];

//   return (
//     <div>
//       <NavBar />
//       <Betting matches={matches} handleSelect={handleSelect} />
//       <button onClick={togglePopup} className="popup-button">
//         <BiShoppingBag />
//       </button>
//       {isOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <Card
//               selectedBets={selectedBets}
//               wager={wager}
//             />
//           </div>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default FormsPage;












// import React, { useState } from 'react';
// import Image from './assets/HardRock.jpg';
// import './App.css';

// const Formulaire = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   // Function to handle form submission
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const formValues = Object.fromEntries(new FormData(event.target).entries());
//     setFormData(formValues); // Store form values
//     setIsModalVisible(true); // Show modal
//   };

//   // Function to close modal
//   const handleModalClose = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         background: darkMode ? '#0d1117' : '#f0f2f5',
//         color: darkMode ? '#fff' : '#000',
//         padding: '50px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <form
//         onSubmit={handleFormSubmit}
//         style={{
//           background: darkMode ? '#161b22' : '#fff',
//           padding: '2rem',
//           borderRadius: '8px',
//           boxShadow: darkMode
//             ? '0px 4px 12px rgba(0, 0, 0, 0.5)'
//             : '0px 4px 12px rgba(0, 0, 0, 0.1)',
//             maxWidth: '600px',
//             width: '100%',
//         }}
//       >
//         {/* Odds and Over */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="odds">Odds</label>
//             <input type="text" id="odds" name="odds" defaultValue="-3333" placeholder="Odds" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="over">Over</label>
//             <input type="text" id="over" name="over" defaultValue="24.5" placeholder="Over" />
//           </div>
//         </div>

//         {/* Team 1 and Team 2 */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="team1">Team 1</label>
//             <input type="text" id="team1" name="team1" defaultValue="Lions" placeholder="Team 1" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="team2">Team 2</label>
//             <input type="text" id="team2" name="team2" defaultValue="Cowboys" placeholder="Team 2" />
//           </div>
//         </div>

//         {/* Wager and Paid */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="wager">Wager</label>
//             <input type="text" id="wager" name="wager" defaultValue="$1" placeholder="Wager" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="paid">Paid</label>
//             <input type="text" id="paid" name="paid" defaultValue="$1.03" placeholder="Paid" />
//           </div>
//         </div>

//         {/* Event Odd and Event Player */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="eventOdd">Event Odd</label>
//             <input type="text" id="eventOdd" name="eventOdd" defaultValue="Over 24.5" placeholder="Event Odd" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="eventPlayer">Event Player</label>
//             <input type="text" id="eventPlayer" name="eventPlayer" defaultValue="CeeDee Lamb" placeholder="Event Player" />
//           </div>
//         </div>

//         {/* Event and Event Result */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="event">Event</label>
//             <input type="text" id="event" name="event" defaultValue="to record 25+ receiving yards" placeholder="Event" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="eventResult">Event Result</label>
//             <input type="text" id="eventResult" name="eventResult" defaultValue="37" placeholder="Event Result" />
//           </div>
//         </div>

//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#04c073',
//             borderColor: '#52c41a',
//             width: '100%',
//             height: '45px',
//             fontWeight: 'bold',
//             letterSpacing: '0.5px',
//             fontSize: '16px',
//             marginTop: '2rem',
//             border: 'none',
//             color: '#fff',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//           }}
//         >
//           Soumettre
//         </button>
//       </form>

//       {isModalVisible && (
//         <div className='modal'>
//           <div className='modal-content'>
//             <img src={Image} alt="" />
//             <br />
//             <button onClick={handleModalClose}>Fermer</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Formulaire;




















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
            <button onClick={handleModalClose}>x</button>

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
