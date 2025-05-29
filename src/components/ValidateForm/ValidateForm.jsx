import { RiEditFill } from "react-icons/ri";

const ValidateForm = ({ userData, onEdit }) => {
  return (
    <div className="summary">
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Password:</strong> {userData.password}</p>
      <button onClick={onEdit}>
        Edit Information <RiEditFill />
      </button>
    </div>
  );
};

export default ValidateForm;

