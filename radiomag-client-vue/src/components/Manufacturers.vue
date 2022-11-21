<template>
  <article class="linecard borders manufacturers">
    <h2 class="linecard__header-text">Компоненти виробників</h2>
    <div class="manufacturers__list">
        <img class="manufacturers__image" src="https://www.ti.com/etc/designs/ti/images/ui/ic-logo.svg" alt="">
        <img class="manufacturers__image" src="https://www.st.com/etc/clientlibs/st-site-cx/media/app/images/st-logo.svg" alt="">
        <img class="manufacturers__image manufacturers__image_size-small" src="https://www.vishay.com/images/vishay-logo.png" alt="">

    </div>
</article>
</template>

<style lang="scss">
.manufacturers {
    margin-bottom: 23px;

    &__list {
        width: 100%;
        padding: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 23px;
    }

    &__image {
        max-width: 100%;

        &_size-small {
            width: 100px;
        }
    }
}
</style>
