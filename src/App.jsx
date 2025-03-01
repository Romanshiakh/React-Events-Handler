
import { useState } from "react";
function App()
{
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();


  const handleNameChange = (event) =>
  {
    setName(event.target.value);
  }

  const handleQuantityChange = (event) =>
  {
    setQuantity(event.target.value);
  }

  const handleCommentChange = (event) =>
  {
    setComment(event.target.value);
  }


  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-indigo-400 text-center  text-3xlm-4
      rounded-2xl m-5 p-2 w-100 h-auto border shadow-xl">
          <input value={name} className="border shadow-xl rounded mt-2 hover:bg-indigo-300 p-2 w-65 h-10 mb-3" onChange={handleNameChange} />
          <p className="text-2xl text-white m-2">Name: {name}</p>

          <input value={quantity} type="number" className="border shadow-2xl rounded mt-2  p-2 w-65 h-10 mb-3" onChange={handleQuantityChange} />
          <p className="text-2xl text-white m-2">Quantity:{quantity}</p>

          <textarea name="" id="" value={comment} onChange={handleCommentChange} className="border shadow-2xl w-65 h-20"></textarea>
          <p className="text-2xl text-white m-2">Comment :{comment}</p>
        </div>
      </div>
    </>
  )
}

export default App
