import BookingsForm from "../admin/BookingsForm";
import axios from "axios";
import { HOTELS_URL } from "../helpers/api/api";

const Contact = () => {
  const sendBooking = async (formData) => {
    const options = {
      data: {
        title: formData.title,
        message: formData.message,
        contact: formData.contact,
      },
    };
    const responseData = await axios.post(HOTELS_URL, options);
    console.log(responseData);
  };

  return (
    <>
      <div className="contactContainer">
        <h1>Kontakt oss</h1>
        <BookingsForm sendBooking={sendBooking} />
      </div>
    </>
  );
};

export default Contact;
