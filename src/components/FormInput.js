import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input
        type="text"
        name={props.name}
        id=""
        // ref={props.refer}
        placeholder={props.placeholder}
        // onChange={(e) => props.setUsername(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
