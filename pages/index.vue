<template>
  <div class="main">
    <v-container style="max-width: 1000px; position: relative; margin-bottom: 100px;">
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col align="center" justify="center"><v-img :src="require(`~/assets/logo.svg`)"
                max-width="200"></v-img></v-col>
          </v-row>
          <v-row>
            <p>The acronym SCTM refers to the Smart Contract TTP Matrix. It provides an analytical framework to
              understand and anticipate the Tactics, Techniques, and Procedures (TTPs) deployed by attackers against Smart
              Contracts, a promising and emerging technology within the blockchain space. By understanding the SCTM,
              developers of Smart Contracts can gain insight into which tactics and techniques need to be prioritized and
              safeguarded against. For those wishing to delve deeper into this, please click on the <NuxtLink to="/why">
                'Why?'</NuxtLink> tab.</p>
            <p>This matrix is inspired by and developed from the <a href="https://attack.mitre.org/" target="_blank"
                rel="noopener noreferrer">MITRE ATT&CK
                framework</a> and the <a href="https://swcregistry.io/" target="_blank" rel="noopener noreferrer">SWC
                Registry</a>, which catalog
              known vulnerabilities. It consolidates possible TTPs that can occur in Smart Contracts, offering a
              comprehensive overview of potential threat landscapes in the realm of blockchain-based contracts.</p>
          </v-row>
        </v-col>
        <v-col align="center" justify="center" style="align-self: center;"><v-img
            :src="require(`~/assets/korea_university.png`)" max-width="200"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <matrix :items="items" style="margin-bottom: 100px;"/>
  </div>
</template>

<script>
import { items } from '~/static/matrix.json'
import matrix from "@/components/matrix";
export default {
  head: {
    title: `HOME`,
  },
  data() {
    return {
      items: [],
    };
  },
  components: {
    matrix,
  },
  created() {
    this.items = items;
  }
};
</script>
