
export const generateToken = (nickName:string) => {
    const tokenWithoutName = Math.random().toString(36).substring(2);
    const token = `${nickName}-${tokenWithoutName}`;
    return token;
}

export const addToStorage = (name:string) => {
    localStorage.setItem(name, generateToken(name))
}

export const getFromStorage = (value:string) => {
    localStorage.getItem(value)
}

export const removeFromStorage = (value:string) => {
    localStorage.removeItem(value)
}

export const ClearStorage = () => {
    localStorage.clear()
}

export const CheckStorage = () => {
    return localStorage.length
}

export const Islogged = ():boolean => {
    if (CheckStorage() > 0) {
        return true;
    }
    else {
        return false;
    }
}
