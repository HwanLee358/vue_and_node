<template>
    <div>
        마우스 위치: {{ x }}, {{ y }}
    </div>
    <input type="text" v-model="num1"> + 
    <input type="text" v-model="num2"> = 
    <span>{{ result }}</span>
</template>
<script setup>
import {plusCalulator} from '../common'
let {num1, num2, result} = plusCalulator();

import { useMouse } from '@/mouse';
const {x,y} = useMouse();
</script>