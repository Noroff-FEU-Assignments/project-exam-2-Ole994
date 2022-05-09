import BookingsForm from "../admin&Login/admin/BookingsForm";
import axios from "axios";
import { BOOKINGS_URL } from "../helpers/api/api";

const Contact = () => {
  const sendMsg = async (formData) => {
    const options = {
      data: {
        title: formData.title,
        message: formData.message,
        contact: formData.contact,
      },
    };
    const responseData = await axios.post(BOOKINGS_URL, options);
    // console.log(responseData);
  };

  return (
    <div>
      <h1>Meldinger</h1>
      <p>Lais</p>
      <h3>Send melding:</h3>
      <BookingsForm sendMsg={sendMsg} />
    </div>
  );
};

export default Contact;
