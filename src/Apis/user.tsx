const getLogin = async (user: string, pass: string) => {
  return user === 'sara' && pass === '1234'
    ? {
        user: {
          name: 'Sara',
        },
        token: 1,
      }
    : false;
};

const UserAPI = {
  getLogin,
};

export default UserAPI;
