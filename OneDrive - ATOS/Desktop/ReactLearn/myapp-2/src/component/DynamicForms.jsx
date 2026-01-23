const DynamicForms = ({type, name, placeholder, value, onChange}) => {
    return <input type = {type} name={name} placeholder={placeholder} value={value} onChange={onChange} />;
}

export default DynamicForms;