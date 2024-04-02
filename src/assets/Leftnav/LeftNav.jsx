import "@/assets/Leftnav/Leftnav.css";
import PropTypes from 'prop-types';

function LeftNav({sidebar,showNav}) {
  
  return (
    <div className={`left-nav resp-hide ${sidebar ? "" : "hide-nav"} ${showNav ? "":"resp-show"}`}>
      <div className="mt-1 flex flex-col">
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icons"
          >
            <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
          </svg>
          <span className="poppins-medium">Home</span>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icons"
          >
            <path d="m260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
          </svg>
          <span className="poppins-medium">Explore</span>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icons"
          >
            <path d="M440-120q-75 0-140.5-28T185-225q-49-49-77-114.5T80-480q0-75 28-140.5T185-735q49-49 114.5-77T440-840q21 0 40.5 2.5T520-830v82q-20-6-39.5-9t-40.5-3q-118 0-199 81t-81 199q0 118 81 199t199 81q118 0 199-81t81-199q0-11-1-20t-3-20h82q2 11 2 20v20q0 75-28 140.5T695-225q-49 49-114.5 77T440-120Zm112-192L400-464v-216h80v184l128 128-56 56Zm168-288v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
          </svg>
          <span className="poppins-medium">Watch Later</span>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icons"
          >
            <path d="M120-440v-320q0-33 23.5-56.5T200-840h240v400H120Zm400-400h240q33 0 56.5 23.5T840-760v160H520v-240Zm0 720v-400h320v320q0 33-23.5 56.5T760-120H520ZM120-360h320v240H200q-33 0-56.5-23.5T120-200v-160Z" />
          </svg>
          <span className="poppins-medium">Library</span>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icons"
          >
            <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z" />
          </svg>
          <span className="poppins-medium">Settings</span>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icons"
          >
            <path d="M402-40q-30 0-56-13.5T303-92L48-465l24-23q19-19 45-22t47 12l116 81v-383q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v320h80v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h80v-360q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v360h80v-280q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v560q0 66-47 113T680-40H402Z" />
          </svg>
          <span className="poppins-medium">Report History</span>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icons"
          >
            <path d="M480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-154h74q0-36 8-53t34-43q35-35 49.5-58.5T624-602q0-53-36-85.5T491-720q-55 0-93.5 27T344-618l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-33 29-45.5 55.5T444-394ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
          </svg>
          <span className="poppins-medium">Help</span>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="icons"
          >
            <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
          </svg>
          <span className="poppins-medium">Send feedback</span>
        </div>
        <div className="subs poppins-medium">
          <span>Developer</span>
        </div>
        <div className="nav-item c">
          <div className="dev poppins-medium">
          <a href="https://in.linkedin.com/in/rohit-pandilwar-059991234?trk=public_profile_browsemap" target="blank_" className="nav-link"><img src="Devprof1.png" alt="Dev" className="DEvProf" /></a>
              <span>Rohit Pandilwar</span>
              <span className="span2">Nagpur</span>
          </div>
        </div>
      </div>
    </div>
  );
}
LeftNav.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  showNav: PropTypes.bool.isRequired,
};
export default LeftNav;
