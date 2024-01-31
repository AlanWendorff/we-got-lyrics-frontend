import IArtistInfoDTO from './dto/ArtistInfo.dto';

const mock: IArtistInfoDTO = {
    id: 707,
    name: "Guns n' Roses",
    artist_img:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2F1000marcas.net%2Fguns-n-roses-logo%2F&psig=AOvVaw1pez5mBni5nHk-sfU7TDgy&ust=1706809382306000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiVv9zIloiEAxXBt5UCHTOqARMQjRx6BAgAEBY',
    irrelevant_data_1: 1,
    irrelevant_data_2: 2,
    irrelevant_data_3: 3,
    irrelevant_data_4: 4,
    irrelevant_data_5: 5
};

const httpMock = {
    get: async <T>(url: string) => {
        return new Promise((resolve) =>
            setTimeout(() => {
                switch (url) {
                    case '/artistInfo':
                        resolve(mock);
                        break;

                    case '/otherEndpoint':
                        resolve(mock);
                        break;
                    default:
                        break;
                }
            }, 1000)
        ) as T;
    },
    post: async <T>(url: string, body: Record<string, any>) => {
        return new Promise((resolve) => setTimeout(() => resolve(mock), 1000)) as T;
    },
    put: async <T>(url: string, body: Record<string, any>) => {
        return new Promise((resolve) => setTimeout(() => resolve(mock), 1000)) as T;
    },
    delete: async <T>(url: string) => {
        return new Promise((resolve) => setTimeout(() => resolve(mock), 1000)) as T;
    }
};

export default httpMock;
