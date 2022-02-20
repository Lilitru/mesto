class UserInfo {
    constructor({nameSelector, infoSelector, avatarSelector}){
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement =document.querySelector(infoSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    getUserInfo(){
        return {
            name: this._nameElement.textContent,
            info: this._infoElement.textContent,
            avatar: this._avatar.src
        }
    }

    setUserInfo({name, info, avatar, id}){
        this._nameElement.textContent = name;
        this._infoElement.textContent = info;
        this._avatar.src = avatar
    }
}

export default UserInfo;