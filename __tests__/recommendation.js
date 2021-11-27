const axios = require('axios');

describe('Test recommendation API', () => {
    test('/recommendations GET', async () => {
        const res = await axios.get('http://localhost:3100/v1/recommendations');
        expect({
            status: res.status,
            data: res.data
        }).toEqual({
            status: 200,
            data: 'test'
        });
    });
    test('/recommendations POST', async () => {
        try {
            const res = await axios.post('http://localhost:3100/v1/recommendations');
        }
        catch (e) {
            expect({
                status: e.response.status
            }).toEqual({
                status: 404
            });
        }
    });
});