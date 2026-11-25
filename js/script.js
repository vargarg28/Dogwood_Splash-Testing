function acceptTerms() {

    const accepted = document.getElementById("acceptTerms");

    if (!accepted.checked) {
        alert("Please accept the Terms of Use before continuing.");
        return;
    }

    /*
     * Replace this with the Zscaler redirect,
     * authentication action, or acceptance logic.
     */

    alert("Terms Accepted");
}

function cancelAccess() {

    /*
     * Replace with the desired cancel action.
     * Zscaler can be configured to deny access.
     */

    window.location.href = "about:blank";
}