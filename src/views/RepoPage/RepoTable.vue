<template>
  <cv-data-table :columns="columns" :title="title" :helper-text="helperText">
	  <template slot="data">
		<cv-data-table-row v-for="(row, rowIndex) in data" :key="`${rowIndex}`"> 
			<cv-data-table-cell
			  v-for="(cell, cellIndex) in row.data"
			  :key="`${cellIndex}`"
			  >{{cell}}</cv-data-table-cell>
			  
			  <template slot="expandedContent">
			  {{ row.description }}
			  </template>
		</cv-data-table-row>
	  </template>
  </cv-data-table>
</template>


<style lang="scss">
@import '../../styles/carbon-utils';

.repo-page .bx--row {
  padding-top: $spacing-05;
  padding-bottom: $spacing-05;
}
</style>