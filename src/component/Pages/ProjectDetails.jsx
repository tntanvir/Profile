import React from 'react';
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
    const { id } = useParams();
    return (
        <div className='min-h-screen'>

            {
                id && <p>{id}</p>
            }
        </div>
    );
};

export default ProjectDetails;