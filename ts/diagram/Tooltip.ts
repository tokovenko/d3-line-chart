import {Diagram} from './Diagram';

class Tooltip {
    public diagram;
    public _tooltip;

    constructor() {
    }

    addTo(diagram: Diagram) {
        this.diagram = diagram;
        this._tooltip = Diagram.d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
    }

    getInstance() {
        return this._tooltip;
    }
}

export {Tooltip};
