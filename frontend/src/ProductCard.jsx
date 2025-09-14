const ProductCard = () => {
return(
    <div className="border-2 border-black w-[300px]  flex flex-col items-center gap-5 pt-4 pb-3 rounded-lg bg-violet-50">
       <img src="P1.webp" alt="Product Image" className="[w-150px] h-[150px] border-2 border-blue-500 rounded-full border-dashed bg-zinc-900" />
       <div className="flex flex-col gap-2 items-center">
       <h2 className="font-bold text-4xl">CAMERA</h2>
       <p className="text-xl  text-gray-600 text-center">this is a camera product with good quality</p>
       <p className="text-lg font-semibold border-2 border-red-600 border-dotted text-blue-400">Price:2000$</p>
       </div>
       <button className="bg-emerald-500 w-[90%] py-1 rounded-2xl cursor-pointer hover:bg-emerald-900" >Add to Cart</button>
    </div>
)

}

export default ProductCard;