<template>
    <div class="todo">
        <h1>Todo</h1>
        <ul>
        <li v-for="item in items">
            <input type="checkbox" v-model="item.completed" />
            <span v-text="item.text"></span>
        </li>
        </ul>
         <v-text-field
          append-icon="mdi-close"
          prepend-icon="mdi-phone" 
          v-model="newItem" 
          @keyup.enter="addItem" 
        >
         Ingresar Todo
        </v-text-field>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { text: 'Learn JavaScript', completed: true },
                { text: 'Learn Vue', completed: false },
                { text: 'Build something awesome', completed: false }
            ],
            newItem: ''
        }
    },
    methods: {
        addItem() {
            this.items.push({
                text: this.newItem,
                completed: false
            })
            this.newItem = ''
        }
    }
}
</script>

<style>

</style>