/**
 * Kiểm tra đăng nhập cho bài Ver 2.
 * Tài khoản mẫu hợp lệ là admin / 123.
 * Tài khoản có tên locked hoặc blocked được xem là bị khóa.
 */
function login(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') {
    return false;
  }

  if (username.trim() === '' || password === '') {
    return false;
  }

  if (username === 'locked' || username === 'blocked') {
    return false;
  }

  return username === 'admin' && password === '123';
}

module.exports = { login };

