import { HugeIconProps } from './props';

const HugeIconsActivityLog = (props: HugeIconProps) => {
    return (
        <svg
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
            width='24'
            height='24'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill={props.fill}
                fillRule='evenodd'
                d='M0 1.5A.5.5 0 01.5 1h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4 3A.5.5 0 01.5 7h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4 3a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

export default HugeIconsActivityLog;
