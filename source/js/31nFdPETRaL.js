! function() {
	"use strict";
	var e, n, t, r, o, i, u, s, a, c = {},
		f = {};

	function d(e) {
		var n = f[e];
		if (void 0 !== n) return n.exports;
		var t = f[e] = {
			id: e,
			loaded: !1,
			exports: {}
		};
		return c[e].call(t.exports, t, t.exports, d), t.loaded = !0, t.exports
	}
	d.m = c, d.c = f, e = [], d.O = function(n, t, r, o) {
			if (!t) {
				var i = 1 / 0;
				for (c = 0; c < e.length; c++) {
					t = e[c][0], r = e[c][1], o = e[c][2];
					for (var u = !0, s = 0; s < t.length; s++)(!1 & o || i >= o) && Object.keys(d.O)
						.every((function(e) {
							return d.O[e](t[s])
						})) ? t.splice(s--, 1) : (u = !1, o < i && (i = o));
					if (u) {
						e.splice(c--, 1);
						var a = r();
						void 0 !== a && (n = a)
					}
				}
				return n
			}
			o = o || 0;
			for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
			e[c] = [t, r, o]
		}, d.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return d.d(n, {
				a: n
			}), n
		}, d.d = function(e, n) {
			for (var t in n) d.o(n, t) && !d.o(e, t) && Object.defineProperty(e, t, {
				enumerable: !0,
				get: n[t]
			})
		}, d.f = {}, d.e = function(e) {
			return Promise.all(Object.keys(d.f)
				.reduce((function(n, t) {
					return d.f[t](e, n), n
				}), []))
		}, d.u = function(e) {
			return window.webpackManifest_Stores_CDN_AssetsMap[{
				110: "Widgets-LiveVideoBanner.js",
				174: "Common-NexusEventLogger.js",
				366: "Common-ProductCard.js",
				378: "Federation-widgets.js",
				651: "Common-MultiMediaCarousel.js",
				653: "videojs.js",
				887: "Common-styles.js",
				1417: "Common-VariationHandler.js",
				1431: "Widgets-CampaignProductList.js",
				1433: "Widgets-ProductGrid.js",
				1620: "Widgets-ProductGridFilters.js",
				1810: "styles-77a2a1a6.js",
				2673: "Widgets-AuthorSubHeader.js",
				2729: "Widgets-Banner.js",
				2879: "Common-NavItem.js",
				2940: "Common-NexusLoggerWrapper.js",
				2983: "Common-TopBar.js",
				3135: "Widgets-AuthorCards.js",
				3397: "Widgets-SLPFooterIngress.js",
				3404: "Common-config.js",
				3525: "Widgets-MultiMediaCarousel.js",
				3699: "styles-f20e867b.js",
				4e3: "Common-ProductListItem.js",
				4179: "Widgets-LiveVideo.js",
				4221: "Common-ProductShowcase.js",
				4255: "Widgets-EditorialRow.js",
				4520: "Common-TextTileLayer.js",
				4526: "Common-widgetContext.js",
				4563: "Widgets-ProductCarousel.js",
				4889: "Common-EditorialTileProduct.js",
				4958: "Common-Metrics.js",
				5103: "Common-EditorialTile.js",
				5194: "Federation-selectors.js",
				5346: "Common-EditorialTileInteractiveImage.js",
				5410: "Widgets-Header.js",
				5631: "styles-31743c5a.js",
				5684: "Common-Variations.js",
				6016: "Federation-shared.js",
				6076: "Widgets-Gallery.js",
				6335: "Common-ProductGrid.js",
				6561: "Widgets-AuthorFooter.js",
				6588: "Widgets-Brand.js",
				6697: "Widgets-ProductCollection.js",
				7076: "Common-ProductGridItem.js",
				7123: "reactmarkdown.js",
				7224: "Common-Header.js",
				7345: "Common-BuyingOptions.js",
				7659: "Common-AddToCart.js",
				7752: "Common-ProductCarousel.js",
				7798: "Common-EditorialRow.js",
				8459: "Widgets-SimilarAuthors.js",
				8729: "Widgets-AuthorBio.js",
				8914: "Common-NavBar.js",
				8970: "Widgets-BrandFollowProductHighlight.js",
				9280: "Common-Product.js",
				9563: "Widgets-BrandProfilePreviewCard.js",
				9653: "Common-ImageVideoCarousel.js",
				9914: "Widgets-Share.js",
				9918: "Common-EditorialTileImage.js"
			} [e]]
		}, d.miniCssF = function(e) {
			return window.webpackManifest_Stores_CDN_AssetsMap[{
				1810: "styles-77a2a1a6.css",
				3699: "styles-f20e867b.css",
				5631: "styles-31743c5a.css"
			} [e]]
		}, d.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (e) {
				if ("object" == typeof window) return window
			}
		}(), d.o = function(e, n) {
			return Object.prototype.hasOwnProperty.call(e, n)
		}, n = {}, t = "@amzn/stores-content-rendering-server:", d.l = function(e, r, o, i) {
			if (n[e]) n[e].push(r);
			else {
				var u, s;
				if (void 0 !== o)
					for (var a = document.getElementsByTagName("script"), c = 0; c < a.length; c++) {
						var f = a[c];
						if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == t + o) {
							u = f;
							break
						}
					}
				u || (s = !0, (u = document.createElement("script"))
					.charset = "utf-8", u.timeout = 120, d.nc && u.setAttribute("nonce", d.nc), u.setAttribute("data-webpack", t + o), u.src = e, 0 !== u.src.indexOf(window.location.origin + "/") && (u.crossOrigin = "anonymous")), n[e] = [r];
				var l = function(t, r) {
						u.onerror = u.onload = null, clearTimeout(m);
						var o = n[e];
						if (delete n[e], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function(e) {
							return e(r)
						})), t) return t(r)
					},
					m = setTimeout(l.bind(null, void 0, {
						type: "timeout",
						target: u
					}), 12e4);
				u.onerror = l.bind(null, u.onerror), u.onload = l.bind(null, u.onload), s && document.head.appendChild(u)
			}
		}, d.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, d.nmd = function(e) {
			return e.paths = [], e.children || (e.children = []), e
		},
		function() {
			d.S = {};
			var e = {},
				n = {};
			d.I = function(t, r) {
				r || (r = []);
				var o = n[t];
				if (o || (o = n[t] = {}), !(r.indexOf(o) >= 0)) {
					if (r.push(o), e[t]) return e[t];
					d.o(d.S, t) || (d.S[t] = {});
					var i = d.S[t],
						u = "@amzn/stores-content-rendering-server",
						s = function(e, n, t, r) {
							var o = i[e] = i[e] || {},
								s = o[n];
							(!s || !s.loaded && (!r != !s.eager ? r : u > s.from)) && (o[n] = {
								get: t,
								from: u,
								eager: !!r
							})
						},
						a = [];
					return "default" === t && (s("./src/context/LegacyWidgetContextProvider", "0", (function() {
							return function() {
								return d(9457)
							}
						}), 1), s("./src/context/ProductGridContext", "0", (function() {
							return function() {
								return d(35415)
							}
						}), 1), s("./src/context/widget", "0", (function() {
							return function() {
								return d(3508)
							}
						}), 1), s("@reduxjs/toolkit", "1.9.2", (function() {
							return function() {
								return d(85284)
							}
						}), 1), s("react-dom", "17.0.2", (function() {
							return function() {
								return d(82410)
							}
						}), 1), s("react-redux", "8.0.5", (function() {
							return function() {
								return d(9179)
							}
						}), 1), s("react", "17.0.2", (function() {
							return function() {
								return d(92698)
							}
						}), 1), s("redux-saga", "1.2.2", (function() {
							return function() {
								return d(18212)
							}
						}), 1), s("redux", "4.2.1", (function() {
							return function() {
								return d(90218)
							}
						}), 1)), e[t] = a.length ? Promise.all(a)
						.then((function() {
							return e[t] = 1
						})) : 1
				}
			}
		}(), d.p = "", r = d.u, o = d.e, i = {}, u = {}, d.u = function(e) {
			return r(e) + (i.hasOwnProperty(e) ? "?" + i[e] : "")
		}, d.e = function(e) {
			return o(e)
				.catch((function(n) {
					var t = u.hasOwnProperty(e) ? u[e] : 3;
					if (t < 1) {
						var o = r(e);
						throw n.message = "Loading chunk " + e + " failed after 3 retries.\n(" + o + ")", n.request = o, n
					}
					return new Promise((function(n) {
						var r = 3 - t + 1;
						setTimeout((function() {
							var o = "cache-bust=true&retry-attempt=" + r;
							i[e] = o, u[e] = t - 1, n(d.e(e))
						}), 0)
					}))
				}))
		},
		function() {
			var e = function(e) {
					var n = function(e) {
							return e.split(".")
								.map((function(e) {
									return +e == e ? +e : e
								}))
						},
						t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
						r = t[1] ? n(t[1]) : [];
					return t[2] && (r.length++, r.push.apply(r, n(t[2]))), t[3] && (r.push([]), r.push.apply(r, n(t[3]))), r
				},
				n = function(e) {
					var t = e[0],
						r = "";
					if (1 === e.length) return "*";
					if (t + .5) {
						r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
						for (var o = 1, i = 1; i < e.length; i++) o--, r += "u" == (typeof(s = e[i]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, s);
						return r
					}
					var u = [];
					for (i = 1; i < e.length; i++) {
						var s = e[i];
						u.push(0 === s ? "not(" + a() + ")" : 1 === s ? "(" + a() + " || " + a() + ")" : 2 === s ? u.pop() + " " + u.pop() : n(s))
					}
					return a();

					function a() {
						return u.pop()
							.replace(/^\((.+)\)$/, "$1")
					}
				},
				t = function(n, r) {
					if (0 in n) {
						r = e(r);
						var o = n[0],
							i = o < 0;
						i && (o = -o - 1);
						for (var u = 0, s = 1, a = !0;; s++, u++) {
							var c, f, d = s < n.length ? (typeof n[s])[0] : "";
							if (u >= r.length || "o" == (f = (typeof(c = r[u]))[0])) return !a || ("u" == d ? s > o && !i : "" == d != i);
							if ("u" == f) {
								if (!a || "u" != d) return !1
							} else if (a)
								if (d == f)
									if (s <= o) {
										if (c != n[s]) return !1
									} else {
										if (i ? c > n[s] : c < n[s]) return !1;
										c != n[s] && (a = !1)
									}
							else if ("s" != d && "n" != d) {
								if (i || s <= o) return !1;
								a = !1, s--
							} else {
								if (s <= o || f < d != i) return !1;
								a = !1
							} else "s" != d && "n" != d && (a = !1, s--)
						}
					}
					var l = [],
						m = l.pop.bind(l);
					for (u = 1; u < n.length; u++) {
						var g = n[u];
						l.push(1 == g ? m() | m() : 2 == g ? m() & m() : g ? t(g, r) : !m())
					}
					return !!m()
				},
				r = function(n, t) {
					var r = n[t];
					return Object.keys(r)
						.reduce((function(n, t) {
							return !n || !r[n].loaded && function(n, t) {
								n = e(n), t = e(t);
								for (var r = 0;;) {
									if (r >= n.length) return r < t.length && "u" != (typeof t[r])[0];
									var o = n[r],
										i = (typeof o)[0];
									if (r >= t.length) return "u" == i;
									var u = t[r],
										s = (typeof u)[0];
									if (i != s) return "o" == i && "n" == s || "s" == s || "u" == i;
									if ("o" != i && "u" != i && o != u) return o < u;
									r++
								}
							}(n, t) ? t : n
						}), 0)
				},
				o = function(e, o, u, s) {
					var a = r(e, u);
					return t(s, a) || "undefined" != typeof console && console.warn && console.warn(function(e, t, r, o) {
						return "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + n(o) + ")"
					}(e, u, a, s)), i(e[u][a])
				},
				i = function(e) {
					return e.loaded = 1, e.get()
				},
				u = function(e) {
					return function(n, t, r, o) {
						var i = d.I(n);
						return i && i.then ? i.then(e.bind(e, n, d.S[n], t, r, o)) : e(n, d.S[n], t, r, o)
					}
				},
				s = u((function(e, n, t, o) {
					return n && d.o(n, t) ? function(e, n, t, o) {
						var u = r(e, t);
						return i(e[t][u])
					}(n, 0, t) : o()
				})),
				a = u((function(e, n, t, r, i) {
					return n && d.o(n, t) ? o(n, 0, t, r) : i()
				})),
				c = {},
				f = {
					31479: function() {
						return s("default", "./src/context/ProductGridContext", (function() {
							return function() {
								return d(35415)
							}
						}))
					},
					28605: function() {
						return a("default", "@reduxjs/toolkit", [1, 1, 9, 2], (function() {
							return function() {
								return d(85284)
							}
						}))
					},
					56421: function() {
						return a("default", "react-redux", [1, 8, 0, 5], (function() {
							return function() {
								return d(9179)
							}
						}))
					},
					96324: function() {
						return s("default", "./src/context/LegacyWidgetContextProvider", (function() {
							return function() {
								return d(9457)
							}
						}))
					},
					8330: function() {
						return a("default", "react", [1, 17, 0, 2], (function() {
							return function() {
								return d(92698)
							}
						}))
					},
					88135: function() {
						return a("default", "react-dom", [1, 17, 0, 2], (function() {
							return function() {
								return d(82410)
							}
						}))
					},
					18045: function() {
						return a("default", "redux", [1, 4, 2, 1], (function() {
							return function() {
								return d(90218)
							}
						}))
					},
					61605: function() {
						return a("default", "redux-saga", [1, 1, 2, 2], (function() {
							return function() {
								return d(18212)
							}
						}))
					},
					84603: function() {
						return s("default", "./src/context/widget", (function() {
							return function() {
								return d(3508)
							}
						}))
					}
				};
			[8330, 88135, 56421, 28605, 18045, 61605, 84603, 8330, 84603, 18045, 88135].forEach((function(e) {
				d.m[e] = function(n) {
					c[e] = 0, delete d.c[e];
					var t = f[e]();
					if ("function" != typeof t) throw new Error("Shared module is not available for eager consumption: " + e);
					n.exports = t()
				}
			}));
			var l = {
				378: [31479, 56421, 28605, 96324],
				1433: [31479],
				1620: [31479],
				6016: [28605],
				6697: [31479]
			};
			d.f.consumes = function(e, n) {
				d.o(l, e) && l[e].forEach((function(e) {
					if (d.o(c, e)) return n.push(c[e]);
					var t = function(n) {
							c[e] = 0, d.m[e] = function(t) {
								delete d.c[e], t.exports = n()
							}
						},
						r = function(n) {
							delete c[e], d.m[e] = function(t) {
								throw delete d.c[e], n
							}
						};
					try {
						var o = f[e]();
						o.then ? n.push(c[e] = o.then(t)
							.catch(r)) : t(o)
					} catch (e) {
						r(e)
					}
				}))
			}
		}(), s = function(e) {
			return new Promise((function(n, t) {
				var r = d.miniCssF(e),
					o = d.p + r;
				if (function(e, n) {
					for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
						var o = (u = t[r])
							.getAttribute("data-href") || u.getAttribute("href");
						if ("stylesheet" === u.rel && (o === e || o === n)) return u
					}
					var i = document.getElementsByTagName("style");
					for (r = 0; r < i.length; r++) {
						var u;
						if ((o = (u = i[r])
							.getAttribute("data-href")) === e || o === n) return u
					}
				}(r, o)) return n();
				! function(e, n, t, r) {
					var o = document.createElement("link");
					o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = function(i) {
						if (o.onerror = o.onload = null, "load" === i.type) t();
						else {
							var u = i && ("load" === i.type ? "missing" : i.type),
								s = i && i.target && i.target.href || n,
								a = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
							a.code = "CSS_CHUNK_LOAD_FAILED", a.type = u, a.request = s, o.parentNode.removeChild(o), r(a)
						}
					}, o.href = n, 0 !== o.href.indexOf(window.location.origin + "/") && (o.crossOrigin = "anonymous"), document.head.appendChild(o)
				}(e, o, n, t)
			}))
		}, a = {
			3666: 0
		}, d.f.miniCss = function(e, n) {
			a[e] ? n.push(a[e]) : 0 !== a[e] && {
				1810: 1,
				3699: 1,
				5631: 1
			} [e] && n.push(a[e] = s(e)
				.then((function() {
					a[e] = 0
				}), (function(n) {
					throw delete a[e], n
				})))
		},
		function() {
			var e = {
				3666: 0,
				1810: 0,
				3699: 0,
				5631: 0
			};
			d.f.j = function(n, t) {
				var r = d.o(e, n) ? e[n] : void 0;
				if (0 !== r)
					if (r) t.push(r[2]);
					else if (/^(36(66|99)|1810|5631)$/.test(n)) e[n] = 0;
				else {
					var o = new Promise((function(t, o) {
						r = e[n] = [t, o]
					}));
					t.push(r[2] = o);
					var i = d.p + d.u(n),
						u = new Error;
					d.l(i, (function(t) {
						if (d.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
							var o = t && ("load" === t.type ? "missing" : t.type),
								i = t && t.target && t.target.src;
							u.message = "Loading chunk " + n + " failed.\n(" + o + ": " + i + ")", u.name = "ChunkLoadError", u.type = o, u.request = i, r[1](u)
						}
					}), "chunk-" + n, n)
				}
			}, d.O.j = function(n) {
				return 0 === e[n]
			};
			var n = function(n, t) {
					var r, o, i = t[0],
						u = t[1],
						s = t[2],
						a = 0;
					if (i.some((function(n) {
						return 0 !== e[n]
					}))) {
						for (r in u) d.o(u, r) && (d.m[r] = u[r]);
						if (s) var c = s(d)
					}
					for (n && n(t); a < i.length; a++) o = i[a], d.o(e, o) && e[o] && e[o][0](), e[o] = 0;
					return d.O(c)
				},
				t = self.webpackChunk_amzn_stores_content_rendering_server = self.webpackChunk_amzn_stores_content_rendering_server || [];
			t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
		}()
}();