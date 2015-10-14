
<script>
	$('ul.nav li li').hover(
	function() {
	$(this).find('ul.multilevel-linkul-0').stop(true, true).delay(50).fadeIn(250);},
	function() {
	$(this).find('ul.multilevel-linkul-0').stop(true, true).delay(50).fadeOut(100);
});
</script>