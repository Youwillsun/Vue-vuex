import {INCREMENT,DECREMENT} from './mutation-types'
const app = {
    // 全局状态
    state: {
        count: 0
    },
    // 对state的状态数据进行包装，辅助方法
    getters: {
        myCount(state) {
            return `current count is ${state.count}`
        }
    },
    // 操作state数据
    mutations: {
        // // count++ 并传参，state是默认参数
        // increment(state, n) {
        //     state.count += n;
        // },
        // // count--
        // decrement(state, n) {
        //     state.count -= n;
        // }
        
        // 使用定义的常量的名字 默认是字符串，以中括号包起来，解释为常量
        [INCREMENT](state, n) {
            state.count += n;
        },
        // count--
        [DECREMENT](state, n) {
            state.count -= n;
        }
    },
    // 数据业务逻辑，不涉及页面行为
    actions: {
        // 在actions里调用mutations里的方法，会传进来一个context参数，就像mutations调用state里的数据，会把state当做参数传进来类似。
        // 接收调用时传过来的方法
        myIncrease(context, str) {
            // context.commit('increment', 2);
            context.commit(INCREMENT, 2);

            console.log('>>>>>>' + str);
        },
        myDecrease(context) {
            // context.commit('decrement', 1);
            context.commit(DECREMENT, 1);
        }
    }
}

export default app;