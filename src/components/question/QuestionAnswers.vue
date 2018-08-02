<template>
    <div>
        <div v-for="(answer,index) in question.answers">
            <div :class="['col', 's12', returnAnswerClass(index)]">
                <div :class="['card-panel','card-panel-' + index]" @click="increaseClickCounter(answer)">
                    <p class="card-answer">{{answer.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['question'],
        methods: {
            increaseClickCounter(answer) {
                answer.clicked++;
                this.$emit('answered');
            },
            returnAnswerClass(index){
                let big = 'm7';
                let small = 'm5';

                switch (index) {
                    case 0:
                        return small;
                    case 1:
                        return big;
                    case 2:
                        return big;
                    case 3:
                        return small;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>