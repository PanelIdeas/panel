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
                d='M3.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L9.293 8 3.646 2.354a.5.5 0 010-.708z'
            />
            <path
                fillRule='evenodd'
                d='M7.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L13.293 8 7.646 2.354a.5.5 0 010-.708z'
            />
        </svg>
    );
};

export default HugeIconsChevronDoubleRight;
