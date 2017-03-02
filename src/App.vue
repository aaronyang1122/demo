<template>
	<div class="app">
	  <app-nav></app-nav>
		<app-main></app-main>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import { AppNav, AppFooter, AppMain } from './components/layout/'
	
	export default {
	  components: {
	    AppNav,
	    AppFooter,
	    AppMain
	  }
	}
</script>
<style>
	html, body {
    color: #505050;
    line-height: 1.75em;
    background: #ebebeb;
    position: relative;
    background-color: #FFF;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "WenQuanYi Micro Hei", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
  }
</style>
