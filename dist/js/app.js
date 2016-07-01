/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Diagram_1 = __webpack_require__(1);
	var ScaleX_1 = __webpack_require__(3);
	var ScaleY_1 = __webpack_require__(5);
	var AxisX_1 = __webpack_require__(6);
	var AxisY_1 = __webpack_require__(8);
	var Graph_1 = __webpack_require__(9);
	var diagram = new Diagram_1.Diagram(500, 500);
	diagram.setMargin({ top: 20, left: 100 });
	diagram.svgContainer.style('background', '#f4f4f4');
	var scaleX = new ScaleX_1.ScaleX(diagram);
	scaleX.setDomain(5);
	diagram.addAxis(new AxisX_1.AxisX(scaleX));
	var scaleY = new ScaleY_1.ScaleY(diagram);
	scaleY.setDomain(80);
	diagram.addAxis(new AxisY_1.AxisY(scaleY));
	diagram.addGraph(new Graph_1.Graph([10, 20, 30, 20, 60], 'red'));
	diagram.addGraph(new Graph_1.Graph([6, 55, 32, 55], 'blue'));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Tooltip_1 = __webpack_require__(2);
	var Diagram = (function () {
	    function Diagram(width, height) {
	        if (width === void 0) { width = 500; }
	        if (height === void 0) { height = 500; }
	        this.width = width;
	        this.height = height;
	        this.svgContainer = Diagram.d3.select('svg');
	        this.svg = this.svgContainer.append("g");
	        this.setMargin({});
	        this.updateSizeSvg();
	        this.tooltip = new Tooltip_1.Tooltip();
	        this.tooltip.addTo(this);
	    }
	    ;
	    Diagram.prototype.updateSizeSvg = function () {
	        this.svgContainer.attr('width', this.width + this.margin.left + this.margin.right)
	            .attr('height', this.height + this.margin.top + this.margin.bottom);
	        this.svg.attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
	    };
	    Diagram.prototype.setData = function (data) {
	        this.data = data;
	    };
	    Diagram.prototype.setWidth = function (width) {
	        this.width = width;
	    };
	    Diagram.prototype.setHeight = function (height) {
	        this.height = height;
	    };
	    Diagram.prototype.setMargin = function (margin) {
	        this.margin = {
	            top: margin.top || 20,
	            right: margin.right || 20,
	            bottom: margin.bottom || 20,
	            left: margin.left || 20
	        };
	        this.updateSizeSvg();
	    };
	    Diagram.prototype.addAxis = function (axis) {
	        this.svg.append("g")
	            .attr("transform", axis.getTransform())
	            .call(axis.getInstance());
	    };
	    Diagram.prototype.addGraph = function (graph) {
	        graph.addTo(this);
	    };
	    Diagram.prototype.addTooltip = function (tooltip) {
	        tooltip.addTo(this);
	    };
	    Diagram.prototype.getInnerWidth = function () {
	        return this.width - this.margin.left - this.margin.right;
	    };
	    Diagram.prototype.getInnerHeight = function () {
	        return this.height - this.margin.top - this.margin.bottom;
	    };
	    Diagram.d3 = d3;
	    return Diagram;
	}());
	exports.Diagram = Diagram;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Diagram_1 = __webpack_require__(1);
	var Tooltip = (function () {
	    function Tooltip() {
	    }
	    Tooltip.prototype.addTo = function (diagram) {
	        this.diagram = diagram;
	        this._tooltip = Diagram_1.Diagram.d3.select("body").append("div")
	            .attr("class", "tooltip")
	            .style("opacity", 0);
	    };
	    Tooltip.prototype.getInstance = function () {
	        return this._tooltip;
	    };
	    return Tooltip;
	}());
	exports.Tooltip = Tooltip;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Scale_1 = __webpack_require__(4);
	var ScaleX = (function (_super) {
	    __extends(ScaleX, _super);
	    function ScaleX() {
	        _super.apply(this, arguments);
	    }
	    ScaleX.prototype.setRange = function () {
	        var range = [0, this.diagram.getInnerWidth()];
	        this._scale.range(range);
	    };
	    return ScaleX;
	}(Scale_1.Scale));
	exports.ScaleX = ScaleX;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Diagram_1 = __webpack_require__(1);
	var Scale = (function () {
	    function Scale(diagram) {
	        this._scale = Diagram_1.Diagram.d3.scale.linear();
	        this.diagram = diagram;
	        this.setRange();
	    }
	    Scale.prototype.getInstance = function () {
	        return this._scale;
	    };
	    Scale.prototype.setDomain = function (maximum) {
	        this._scale.domain([0, maximum]);
	    };
	    return Scale;
	}());
	exports.Scale = Scale;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Scale_1 = __webpack_require__(4);
	var ScaleY = (function (_super) {
	    __extends(ScaleY, _super);
	    function ScaleY() {
	        _super.apply(this, arguments);
	    }
	    ScaleY.prototype.setRange = function () {
	        var range = [this.diagram.getInnerHeight(), 0];
	        this._scale.range(range);
	    };
	    return ScaleY;
	}(Scale_1.Scale));
	exports.ScaleY = ScaleY;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Axis_1 = __webpack_require__(7);
	var AxisX = (function (_super) {
	    __extends(AxisX, _super);
	    function AxisX() {
	        _super.apply(this, arguments);
	    }
	    AxisX.prototype.getTransform = function () {
	        return "translate(10, " + (this._scale.diagram.height - 30) + ")";
	    };
	    AxisX.prototype.setOrient = function () {
	        this._axis.orient("bottom");
	    };
	    return AxisX;
	}(Axis_1.Axis));
	exports.AxisX = AxisX;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Diagram_1 = __webpack_require__(1);
	var Axis = (function () {
	    function Axis(scale) {
	        this._scale = scale;
	        this._axis = Diagram_1.Diagram.d3
	            .svg
	            .axis()
	            .scale(this._scale.getInstance());
	        this.setOrient();
	    }
	    Axis.prototype.getInstance = function () {
	        return this._axis;
	    };
	    return Axis;
	}());
	exports.Axis = Axis;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Axis_1 = __webpack_require__(7);
	var AxisY = (function (_super) {
	    __extends(AxisY, _super);
	    function AxisY() {
	        _super.apply(this, arguments);
	    }
	    AxisY.prototype.getTransform = function () {
	        return 'translate(10, 10)';
	    };
	    AxisY.prototype.setOrient = function () {
	        this._axis.orient("left");
	    };
	    return AxisY;
	}(Axis_1.Axis));
	exports.AxisY = AxisY;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	var Graph = (function () {
	    function Graph(data, color) {
	        this.data = data;
	        this.color = color;
	    }
	    Graph.prototype.addTo = function (diagram) {
	        var _this = this;
	        this.diagram = diagram;
	        var graph = this.diagram.svg.append("g")
	            .attr("transform", "translate(10, 10)")
	            .on("mouseenter", function (item) {
	            graph.select('polyline')
	                .style("stroke", "green")
	                .attr('stroke-width', 2);
	            graph.selectAll('circle')
	                .style("fill", "green");
	        })
	            .on("mouseleave", function (item) {
	            graph.select('polyline')
	                .style("stroke", _this.color)
	                .attr('stroke-width', 1);
	            graph.selectAll('circle')
	                .style("fill", _this.color);
	        });
	        var points = [];
	        this.data.map(function (item, i) {
	            points.push(_this.getXPointCoordinate(item, i) + "," + _this.getYPointCoordinate(item, i));
	        });
	        graph.append("polyline")
	            .style("stroke", this.color)
	            .style("fill", "none")
	            .attr('stroke-width', 1)
	            .attr("points", points.join(', '));
	        graph.selectAll("circle")
	            .data(this.data)
	            .enter()
	            .append('circle')
	            .attr("cx", function (item, i) { return _this.getXPointCoordinate(item, i); })
	            .attr("cy", function (item, i) { return _this.getYPointCoordinate(item, i); })
	            .attr("r", 4)
	            .attr("fill", this.color)
	            .style("cursor", "pointer")
	            .on("click", function (item) {
	            console.log(item);
	        })
	            .on("mouseover", function (item) {
	            var tooltip = _this.diagram.tooltip.getInstance();
	            tooltip.transition()
	                .text(item)
	                .style("left", (d3['event']['pageX']) + "px")
	                .style("top", (d3['event']['pageY'] - 28) + "px")
	                .duration(200)
	                .style("opacity", .9);
	        })
	            .on("mouseout", function (d) {
	            var tooltip = _this.diagram.tooltip.getInstance();
	            tooltip.transition()
	                .duration(500)
	                .style("opacity", 0);
	        });
	    };
	    Graph.prototype.getXPointCoordinate = function (item, i) {
	        return this.diagram.getInnerWidth() / this.data.length * (i + 1);
	    };
	    Graph.prototype.getYPointCoordinate = function (item, i) {
	        return this.diagram.getInnerHeight() - item / 80 * this.diagram.getInnerHeight();
	    };
	    return Graph;
	}());
	exports.Graph = Graph;


/***/ }
/******/ ]);