"use strict";
var chai = require("chai");
var chaiHttp = require("chai-http");
var App_1 = require("../src/App");
chai.use(chaiHttp);
var expect = chai.expect;
describe('GET api/v1/heroes', function () {
    it('responds with JSON array', function () {
        return chai.request(App_1["default"]).get('/api/v1/heroes')
            .then(function (res) {
            expect(res.status).to.equal(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length(5);
        });
    });
    it('should include Wolverine', function () {
        return chai.request(App_1["default"]).get('/api/v1/heroes')
            .then(function (res) {
            var Wolverine = res.body.find(function (hero) { return hero.name === 'Wolverine'; });
            expect(Wolverine).to.exist;
            expect(Wolverine).to.have.all.keys([
                'id',
                'name',
                'aliases',
                'occupation',
                'gender',
                'height',
                'hair',
                'eyes',
                'powers'
            ]);
        });
    });
});
//# sourceMappingURL=hero.test.js.map