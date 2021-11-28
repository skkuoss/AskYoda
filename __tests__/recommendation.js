const axios = require('axios');

describe('Test recommendation API', () => {
    test('/autocomplete GET - Gangname Style', async () => {
        const res = await axios.get('http://localhost:3100/v1/autocomplete?trackName=gan');
        expect({
            status: res.status,
            name: res.data.body.tracks.items[2].name
        }).toEqual({
            status: 200,
            name: 'Gangnam Style (강남스타일)'
        });
    });
    test('/autocomplete GET - Here Comes The Sun', async () => {
        const res = await axios.get('http://localhost:3100/v1/autocomplete?trackName=here');
        expect({
            status: res.status,
            name: res.data.body.tracks.items[0].name
        }).toEqual({
            status: 200,
            name: 'Here Comes The Sun - Remastered 2009'
        });
    });
    test('/recommendations GET', async () => {
        const res = await axios.get('http://localhost:3100/v1/recommendations?songs=gan&songs=Here%20Comes%20The%20Sun%20-%20Remastered%202009%20-%20The%20Beatles');
        expect({
            status: res.status,
            length: res.data.tracks.length
        }).toEqual({
            status: 200,
            length: 20
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