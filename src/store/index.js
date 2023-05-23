import { createStore } from 'vuex'

export default createStore({
  state: {
    coaches: [
      { 
        id: 1, 
        name: 'Оливьен Михаил Александрович', 
        age: 35, 
        description: 'Desc 1',
        skatingExp: 10, 
        teachingExp: 5, 
        discipline: 'Скейтбординг', 
        image: 'src/assets/images/Luan.jpg' 
      },
      { 
        id: 2, 
        name: 'Coach 2', 
        age: 22, 
        description: 'Desc 2', 
        skatingExp: 12, 
        teachingExp: 6, 
        discipline: 'Discipline 2' 
      },
      { 
        id: 3, 
        name: 'Coach 2', 
        age: 30, 
        description: 'Desc 2', 
        skatingExp: 12, 
        teachingExp: 6, 
        discipline: 'Discipline 2' 
      },
      { 
        id: 4, 
        name: 'Coach 2', 
        age: 43, 
        description: 'Desc 2', 
        skatingExp: 12, 
        teachingExp: 6, 
        discipline: 'Discipline 2' 
      },
      { 
        id: 5, 
        name: 'Coach 2', 
        age: 19, 
        description: 'Desc 2', 
        skatingExp: 12, 
        teachingExp: 6, 
        discipline: 'Discipline 2' 
      },
      { 
        id: 6, 
        name: 'Coach 2', 
        age: 24, 
        description: 'Desc 2', 
        skatingExp: 12, 
        teachingExp: 6, 
        discipline: 'Discipline 2' 
      },
      { 
        id: 7, 
        name: 'Coach 2', 
        age: 27, 
        description: 'Desc 2', 
        skatingExp: 12, 
        teachingExp: 6, 
        discipline: 'Discipline 2' 
      },
      { 
        id: 8, 
        name: 'Coach 2', 
        age: 29, 
        description: 'Desc 2', 
        skatingExp: 12, 
        teachingExp: 6, 
        discipline: 'Discipline 2' 
      },
      { 
        id: 9, 
        name: 'Coach 2', 
        age: 21, 
        description: 'Desc 2', 
        skatingExp: 12, 
        teachingExp: 6, 
        discipline: 'Discipline 2' 
      },

    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getCoaches: state => state.coaches,
    getCoach: state => id => state.coaches.find(coach => coach.id === id),
  },
})
