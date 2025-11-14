import { defineStore } from 'pinia';

// Создаём store с именем "main"
export const useMainStore = defineStore('main', {
    // состояние (state)
    state: () => ({
        name: 'Nazrin' as string,
        age:18,
        color:"green"
    }),

    // действия (actions)
    actions: {
        setName(newName: string) {
            this.name = newName;
        }
    }
});
