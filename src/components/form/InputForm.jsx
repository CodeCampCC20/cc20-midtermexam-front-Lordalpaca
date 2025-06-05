function InputForm({ text, error, id, type = "text", ...itemInput }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{text}</label>
      <input
        className={`px-4 py-2 bg-gray-200 rounded-xl ${
          error ? "outline-1 outline-red-500" : "outline-0"
        } outline-0 placeholder:text-sm`}
        type={type}
        id={id}
        {...itemInput}
        // placeholder={placeholder}
        // onChange={handleChange}
        // value={value}
      />
      <p className="text-xs text-red-500">{error}</p>
    </div>
  );
}

export default InputForm;
