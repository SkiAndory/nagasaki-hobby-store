const REGEX = /^(.{26,}\.com).{0,}/;

const API_URL = window.location.href.replace(REGEX, "$1/");

const CONFIG = {
	method: "GET",
	cache: "reload",
};

export { API_URL, CONFIG };
