interface cardProps {
    image?: string;
    isFlipped?: boolean;
    onClick?: () => void;
}

const Card = (Props: cardProps)=> {

const {image , isFlipped , onClick} = Props

return (
   <div
  className="w-full aspect-[3/2] max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[200px] perspective-1000 cursor-pointer"
  onClick={onClick}
>
  <div
    className={`relative w-full h-full border-2 border-my-accent-color rounded-2xl transition-transform duration-500 transform-style-preserve-3d ${
      isFlipped ? 'rotate-y-180' : ''
    }`}
  >
    
    {/* FRONT FACE (image) */}
    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-my-primary-color rounded-2xl">
      <img
        src={image}
        alt="card"
        className="w-full h-full object-contain p-1 sm:p-3"
      />
    </div>
     {/* BACK FACE (❓ side) */}
    <h1 className="absolute inset-0 w-full h-full backface-hidden  bg-my-secondary-color rounded-2xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
      ?
    </h1>

   
  </div>
</div>
)

}

export default Card