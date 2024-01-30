const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.WANIKANI_API_KEY
};

export const http = {
    get: async <T>(url: string) => {
        const response = await fetch(url, {
            method: 'GET',
            headers
        });
        return (await response.json()) as T;
    },
    post: async <T>(url: string, body: Record<string, any>) => {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });
        return (await response.json()) as T;
    },
    put: async <T>(url: string, body: Record<string, any>) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers,
            body: JSON.stringify(body)
        });
        return (await response.json()) as T;
    },
    delete: async <T>(url: string) => {
        const response = await fetch(url, {
            method: 'DELETE',
            headers
        });
        return (await response.json()) as T;
    }
};
