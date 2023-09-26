const PrimaryButton = ({label, action}) => {
    return <button className="primaryButton" onClick={action}>{label}</button>
}

export default PrimaryButton;