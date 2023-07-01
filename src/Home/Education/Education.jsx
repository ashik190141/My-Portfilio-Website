import Bounce from 'react-reveal/Bounce';

const Education = () => {
    return (
        <div className="max-w-7xl mx-auto mt-32 mb-32">
            <Bounce top>
                <h2 className="text-center font-extrabold mb-14
                    text-3xl md:text-5xl text-transparent bg-clip-text 
                    bg-gradient-to-r from-indigo-500 to-yellow-500"
                >
                Education
                </h2>
            </Bounce>
            <div className='md:flex md:flex-col md:items-center md:justify-center md:gap-10'>
                <div className='flex flex-col md:flex-row md:gap-20 mb-20 md:mb-0'>
                    <div data-aos="flip-left" data-aos-duration="2000" className='text-white text-center bg-orange-700 font-bold text-xl rounded-full 
                    w-48 h-48 p-5 flex flex-col items-center justify-center mb-3 md:mb-0 ml-20 md:ml-0'>
                        <div>January 2020</div>
                        <div>To Present</div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full md:w-[700px] h-48 rounded-2xl'>
                        <div className='text-white text-xl font-semibold flex flex-col md:pl-10'>
                            <p className='mt-10 md:mt-14'>Jashore University of Science and Technology</p>
                            <p>Computer Science and Engineering</p>
                            <p>CGPA: 3.58 (upto 4<sup>th</sup> semester)</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:gap-20 mb-20 md:mb-0'>
                    <div data-aos="flip-up" data-aos-duration="2000"  className='text-white text-center bg-orange-700 font-bold text-xl mb-3 md:mb-0 
                    rounded-full w-48 h-48 p-5 ml-20 md:ml-0
                    flex flex-col items-center justify-center'>
                        <div>August 2016</div>
                        <div>February 2018</div>
                    </div>
                    <div data-aos="flip-down" data-aos-duration="2000" className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full md:w-[700px] h-48 rounded-2xl'>
                        <div className='text-white text-xl font-semibold flex flex-col md:pl-10'>
                            <p className='mt-10 md:mt-14'>Satkhira Government College</p>
                            <p>Science (Higher Secondary Certificate)</p>
                            <p>GPA: 4.33</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:gap-20 mb-20 md:mb-0'>
                    <div data-aos="flip-left" data-aos-duration="2000"  className='text-white text-center bg-orange-700 font-bold text-xl 
                    rounded-full w-48 h-48 p-5 ml-20 md:ml-0
                    flex flex-col items-center justify-center mb-3 md:mb-0'>
                        <div>January 2008</div>
                        <div>February 2016</div>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="2000" className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full md:w-[700px] h-48 rounded-2xl'>
                        <div className='text-white text-xl font-semibold flex flex-col md:pl-10'>
                            <p className='mt-10 md:mt-14'>Satkhira Government High School</p>
                            <p>Science (Secondary School Certificate)</p>
                            <p>GPA: 5.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;