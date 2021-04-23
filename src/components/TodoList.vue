<template>
    <div class="pt-3">
        <v-row class="d-flex justify-center">
            <v-col cols="6">
                <v-text-field label="New Todo" outlined v-model="newItem" @keyup.enter="additem"></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn large color="primary" @click="additem">Add</v-btn>
            </v-col>
        </v-row>
        <transition-group name="fade">
            <v-card class="mx-auto pa-3 ma-2 text-center" max-width="400" v-for="Todo in Todos" :key="Todo.id">
                <v-row>
                    <v-col cols="8">
                        <v-list-item-title class="headliner mb-1">{{Todo.name}}</v-list-item-title>
                    </v-col>
                    <v-col cols="4">
                        <v-btn icon color="red" @click="deleteItem(Todo.id)">
                            <v-con>mdi-delete</v-con>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </transition-group>
    </div>    
</template>

<script>
import {db} from '../firebase/db'
export default {
    data() {
        return {
            Todos: [],
            newItem: ""
        }
    },
    methods: {
        async additem(){
            if (this.newItem) {
                await db.collection("Todos").add({name: this.newItem});
                this.newItem = "";
            }
        },
        deleteItem(id) {
            db.collection("Todos").doc(id).delete();
        }
    },
    firestore: {
        Todos: db.collection("Todos")
    }
}
</script>
