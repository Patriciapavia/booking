import React from 'react';

import studentsImg from '../assets/students.jpg';
import listImg from '../assets/list.jpg';
import certificateImg from '../assets/certificate.jpg';

const Home = () => {


    const sectionStyle = 'flex gap-8 my-12'
    const imageStyle = 'w-40 h-40 object-contain rounded-full'
    const heading3Style = 'text-lg text-gray-400'
    return (


        <main className='w-4/5 max-w-[60rem] mx-12'  >
            <section className={sectionStyle}>
                <img className={imageStyle} src={studentsImg} alt="A group of students" />
                <div>
                    <h3 className={heading3Style}>What we do</h3>
                    <p className='my-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magni, minima sint distinctio aperiam maxime, omnis nisi totam ipsum dolor tempora obcaecati ab assumenda, qui earum iure id nostrum! Tenetur?
                    </p>
                </div>
            </section>

            <section className={sectionStyle}>
                <img className={imageStyle} src={listImg} alt="A list of sessions" />
                <div>
                    <h3 className={heading3Style}>What we offer</h3>
                    <p className='my-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima rerum voluptas eligendi blanditiis doloremque in repellat amet perspiciatis. Sequi nobis alias rem eaque, doloribus aut perspiciatis! Asperiores, minima sit?
                    </p>
                </div>
            </section>
            <section className={sectionStyle}>
                <img className={imageStyle} src={certificateImg} alt="A certificate" />
                <div>
                    <h3 className={heading3Style}>What you get</h3>
                    <p className='my-8'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quasi ullam, eum quod laboriosam dolor sed architecto commodi illo error a. Quaerat blanditiis maxime eaque dolores, facilis amet fugit numquam.
                    </p>
                </div>
            </section >
        </main >

    )
}

export default Home