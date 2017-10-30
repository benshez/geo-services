describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <geo-service-home>', function () {
    var home = element(by.css('geo-service-app geo-service-home'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home Works!");
  });

});
