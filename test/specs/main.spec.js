const supertest = require('supertest');
const expect = require('expect')
const app =require('../../helper/app')
const request = supertest(app);

describe('pet API testing',function ()  {
    it('gets pets by id', async () => {
        const response = await request.get('/1')
        await expect(response.body.id).toEqual(1);
    });
    
    it('gets pets by status', async () => {
    const response = await request.get('/findByStatus?status=sold')
    expect(response.status).toBe(200); 
  });

});


