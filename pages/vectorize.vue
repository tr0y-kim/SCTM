<template>
    <div class="main">
        <matrix :items="items" :isSelectMode="true" @select-change="matrixSelectChange" />
        <v-row>
            <v-card class="mx-auto my-12" min-width="80%">
                <v-card-text>
                    <v-text-field v-model="incident" hint="Incident" label="Incident"></v-text-field>
                    <v-textarea v-model="description" hint="Description" label="Description"></v-textarea>
                    <v-combobox v-model="reference" label="Reference" multiple chips></v-combobox>
                    <v-row>
                        <v-col>
                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="Date" prepend-icon="mdi-calendar" readonly
                                        v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="date" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modal = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(date)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-col>
                        <v-col>
                            <v-dialog ref="dialog" v-model="modal2" :return-value.sync="time" persistent width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="time" label="Time" prepend-icon="mdi-clock-time-four-outline"
                                        readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-time-picker v-if="modal2" v-model="time" full-width>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modal2 = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(time)">
                                        OK
                                    </v-btn>
                                </v-time-picker>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row align="center" justify="center" style="margin-bottom: 100px;">
            <v-btn @click="convert">Convert</v-btn>
        </v-row>
    </div>
</template>
  
<script>
import { items } from '~/static/matrix.json'
import matrix from "@/components/matrix";
export default {
    head: {
        title: `VECTORIZE!`,
    },
    data() {
        return {
            items: [],
            incident: "",
            description: "",
            reference: [],
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            time: null,
            modal: false,
            modal2: false,
            selectMatrix: []
        };
    },
    components: {
        matrix,
    },
    created() {
        this.items = items;
    },
    methods: {
        matrixSelectChange(value) {
            this.selectMatrix = value
        },
        convert() {
            if (this.selectMatrix && this.selectMatrix.length > 0) {
                const data = JSON.stringify(Object.assign({
                    matrix: this.selectMatrix.reduce((a, v) => ({ ...a, [`${v.id}`]: v.items.map((x, index) => { return v.selectedItem?.includes(index) ? x.id : null }).filter(x => x) }), {}),
                }, this.incident ? {
                    incident: {
                        name: this.incident,
                        description: this.description,
                        reference: this.reference,
                        discovery: new Date(`${this.date}T${this.time}:00`)
                    }
                } : null))
                const blob = new Blob([data], { type: 'text/plain' })
                const e = document.createEvent('MouseEvents'),
                    a = document.createElement('a');
                a.download = "vectorize.json";
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
                e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
            }
        }
    }
};
</script>
  