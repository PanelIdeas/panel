import { HugeIconProps } from './props';

const HugeIconsChevronDoubleRight = (props: HugeIconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 16 16'
            fill='currentColor'
            className={'h-6 w-6' + (props.className ? ` ${props.className}` : '')}
        >
            <path
                fillRule='evenodd'
                d='M8.354 1.646a.5.5 0 010 .708L2.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z'
            />
            <path
                fillRule='evenodd'
                d='M12.354 1.646a.5.5 0 010 .708L6.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z'
            />
        </svg>
    );
};

export default HugeIconsChevronDoubleRight;
