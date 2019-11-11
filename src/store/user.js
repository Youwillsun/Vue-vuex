const user = {
    state: {
        userInfo: 0
    },
    getters: {
        userGetter(state) {
            return `current userInfo is ${state.userInfo}`
        }
    },
    mutations:{
        increase(state,n){
            state.userInfo+=n
        }
    },
    actions:{
        myuserincrease(context){
            context.commit('increase',2);
        }
    }
}

export default user;