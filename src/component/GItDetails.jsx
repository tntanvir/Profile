import React, { useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { gitUser } from '../App';
const GItDetails = () => {
    const [gThem, setGThem] = useContext(gitUser);
    return (

        <div className='w-full flex justify-center flex-col items-center py-5 rounded-2xl md:px-8 px-2'>
            <div className='border border-[#00dc82]/20 w-full flex justify-center items-center flex-col p-3 rounded-2xl '>
                <div>
                    <h1 className="bgcolors text-white text-xl sm:text-2xl font-bold rounded-md px-3 py-1 w-fit" >My Github Activity</h1>
                </div>
                <div className='pt-7 flex justify-center items-center overflow-x-scroll w-full'>
                    {
                        gThem === "light" ?
                            <GitHubCalendar colorScheme='light' username={'tntanvir'} />
                            :
                            <GitHubCalendar colorScheme='dark' username={`tntanvir`} />
                    }
                </div>
            </div>


        </div>
    );
};

export default GItDetails;