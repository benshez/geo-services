describe('Login', () => {

    beforeEach(() => {
        browser.get('/user');
    });

    it('should have correct feature heading', () => {
        expect(element(by.css('sd-login h2')).getText()).toEqual('Features');
    });

});
