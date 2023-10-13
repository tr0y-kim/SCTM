<template>
    <v-row no-gutters class="matrix-item">
        <v-col v-for="(item, index) in matrix" :key="index" lg="1.5">
            <v-card class="elevation-0">
                <v-card-title class="matrix-title-area">
                    <div class="matrix-title" :class="isSelectMode ? 'none-cursor' : ''" @click="() => isSelectMode ? {} : $router.push({
                        name: 'tactics-tactic',
                        params: {
                            tactic: item.to.replace('/', ''),
                        }
                    })">{{ item.title }}</div>
                    <div class="matrix-sub-title">{{ item.subTitle ?? "&nbsp;" }}</div>
                    <div class="matrix-length">{{ item.items.length }} techniques</div>
                </v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item-group v-model="item.selectedItem" multiple color="#7f0025">
                        <v-list-item v-for="(subItem, subIndex) in item.items" :key="subIndex">
                            <v-list-item-content :class="isSelectMode ? 'none-cursor' : ''" class="matrix-content"
                                @click="() => subItemClick(index, subIndex)">{{ subItem.title }}</v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'matrix',
    props: {
        items: {
            type: Array,
            default: []
        },
        isSelectMode: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            matrix: [],
        }
    },
    created() {
        this.matrix.push(...this.items);
        for (const itemKey in this.matrix) {
            for (const _itemKey in this.matrix[itemKey].items) {
                this.matrix[itemKey].selectedItem = [];
            }
        }
    },
    methods: {
        subItemClick(index, subIndex) {
            const item = this.matrix[index];
            const subItem = this.matrix[index].items[subIndex]
            if (this.isSelectMode) {
                this.$emit("select-change", this.matrix);
            }
            else {
                this.$router.push({
                    name: 'techniques-tactic-technique',
                    params: {
                        tactic: item.to.replace('/', ''),
                        technique: subItem.to.replace('/', '')
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.matrix-item {
    width: 100% !important;
    overflow-y: auto !important;
    flex-wrap: nowrap !important;
}

.matrix-title-area {
    justify-content: center;
    flex-direction: column;
}

.matrix-title {
    font-size: 14px;
    cursor: pointer;
}

.matrix-sub-title {
    font-size: 12px;
}

.matrix-length {
    font-size: 12px;
}

.matrix-content {
    font-size: 13px;
    cursor: pointer;
}

a {
    text-decoration: none;
}

.none-cursor {
    cursor: default !important;
}
.matrix-item .col {
    min-width: 200px
}
</style>