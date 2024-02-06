import Button from '../UI/Button.tsx';

type SessionItemProps = {
    id: string;
    title: string;
    summary: string;
    image: string;
};

export default function SessionItem({
    image,
    title,
    summary,
    id,
}: SessionItemProps) {
    return (
        <article className='flex flex-col bg-teal-500 text-white rounded-md overflow-hidden shadow-md text-center'>
            <img className='w-full h-48 object-cover' src={image} alt={title} />
            <div className="flex flex-col justify-between p-4">
                <div>
                    <h3 className=' text-xs'>{title}</h3>
                    <p className='text-gray-200 text-base'>{summary}</p>
                </div>
                <p className="mt-3">
                    <Button className='hover:text-white text-teal-800' to={id}>Learn More</Button>
                </p>
            </div>
        </article>
    );
}
