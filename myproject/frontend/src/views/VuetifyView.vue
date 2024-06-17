<template>
    <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
        <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Open Dialog"
        variant="flat"
        ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
        <v-card title="카드">
        <v-card-text>
            일괄 작업을 끝내시겟습니까?
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
        </v-card>
    </template>
    </v-dialog>
    <v-pagination :length="5" start="5" @update:model-value="goPage"></v-pagination>
    <br>
    <v-data-table :items="items" ></v-data-table>
    <br>
    <router-link to="/composition"><button>composition</button></router-link>
    <br>
    <router-link to="/compositionMouse"><button>compositionMouse</button></router-link>
</template>
<script>
export default {
    data(){ return {
        items : [
            {
                name: 'African Elephant',
                species: 'Loxodonta africana',
                diet: 'Herbivore',
                habitat: 'Savanna, Forests',
            },
            // ... more items
        ]
    }; },
    created(){},
    methods: {
        goPage(page){
            console.log(page)
        }
    }
}
</script>
<style></style>