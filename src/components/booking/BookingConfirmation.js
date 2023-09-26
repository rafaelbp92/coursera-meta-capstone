import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookingConfirmation = () => {
    return (
        <div className="container confirmed-booking">
          <FontAwesomeIcon icon={faCircleCheck} size="3x" />
          <h2>Your reservation has been confirmed.</h2>
          <p>You will receive an email the confirmation details.</p>
        </div>
      );
}

export default BookingConfirmation;