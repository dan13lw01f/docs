(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{231:function(e,t,r){"use strict";r.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=r(6),a=Object(i.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[r("h1",{attrs:{id:"upgrading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrading","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),r("p",[e._v("Each new release of Directus comes with migration files that make upgrading as easy as possible. The standard upgrade process is as follows:")]),e._v(" "),r("ol",[r("li",[e._v("Navigate ("),r("code",[e._v("cd")]),e._v(") to the root diretory of Directus")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("git pull origin")]),e._v(" to get the latest code")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("bin/directus db:upgrade")]),e._v(" to update your database with the migration script\n"),r("ul",[r("li",[e._v("You can also run the migration script by clicking: "),r("em",[e._v("Settings > Upgrade")])])])])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("Versionless API")]),e._v(" "),r("p",[e._v('The Directus API is "versionless", which means that new releases will only include fixes and improvements, but no deprecations or breaking changes.')])]),e._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("Legacy Upgrades")]),e._v(" "),r("p",[e._v("Directus 7 is a major release with significant breaking changes from previous versions. Therefore there is no automated way to migrate your settings and configuration from v6 to v7. However, because Directus stores your content as pure SQL, that data is always portable between versions. "),r("router-link",{attrs:{to:"/advanced/legacy-upgrades.html"}},[e._v("Learn More About Legacy Upgrades")])],1)]),e._v(" "),r("h2",{attrs:{id:"manually-upgrading-ftp-installs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#manually-upgrading-ftp-installs","aria-hidden":"true"}},[e._v("#")]),e._v(" Manually Upgrading FTP Installs")]),e._v(" "),r("p",[e._v("If you do not have access to git on your server and installed Directus via FTP, then your upgrade process is as follows:")]),e._v(" "),r("ol",[r("li",[e._v("Download the "),r("a",{attrs:{href:"https://github.com/directus/directus/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest release of Directus"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Upload/replace existing Directus files "),r("strong",[e._v("making sure not to replace")]),e._v(":\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/directus/directus/tree/master/config",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),r("OutboundLink")],1),e._v(" config files ("),r("code",[e._v("api.php")]),e._v(", "),r("code",[e._v("api.[project].php")]),e._v(", etc)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/directus/directus/blob/master/public/admin/config.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("App"),r("OutboundLink")],1),e._v(" config file")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/directus/directus/tree/master/public/uploads",target:"_blank",rel:"noopener noreferrer"}},[e._v("File storage directory"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/directus/directus/tree/master/public/extensions/custom",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom extensions"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/directus/directus/tree/master/logs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Log files"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Overrides for "),r("a",{attrs:{href:"https://github.com/directus/directus/blob/master/public/admin/style.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/directus/directus/blob/master/public/admin/script.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Run the database migration script by clicking: "),r("em",[e._v("Settings > Upgrade")])])]),e._v(" "),r("h2",{attrs:{id:"how-can-i-find-my-current-version-of-directus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-find-my-current-version-of-directus","aria-hidden":"true"}},[e._v("#")]),e._v(" How can I find my current version of Directus?")]),e._v(" "),r("p",[e._v('You can see your App version by hovering over "Powered by Directus" at the bottom of the Login page. The API and App versions are also included in the response from the '),r("a",{attrs:{href:"/api/reference#information"}},[e._v("Server Information endpoint")]),e._v(" (located at "),r("code",[e._v("/")]),e._v(").")])])},[],!1,null,null,null);a.options.__file="upgrading.md";t.default=a.exports}}]);