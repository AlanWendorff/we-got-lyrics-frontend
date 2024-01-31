import useGetArtistInfo from '@/hooks/core/useGetArtistInfo';

const Root = () => {
    const { data, error, isLoading } = useGetArtistInfo();

    if (isLoading) {
        return <div>...loading</div>;
    }

    return (
        <div>
            <ul>
                <li>{data.id}</li>
                <li>{data.name}</li>
                <li>
                    <img src={data.name} alt='band img' />
                </li>
            </ul>
        </div>
    );
};

export default Root;
