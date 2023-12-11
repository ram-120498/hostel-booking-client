import useFetch from "../../hooks/useFetch.js"
import "./propertyList.css";

const PropertyList = () => {

  const { data, loading, error } = useFetch("/hostels/countByType");

  const images = [
    "https://miro.medium.com/v2/resize:fit:1400/0*ED56y_XvY_nVoQ4V",
    "https://www.tanundahotel.com.au/images/tanunda/22.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCd92hgXnfPHB6jX56sh1N1w0NL9Cwd3Whw&usqp=CAU"
  ];

  return (
    <div className="pList">
     
      {loading ? (
        "Loading... Please Wait!"
        ) : (
          <>
        {data && images.map((img,i)=>(

      <div className="pListItem" key={i}>
        <img
          src={ img }
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.type}s</h1>
          <h2>{data[i]?.count} {data[i]?.type}s</h2>
        </div>
      </div>
      ))}
      </>
      )}

    </div>
  );
};

export default PropertyList;
