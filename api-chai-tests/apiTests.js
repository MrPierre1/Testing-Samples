

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = 'https://reqres.in/api';
var expect = require('chai').expect
chai.use(chaiHttp);

  describe('Users', () => {
      it('Can GET all the users', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
              expect(res.body.data).to.be.an('array')
              expect(res.body).to.include.all.keys('page', 'data', 'total')
              expect(res.body.data).to.not.be.empty;
              done();
            });
      });
      it('Can GET a single user', (done) => {
        chai.request(server)
            .get('/users/2')
            .end((err, res) => {
              expect(res.body.data.id).to.equal(2)
              done();
            });
      });
      it('Can POST a single user', (done) => {
        chai.request(server)
            .post('/users')
            .send({
                "name": "morpheus",
                "job": "leader"
              })
            .end((err, res) => {
              expect(res.statusCode).to.equal(201)
              expect(res.body.job).to.equal('leader')
              done();
            });
      });
      it('Can PUT a single user', (done) => {
        chai.request(server)
            .put('/users/2')
            .send({
                "name": "morpheus",
                "job": "zion resident"
              })
            .end((err, res) => {
              expect(res.statusCode).to.equal(200)
              expect(res.body.job).to.equal('zion resident')
              done();
            });
      });
      it('Can PATH a single user', (done) => {
        chai.request(server)
            .patch('/users/2')
            .send({
                "name": "morpheus",
                "job": "Neo's Father"
              })
            .end((err, res) => {
              expect(res.statusCode).to.equal(200)
              expect(res.body.job).to.equal("Neo's Father")
              done();
            });
      });
      it('Can DELETE a single user', (done) => {
        chai.request(server)
            .delete('/users/2')
            .end((err, res) => {
              expect(res.statusCode).to.equal(204)
              done();
            });
      });
  });
