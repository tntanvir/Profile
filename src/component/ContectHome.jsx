import { Button } from "@material-tailwind/react";
import { IoIosSend } from "react-icons/io";


function ContectHome() {
    return (
        <section className='min-h-screen pt-20 flex flex-col items-center md:px-28 p-4 contect  gap-20'>
            <div className='text-center flex flex-col gap-7'>
                <div>
                    <h1 className='md:text-5xl text-3xl '>Contect Me</h1>
                    <p>Get in touch.</p>
                </div>

            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10 w-full  md:px-10'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15265.552781084501!2d88.76638956180435!3d25.650900152919522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb554e6d83ae8f%3A0xa8b5ce4ec2f76077!2sChirirbandar!5e0!3m2!1sen!2sbd!4v1706966762927!5m2!1sen!2sbd"
                    loading="lazy"

                    className="h-56 md:h-96 w-full  invert rounded-md"
                ></iframe>
                <div className='w-11/12 flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-10 w-full '>
                        <h1 className="text-xl text-center">WANNA START SOMETHING <span className=" text-dkText font-black text-3xl">GREAT?</span></h1>
                        <div className='w-full flex flex-col lg:flex-row md:justify-between gap-2 items-center'>
                            <input type="text" placeholder="EMAIL" className="input bg-transparent border-gray-300  input-success w-full max-w-xs  focus:opacity-100 focus:border-dkText focus:outline-none  " />
                            <input type="text " placeholder="NAME" className="input bg-transparent   border-gray-300  w-full max-w-xs  focus:opacity-100 focus:border-dkText focus:outline-none " />
                        </div>

                        <textarea className="textarea textarea-success  bg-transparent border-gray-300 focus:opacity-100 focus:border-dkText focus:outline-none min-h-44" placeholder=" MESSAGE" ></textarea>
                        <div className="flex justify-center">
                            <Button className='gap-3 items-center px-10 py-2  rounded-full bg-transparent border border-dkText opacity-100 text-black dark:text-white text-center flex justify-between w-fit'>send
                                <IoIosSend className="text-2xl" />
                            </Button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContectHome;