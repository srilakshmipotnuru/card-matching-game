import sparkle from "../assets/sparkle.svg"
interface popUpProps {
    showPopUp: boolean
    onClick: ()=>void
}

const PopUp = (props:popUpProps)=>{
    const {showPopUp,onClick} = props
    if(!showPopUp) return null;
    return(
       <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-my-primary-color rounded-2xl border-4 border-my-bg-color w-[30%] h-[30%] p-10 flex flex-col items-center gap-4">
            <div className="flex flex-row items-center gap-4">
                <img src={sparkle} alt="sparkle" className="w-8 h-8"/>
                <p className="text-my-secondary-color text-3xl font-bold mb-2 text-center "> Well done </p> 
                <img src={sparkle} alt="sparkle" className="w-8 h-8"/>
            </div>
            <p className="text-my-secondary-color text-center">you found all the pairs!!</p>
            <button className="border-2 border-my-bg-color rounded-2xl bg-my-secondary-color text-my-text-color p-4 w-[50%] hover:bg-[#7b281c]" onClick={onClick}>Play again!</button>
        </div>
       </div>
    )
}

export default PopUp