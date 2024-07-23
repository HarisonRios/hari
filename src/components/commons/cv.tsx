import "../../styles/_cvcard.scss"; 
import DownloadButton from '../partials/dowloadbutton';

const CvCard = () => {
  return (
    <div className="item cvcard">
      <div className="itenscv"> 
      <h2> Download Currículo (PDF) </h2>
      <DownloadButton/>
    </div>
    </div>
  );
};

export default CvCard;
