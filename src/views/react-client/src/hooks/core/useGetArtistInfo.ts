import { useEffect, useState } from 'react';
import { TSubject } from '@core/wanikani/domain/models/Subject'; // Modelo de retorno de datos
import { wanikaniController } from '@core/wanikani/application/WanikaniController'; // Controlador de ...
import { wanikaniRepository } from '@core/wanikani/infrastructure/repositories/WanikaniRepository'; // Repositorio de ...

const useGetArtistInfo = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [artistInfo, setArtistInfo] = useState<TSubject[]>([]);

    useEffect(() => {
        wanikaniController(wanikaniRepository())
            .getSubjectsByUser()
            .then((subjects) => {
                setArtistInfo(subjects);
            })
            .catch((error) => {
                setError(`Error getting subjects ${error}`); // Manejar errores
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
