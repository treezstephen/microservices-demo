import got from 'got';

const LISTING_SERVICE_URI = 'http://listings-service:7100';

export default class ListingsService {
    static async createListing({ description, title }) {
        const body = await got.post(`${LISTING_SERVICE_URI}/listings`, {
            json: {
                description, title
            }
        }).json();
        return body;
    }
    
    static async fetchAllListings() {
        const body = await got.get(`${LISTING_SERVICE_URI}/listings`).json();
        return body;
    }
}
