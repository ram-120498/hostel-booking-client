import useFetch from "../../hooks/useFetch.js"
import "./featuredProperties.css";

const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("/hostels/countByType");
  
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://api.rentalynk.com/properties/120/6.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Olympia Hostel</span>
        <span className="fpCity">Kikoni</span>
        <span className="fpPrice">Starting from UgShs 1,500,000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG-20220126-WA0010-31041436.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">New Nana Hostel</span>
        <span className="fpCity">Kagugube</span>
        <span className="fpPrice">Starting from UgShs 1,600,000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://api.rentalynk.com/properties/76/1.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nakyingi Hostel</span>
        <span className="fpCity">Kikoni</span>
        <span className="fpPrice">Starting from UgShs 1,200,000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://campusbee.ug/wp-content/uploads/2016/05/WhatsApp-Image-20160502-3.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Kalmax Hostel</span>
        <span className="fpCity">Wandegeya</span>
        <span className="fpPrice">Starting from UgShs 1,200,000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
