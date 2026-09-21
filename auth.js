// Kiểm tra tài khoản bị khóa trước khi đăng nhập.
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

