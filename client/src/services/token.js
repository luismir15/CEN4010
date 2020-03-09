export const store = (token) => {
    localStorage.setItem('token', token);
}

export const get = () => localStorage.getItem('token');