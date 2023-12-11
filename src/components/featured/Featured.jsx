import "./featured.css";
import useFetch from "../../hooks/useFetch.js"

const Featured = () => {

      const { data, loading, error } = useFetch(
         "/hostels/countByAddress?addresses=Kikoni,Wandegeya,Kikumi Kikumi",
         
       );
    
  return (
    <div className="featured">
      {
        loading ? ("Loading... Please wait!") : 
        (<>
        <div className="featuredItem">
        <img
          src="https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG_20220126_152607-75a4ab50.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kikoni</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cdn.howwe.ug/__newz__/_800_500_/howwe_7b2d9d1557e4369ec3ea48966e5ba8c0_1489045600.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Wandegeya</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.kcca.go.ug/includes/slider/img/home/AQ5Z1922.JPG"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kikumi Kikumi</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>)}
    </div>
  );
};

export default Featured;
