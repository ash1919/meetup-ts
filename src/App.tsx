import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeetupLanding from "./component/meetup-landing-page/MeetupLanding";
import RequestSpeaker from "./component/request-speaker-page/RequestSpeaker";
import RequestSponsor from "./component/request-sponsor-page/RequestSponsor";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MeetupLanding />} />
          <Route path="/speaker" element={<RequestSpeaker />} />
          <Route path="/sponsor" element={<RequestSponsor />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
