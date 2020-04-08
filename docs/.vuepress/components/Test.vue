<template>
    <div>
        <ClientOnly>
            <slot name="header" />
            <span>{{count}}</span>
        </ClientOnly>
    </div>
</template>
<script>
export default {
    name:'Test',
    data(){
        return {
            count:'11',
        }
    },
    mounted(){
        this.init();
    },
    mothods:{
        init(){
            console.log(this.count);
        }
    }
}
</script>