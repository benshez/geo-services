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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmUyZS1zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsImJyb3dzZXIiLCJnZXQiLCJpdCIsImhvbWUiLCJlbGVtZW50IiwiYnkiLCJjc3MiLCJleHBlY3QiLCJpc1ByZXNlbnQiLCJ0b0VxdWFsIiwiZ2V0VGV4dCJdLCJtYXBwaW5ncyI6IkFBQUFBLFNBQVMsTUFBVCxFQUFpQixZQUFZOztBQUUzQkMsYUFBVyxZQUFZO0FBQ3JCQyxZQUFRQyxHQUFSLENBQVksR0FBWjtBQUNELEdBRkQ7O0FBSUFDLEtBQUcsZ0NBQUgsRUFBcUMsWUFBWTtBQUMvQyxRQUFJQyxPQUFPQyxRQUFRQyxHQUFHQyxHQUFILENBQU8sa0NBQVAsQ0FBUixDQUFYO0FBQ0FDLFdBQU9KLEtBQUtLLFNBQUwsRUFBUCxFQUF5QkMsT0FBekIsQ0FBaUMsSUFBakM7QUFDQUYsV0FBT0osS0FBS08sT0FBTCxFQUFQLEVBQXVCRCxPQUF2QixDQUErQixhQUEvQjtBQUNELEdBSkQ7QUFNRCxDQVpEIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmUyZS1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUoJ0hvbWUnLCBmdW5jdGlvbiAoKSB7XG5cbiAgYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgYnJvd3Nlci5nZXQoJy8nKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBoYXZlIDxnZW8tc2VydmljZS1ob21lPicsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG9tZSA9IGVsZW1lbnQoYnkuY3NzKCdnZW8tc2VydmljZS1hcHAgZ2VvLXNlcnZpY2UtaG9tZScpKTtcbiAgICBleHBlY3QoaG9tZS5pc1ByZXNlbnQoKSkudG9FcXVhbCh0cnVlKTtcbiAgICBleHBlY3QoaG9tZS5nZXRUZXh0KCkpLnRvRXF1YWwoXCJIb21lIFdvcmtzIVwiKTtcbiAgfSk7XG5cbn0pO1xuIl19