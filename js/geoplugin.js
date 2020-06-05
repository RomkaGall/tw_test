function geoplugin_request() { return '88.155.22.49';} 
function geoplugin_status() { return '206';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\'http://www.maxmind.com\'>http://www.maxmind.com</a>.';} 
function geoplugin_delay() { return '1ms';} 
function geoplugin_city() { return '';} 
function geoplugin_region() { return '';} 
function geoplugin_regionCode() { return '';} 
function geoplugin_regionName() { return '';} 
function geoplugin_areaCode() { return '';} 
function geoplugin_dmaCode() { return '';} 
function geoplugin_countryCode() { return 'UA';} 
function geoplugin_countryName() { return 'Ukraine';} 
function geoplugin_inEU() { return 0;} 
function geoplugin_euVATrate() { return ;} 
function geoplugin_continentCode() { return 'EU';} 
function geoplugin_latitude() { return '50.4522';} 
function geoplugin_longitude() { return '30.5287';} 
function geoplugin_locationAccuracyRadius() { return '500';} 
function geoplugin_timezone() { return 'Europe/Kiev';} 
function geoplugin_currencyCode() { return 'UAH';} 
function geoplugin_currencySymbol() { return '&#8372;';} 
function geoplugin_currencySymbol_UTF8() { return '₴';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 26.6922; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#8372;'+(Math.round(converted * 100)/100);} 
	return false; 
} 