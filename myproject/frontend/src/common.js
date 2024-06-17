import { computed, reactive, toRefs } from 'vue';
function plusCalulator(){
    let state = reactive({
        num1:0, 
        num2:2, 
        result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    });
    return toRefs(state);
}

export {plusCalulator}