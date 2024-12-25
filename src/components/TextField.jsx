const TextField = (props) => {
  const { fieldName, placeholder, type } = props;

  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium text-base">{fieldName}</p>
      <input type={type} placeholder={placeholder} className="border rounded-lg px-4 py-2 border-blue-30 focus:shadow-lg focus:outline-none" />
    </div>
  )
}

export default TextField;
