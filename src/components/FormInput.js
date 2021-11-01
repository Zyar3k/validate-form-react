import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input type="text" name="" id="" placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
