const PrimaryButton = ({ label, action, type, disabled }) => {
  return (
    <button className="primaryButton" onClick={action} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default PrimaryButton;
