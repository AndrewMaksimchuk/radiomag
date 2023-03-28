<script setup lang="ts">
import type { WorkerProduct } from "@/public/types";
import { computed } from "vue";
import { useGoods } from "@/store/goods";

const props = defineProps<{
  product: WorkerProduct;
  filterHeaders: string[];
}>();

const storeGoods = useGoods();

const sumOfAllDescription = computed(() =>
  props.product.description.reduce((total, currentValue, index) => {
    if (index === 0 || currentValue === undefined) return total;
    return `${total + currentValue} `;
  }, "")
);

const addGoodsToStorage = () =>
  storeGoods.add({
    product: props.product,
    filterHeaders: props.filterHeaders,
  });
</script>

<template>
  <div class="card-line__center-description">
    <RouterLink
      class="card-line__center-description-header-text"
      :to="{ name: 'goods', params: { code: product.id } }"
      @click="addGoodsToStorage"
    >
      <h3>{{ product.description[0] }}</h3>
    </RouterLink>

    <div class="card-line__center-description-small">
      <RouterLink
        class="common-link"
        :to="{ name: 'goods', params: { code: product.id } }"
        @click="addGoodsToStorage"
      >
        <p class="card-line__center-description-small-paragraph">
          {{ $t("card.codeGoods") }}:
          <span
            class="card-line__center-description-small-paragraph_light-color"
          >
            {{ product.id }}
          </span>
        </p>
      </RouterLink>

      <p
        v-if="product.description[1]"
        class="card-line__center-description-small-paragraph"
      >
        {{ $t("card.production") }}:
        <span class="card-line__center-description-small-paragraph_light-color">
          {{ product.description[1] }}</span
        >
      </p>
    </div>

    <p class="card-line__center-description-main-text">
      {{ sumOfAllDescription }}
    </p>

    <p
      v-if="product.datasheet_link_data"
      class="card-line__center-description-tech-info"
    >
      <img
        class="card-line__center-description-tech-info-icon"
        src="/images/pdf.svg"
        alt="file specification"
      />
      <a
        class="card-line__center-description-tech-info-link"
        target="_blank"
        :href="
          'https://www.rcscomponents.kiev.ua/' + product.datasheet_link_data
        "
      >
        {{ $t("card.technicalInformation") }}
      </a>
    </p>
  </div>
</template>

<style lang="scss">
.card-line {
  &__center {
    &-description {
      flex: 5;
      color: var(--color-gray-dark);
      padding-right: 28px;

      @media (max-width: $breakpoint-tablet) {
        flex: auto;
        padding: 0;
        padding-bottom: 16px;
      }

      &-header-text {
        display: block;
        text-decoration: none;
        color: var(--color-black-light);
        font-size: 1.4rem;
        padding-bottom: 20px;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      &-small {
        padding-bottom: 6px;

        &-paragraph {
          color: var(--color-black-light);
          font-weight: 700;
          padding-bottom: 10px;

          &_light-color {
            color: var(--color-gray-dark);
            font-weight: 400;
          }
        }
      }

      &-main-text {
        line-height: 1.8rem;
        padding-bottom: 12px;
      }

      &-tech-info {
        display: flex;
        align-items: center;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        &-icon {
          width: 18px;
          height: 18px;
          padding-right: 5px;
        }

        &-link {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
}
</style>
