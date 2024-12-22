const BlueButton = (props) => {
  const { btnName } = props;
  return (
    <button type="button" className="flex justify-center items-center gap-3 px-8 py-2 text-base font-medium cursor-pointer text-white bg-blue-10 rounded-lg">
      <p>{btnName}</p>
    </button>
  )
}

export default BlueButton