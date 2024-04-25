import axios from "axios";

const login = {
    namespaced: true,
    state: {
        loginData: [],
    },
    getters: {
        getlogin: (state) => state.loginData,
    },
    actions: {
        async fetchLogin({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/users/7"
                );
                commit("SET_lOGIN", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_LOGIN(state, login) {
            state.kategoriData = login;
        },
    },
};

export default login;