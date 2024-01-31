import TArtistInfo from '../models/ArtistInfo.model';

interface IArtistInfoRepository {
    getArtistInfo: () => Promise<TArtistInfo>;
}

export default IArtistInfoRepository;
