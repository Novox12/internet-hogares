$(document).ready(function() {
	function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 1 is increment */

		$this.html(++current);
		if(current > $this.data('count')){
			$this.html($this.data('count'));
		} else {
			setTimeout(function(){count($this)}, 700);
		}
	}

	$(".stat-count").each(function() {
		$(this).data('count', parseInt($(this).html(), 10));
		$(this).html('0');
		count($(this));
	});
});
