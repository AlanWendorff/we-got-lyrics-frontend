import { useEffect, useState } from 'react';
import TArtistInfo from '@core/artistInfo/domain/models/ArtistInfo.model'; // Modelo de retorno de datos
import artistInfoController from '@core/artistInfo/application/ArtistInfo.controller'; // Controlador de ...
import artistInfoRepository from '@core/artistInfo/infrastructure/repositories/ArtistInfo.repository'; // Repositorio de ...

interface IUseGetArtistInfo {
    data: TArtistInfo | null;
    isLoading: boolean;
    error: string;
}

const useGetArtistInfo = (): IUseGetArtistInfo => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [artistInfo, setArtistInfo] = useState<TArtistInfo | null>(null);

    useEffect(() => {
        artistInfoController(artistInfoRepository())
            .getArtistInfo("Guns n' roses")
            .then((response) => {
                setArtistInfo(response);
            })
            .catch((error) => {
                setError(`Error getting artist information ${error}`); // Manejar errores
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return {
        data: artistInfo,
        isLoading,
        error
    };
};

export default useGetArtistInfo;
