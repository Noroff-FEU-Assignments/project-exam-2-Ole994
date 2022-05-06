import BookingsForm from "../admin/BookingsForm";
import axios from "axios";
import { BASE_URL, AUTH_URL } from "../helpers/api/api";

const Contact = () => {
  const sendBooking = async (formData) => {
    const options = {
      data: {
        title: formData.title,
        message: formData.message,
        contact: formData.contact,
      },
    };
    const responseData = await axios.post(AUTH_URL, options);
    console.log(responseData);
  };

  return (
    <div>
      <h1>This Page is Public</h1>
      <p>Anyone can access this page</p>
      <h3>Send booking:</h3>
      <BookingsForm sendBooking={sendBooking} />
    </div>
  );
};

export default Contact;
