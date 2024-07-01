import clsx from 'clsx';

import StatBlock from '@/components/server/console/StatBlock';

import { ip } from '@/lib/formatters';

import { ServerContext } from '@/state/server';

// const getBackgroundColor = (value: number, max: number | null): string | undefined => {
//     const delta = !max ? 0 : value / max;

//     if (delta > 0.8) {
//         if (delta > 0.9) {
//             return 'bg-red-500';
//         }
//         return 'bg-yellow-500';
//     }

//     return undefined;
// };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const ServerAllocation = ({ className }: { className?: string }) => {
    const allocation = ServerContext.useStoreState((state) => {
        const match = state.server.data!.allocations.find((allocation) => allocation.isDefault);

        return !match ? 'n/a' : `${match.alias || ip(match.ip)}:${match.port}`;
    });

    return (
        <div className={clsx('flex md:flex-row gap-4 flex-col', className)}>
            <div
                className='transform-gpu skeleton-anim-2'
                style={{
                    display: 'flex',
                    width: '100%',
                    animationDelay: `150ms`,
                    animationTimingFunction:
                        'linear(0,0.01,0.04 1.6%,0.161 3.3%,0.816 9.4%,1.046,1.189 14.4%,1.231,1.254 17%,1.259,1.257 18.6%,1.236,1.194 22.3%,1.057 27%,0.999 29.4%,0.955 32.1%,0.942,0.935 34.9%,0.933,0.939 38.4%,1 47.3%,1.011,1.017 52.6%,1.016 56.4%,1 65.2%,0.996 70.2%,1.001 87.2%,1)',
                }}
            >
                <StatBlock title={'IP Address'} copyOnClick={allocation}>
                    {allocation}
                </StatBlock>
            </div>
        </div>
    );
};

export default ServerAllocation;
