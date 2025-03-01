import React, { useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { gitUser } from '../App';
const GItDetails = () => {
    const [gThem, setGThem] = useContext(gitUser);
    return (

        <div className='w-full flex justify-center flex-col items-center py-5 rounded-2xl border border-[#00dc82]/20'>
            <div>
                <h1 className="bgcolors text-white text-xl sm:text-2xl font-bold rounded-md px-3 py-1">My Github Activity</h1>
            </div>
            <div className='pt-7 '>
                {
                    gThem === "light" ?
                        <GitHubCalendar colorScheme='light' username={'tntanvir'} />
                        :
                        <GitHubCalendar colorScheme='dark' username={`tntanvir`} />
                }
            </div>


        </div>
    );
};

export default GItDetails;