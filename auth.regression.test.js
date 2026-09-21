const { login } = require('./auth');

describe('login regression tests', () => {
  test('mật khẩu sai trả về false', () => {
    expect(login('admin', 'sai-mat-khau')).toBe(false);
  });

  test('username rỗng trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('mật khẩu rỗng trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('mật khẩu chứa ký tự đặc biệt không hợp lệ trả về false', () => {
    expect(login('admin', '123!@#')).toBe(false);
  });

  test('tài khoản bị khóa trả về false', () => {
    expect(login('locked', '123')).toBe(false);
  });

  test('tài khoản không tồn tại trả về false', () => {
    expect(login('guest', '123')).toBe(false);
  });

  test('username không phải chuỗi trả về false', () => {
    expect(login(null, '123')).toBe(false);
  });
});

