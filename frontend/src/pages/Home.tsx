import whatWeDo from '../assets/what we do.jpeg';
import whatWeOffer from '../assets/what we offere.webp';
import whatYouGet from '../assets/what you get.jpeg';

const Home = () => {
    const sectionStyle = 'flex md:flex-nowrap lg:flex-nowrap flex-wrap gap-8 my-12 justify-center items-center ';
    const imageStyle =
        'md:w-60 md:h-60 object-contian rounded-lg';
    const heading3Style = 'text-lg text-gray-400';
    return (
        <main className='w-4/5 max-w-[60rem] container mx-auto'>
            <section className={sectionStyle}>
                <img className={imageStyle} src={whatWeDo} alt='A group of students' />
                <div>
                    <h3 className={heading3Style}>What we do</h3>
                    <p className='my-8'>
                        Our swimming sessions are meticulously designed to cater to
                        individuals of all skill levels, from beginners to advanced
                        swimmers. We commence each session with a comprehensive warm-up,
                        preparing the body for the ensuing activity. Through a series of
                        targeted drills, we focus on refining fundamental techniques such as
                        breathing, body positioning, and stroke mechanics. The main set of
                        the session is strategically structured to challenge swimmers'
                        endurance and speed, aiming to enhance their overall fitness and
                        performance. We conclude each session with a cooldown period,
                        incorporating slower swimming and stretching exercises to aid in
                        recovery and minimize the risk of injury.{' '}
                    </p>
                </div>
            </section>

            <section className={sectionStyle}>
                <img
                    className={imageStyle}
                    src={whatWeOffer}
                    alt='A list of sessions'
                />
                <div>
                    <h3 className={heading3Style}>What we offer</h3>
                    <p className='my-8'>
                        Our sessions provide a multifaceted approach to swimming, offering
                        individualized coaching, structured programs, and a welcoming
                        community environment. Led by experienced coaches, participants
                        receive personalized feedback and guidance tailored to their
                        specific needs and goals. We cater to a diverse range of swimmers,
                        offering sessions suitable for those aiming to learn to swim,
                        improve technique, or train for competitions. Our programs are
                        meticulously planned to target various aspects of swimming fitness
                        and technique, ensuring steady progress and achievement.
                        Additionally, participants benefit from access to top-notch
                        facilities equipped with amenities such as locker rooms, showers,
                        and rental equipment.
                    </p>
                </div>
            </section>
            <section className={sectionStyle}>
                <img className={imageStyle} src={whatYouGet} alt='A certificate' />
                <div>
                    <h3 className={heading3Style}>What you get</h3>
                    <p className='my-8'>
                        Participants in our swimming sessions can expect a myriad of
                        benefits, including improved technique, increased fitness levels,
                        and goal achievement. Through focused drills and coaching, swimmers
                        refine their skills and develop confidence in their abilities. Our
                        structured programs facilitate steady progress towards individual
                        goals, whether it's mastering a new stroke or competing in a race.
                        Moreover, participants join a supportive community of fellow
                        swimmers, fostering connections and encouragement. With safety
                        prioritized and a focus on enjoyment, participants experience not
                        only physical gains but also a sense of fulfillment and satisfaction
                        in their swimming journey.{' '}
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;
