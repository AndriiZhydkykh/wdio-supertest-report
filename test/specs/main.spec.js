const supertest = require('supertest');
const app =require('../../helper/app');
const request = supertest(app);
const assert = require('assert');
const { URLSearchParams } = require('url');


describe('pet API testing',function ()  {
    it('gets pets by id', async () => {
        const response = await request.get('/3');
        expect(response.body.id).toEqual(3);
        expect(response.status).toBe(200);
        console.log*(response.data )   
    });

    it('gets pets by status sold', async () => {
    const response = await request.get('/findByStatus',{
        searchParams:{ status:"sold" }
    })
    expect(response.status).toBe(200); 
  });

    it('gets pets by status available', async () => {
    const response = await request.get('/findByStatus',{
        searchParams:{ status:"available" }
    })
        expect(response.status).toBe(200); 
  });

    it('gets pets by status pending', async () => {
    const response = await request.get('/findByStatus',{
        searchParams:{ status:"pending" }
    })
    expect(response.status).toBe(200); 
    });

    it('gets pets by status pending,available', async () => {
        const response = await request.get('/findByStatus',{
        searchParams: new URLSearchParams({status:["pending","available"]})
    })


    });

});


