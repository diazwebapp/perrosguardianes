/**
 * Created by yaniv on 7/20/15.
 */

window.gigyaInit = window.gigyaInit || [];
window.gigyaAem = window.gigyaAem || {};
window.gigyaAem.functions = window.gigyaAem.functions || {};


window.gigyaAem.functions.raasOnLoginCallback = function (res) {
    var currentUrl = window.location.href.split('?')[0],
        loginData = JSON.stringify(window.gigyaAem.functions.extractLoginData(res));

    jQuery.ajax("/bin/gigya/login/j_gigya_login",
        {
            data: {
                j_gigya_uid: res.UID,
                j_gigya_uid_sig: res.UIDSignature,
                j_gigya_sig_time: res.signatureTimestamp,
                j_gigya_apikey: window.__gigyaApiKey,
                j_gigya_conf_name: window.__gigyaConfName,
                j_validate: true
            },
            dataType: "text",
            type: "POST",
            async: false,
            global: false,
            success: function (data, code, jqXHR) {
                var resJson = JSON.parse(data);

                if (resJson.authenticated) {
                        const urlParams = new URL(window.location.href);
                        urlParams.searchParams.delete('gig_actions');
                        urlParams.searchParams.delete('gig_brand');

					if (window.CQ_Analytics && CQ_Analytics.ProfileDataMgr) {
                        CQ_Analytics.ProfileDataMgr.loadProfile(resJson.userid);
                       // CQ.shared.Util.reload(null, urlParams.toString());
                         window.location.href=urlParams.toString();
                    } else {
                        window.location.href=urlParams.toString();
					}
                }
            },
            error: function () {
                console.log("Error login in user");
                gigya.accounts.logout();
            }
        }
    )
}


window.gigyaAem.functions.extractLoginData = function (res) {
    var loginData = {};
    return loginData;
}


window.regAddExternalActionLocation = function (eventObj) {
	//needed to keep CQ from adding a csrf token to the form. actual location is ignored
	if (location.protocol == 'https:') {
		jQuery('#' + eventObj.currentScreen + ' > form').prop('action', 'https://www.gigya.com');
	} else {
		jQuery('#' + eventObj.currentScreen + ' > form').prop('action', 'http://www.gigya.com');
	}
}

window.raasProfileUpdate = function (eventObj) {
	jQuery.ajax("/bin/gigya/raas/profileup",
		{
			data: {
				"guid": eventObj.response.UID,
				"confName": window.__gigyaConfName
			},
			dataType: "text",
			type: "POST",
			async: false,
			global: false
		}
	)
}