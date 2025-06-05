function BtnForm({ children, isLoading, handleSubmit }) {
  return (
    <button
      onClick={handleSubmit}
      disabled={isLoading}
      className="w-full mt-4 py-2 bg-gray-700 text-white rounded-xl cursor-pointer hover:bg-gray-800 duration-300"
    >
      {children}
    </button>
  );
}

export default BtnForm;
