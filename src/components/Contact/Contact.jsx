import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <p className={css.text}>
          <BsFillPersonFill size={14} className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill size={14} className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delite
      </button>
    </>
  );
};

export default Contact;
