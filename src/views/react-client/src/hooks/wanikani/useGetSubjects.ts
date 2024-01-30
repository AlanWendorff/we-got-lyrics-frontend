import { useEffect, useState } from 'react';
import { TSubject } from '@core/wanikani/domain/models/Subject';
import { wanikaniController } from '@core/wanikani/application/WanikaniController';
import { wanikaniRepository } from '@core/wanikani/infrastructure/repositories/WanikaniRepository';

const useGetSubjects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [kanjis, setKanjis] = useState<TSubject[]>([]);
    const [radicals, setRadicals] = useState<TSubject[]>([]);
    const [vocabulary, setVocabulary] = useState<TSubject[]>([]);

    useEffect(() => {
        wanikaniController(wanikaniRepository())
            .getSubjectsByUser()
            .then((subjects) => {
                setKanjis(subjects.filter((subject) => subject.object === 'kanji'));
                setRadicals(subjects.filter((subject) => subject.object === 'radical'));
                setVocabulary(subjects.filter((subject) => subject.object === 'vocabulary'));
            })
            .catch((error) => {
                setError(`Error getting subjects ${error}`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return {
        data: {
            kanjis,
            radicals,
            vocabulary
        },
        isLoading,
        error
    };
};

export default useGetSubjects;
