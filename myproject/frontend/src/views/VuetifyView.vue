<template>
    <v-pagination :length="4"></v-pagination>
    <br>
    <v-data-table :items="items"></v-data-table>
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
    methods: {}
}
</script>
<style></style>