import {Scale} from './Scale';
import {Axis} from './Axis';
import {Graph} from './Graph';
import {Tooltip} from './Tooltip';

class Diagram {
    public static d3 = d3;
    public margin;
    public data: Array<any>;
    public svg;
    public svgContainer;
    public tooltip;

    constructor(
        public width: number = 500,
        public height: number = 500) {
        this.svgContainer = Diagram.d3.select('svg');
        this.svg = this.svgContainer.append("g");
        this.setMargin({});
        this.updateSizeSvg();
        
        this.tooltip = new Tooltip();
        this.tooltip.addTo(this);
    };

    updateSizeSvg() {
        this.svgContainer.attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom);

        this.svg.attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
    }
    setData(data: Array<any>) {
        this.data = data;
    }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    setMargin(margin) {
        this.margin = {
            top: margin.top || 20,
            right: margin.right || 20,
            bottom: margin.bottom || 20,
            left: margin.left || 20
        };
        this.updateSizeSvg();
    }

    public addAxis(axis: Axis) {
        this.svg.append("g")
            .attr("transform", axis.getTransform())
            .call(axis.getInstance());
    }

    public addGraph(graph: Graph) {
        graph.addTo(this);
    }

    public addTooltip(tooltip: Tooltip) {
        tooltip.addTo(this);
    }

    public getInnerWidth() {
        return this.width - this.margin.left - this.margin.right;
    }

    public getInnerHeight() {
        return this.height - this.margin.top - this.margin.bottom;
    }
}

export {Diagram};
