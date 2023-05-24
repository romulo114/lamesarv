<script>
(function () {
    //These variables are not critical to the operation, but capturing for future possible use
    const pageProtocol = window.location.protocol;
    const pageDomain = window.location.host;
    const pagePathname = window.location.pathname;

    //pageSearch gets the entire 
    const pageSearch = window.location.search;
    const pageUrlParams = new URLSearchParams(pageSearch);

    let utmSource = pageUrlParams.get('utm_source');
    let utmCampaign = pageUrlParams.get('utm_campaign');
    let utmMedium = pageUrlParams.get('utm_medium');
    let utmTerm = pageUrlParams.get('utm_term');
    
    
})();
</script>