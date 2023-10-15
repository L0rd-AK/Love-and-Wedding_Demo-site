import { BsFillBuildingsFill } from 'react-icons/bs';
import { PiNumberCircleOneBold,PiNumberCircleTwoBold,PiNumberCircleFourBold, PiNumberCircleThreeBold } from 'react-icons/pi';
import { BiCommentDetail } from 'react-icons/bi';
import { FaPenToSquare } from 'react-icons/fa6';
import { GiMagicBroom } from 'react-icons/gi';

// 
const Event_planning = () => {
    return (
        <div className='mx-5 md:mx-40 mt-20 mb-40'>
            <div className='text-center'>
                <h1 className='text-3xl md:text-4xl font-bold text-black mb-6'><span className="text-[#FCB41E]">Hello!</span> We Are an Event Planning Agency</h1>
                <p className='text-black mb-10 mx-5'>As the premier event planning company in the area, we know that its not “one size fits all”. Each<br/>event and client is unique and we believe our services should be as well. We know that it should be <br/>“Can I hire a planner?” not “Can I afford one?”.</p>
                
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 justify-center items-center md:gap-40'>
                    <div className='text-center space-y-3'>
                        <div className='flex justify-center items-center'><BsFillBuildingsFill className='text-[#FF635C] text-4xl'></BsFillBuildingsFill></div>
                        <p className='text-black'>Find the perfect venu <br/> for free</p>
                        <div className='flex justify-center items-center'><PiNumberCircleOneBold className='text-[#FCB41E] text-2xl'></PiNumberCircleOneBold></div>
                    </div>
                    <div className='text-center space-y-3'>
                        <div className='flex justify-center items-center'><BiCommentDetail className='text-[#FF635C] text-4xl'></BiCommentDetail></div>
                        <p className='text-black'>Connect with the <br/>best vendor</p>
                        <div className='flex justify-center items-center'><PiNumberCircleTwoBold className='text-[#FCB41E] text-2xl'></PiNumberCircleTwoBold></div>
                    </div>
                    <div className='text-center space-y-3'>
                        <div className='flex justify-center items-center'><FaPenToSquare className='text-[#FF635C] text-4xl'></FaPenToSquare></div>
                        <p className='text-black '>Let us help the<br/> Event</p>
                        <div className='flex justify-center items-center'><PiNumberCircleThreeBold className='text-[#FCB41E] text-2xl'></PiNumberCircleThreeBold></div>
                    </div>
                    <div className='text-center space-y-3'>
                        <div className='flex justify-center items-center'><GiMagicBroom className='text-[#FF635C] text-4xl'></GiMagicBroom></div>
                        <p className='text-black '>Enjoy The party with <br/>yours friends</p>
                        <div className='flex justify-center items-center'><PiNumberCircleFourBold className='text-[#FCB41E] text-2xl'></PiNumberCircleFourBold></div>
                    </div>
                    
                </div>
              
            </div>
        </div>
    );
};

export default Event_planning;