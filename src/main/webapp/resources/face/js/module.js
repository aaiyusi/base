$(document).ready(function () {
	$('#order-online-banner a.confirm-frozen').click(function(e) {
		e.preventDefault();
		$('#order-online-form').fadeOut();
		document.cookie = "frozenSeen=1";
	});
});