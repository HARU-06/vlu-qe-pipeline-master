const { login } = require('./auth');

test('đăng nhập đúng với admin/123 trả về true', () => {
  expect(login('admin', '123')).toBe(true);
});

