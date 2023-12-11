import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Hostels </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Rentals </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique hostels to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Holiday deals </li>
        </ul>
      <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Makerere Hostel Booking</div>
    </div>
  );
};

export default Footer;
