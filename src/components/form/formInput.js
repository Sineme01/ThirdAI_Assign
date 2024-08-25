//Responsible for taking input in name and email section for formPage.
const FormInput = ({ label, type, value, onChange, onBlur, error }) => (
  <label className="block mb-2">
    {label}:
    <input
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required
      className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </label>
);

export default FormInput;