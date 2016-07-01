import {Diagram} from './Diagram';

class Graph {
    public diagram;

    constructor(
        public data: Array<any>,
        public color: string) {
    }

    addTo(diagram: Diagram) {
        this.diagram = diagram;

        let graph = this.diagram.svg.append("g")
            .attr("transform", "translate(10, 10)")
            .on("mouseenter", (item) => {
                graph.select('polyline')
                    .style("stroke", "green")
                    .attr('stroke-width', 2);
                graph.selectAll('circle')
                    .style("fill", "green");
            })
            .on("mouseleave", (item) => {
                graph.select('polyline')
                    .style("stroke", this.color)
                    .attr('stroke-width', 1);
                graph.selectAll('circle')
                    .style("fill", this.color);
            });

        let points = [];
        this.data.map((item, i) => {
            points.push(`${this.getXPointCoordinate(item, i)},${this.getYPointCoordinate(item, i)}`)
        })
        graph.append("polyline")
            .style("stroke", this.color)
            .style("fill", "none")
            .attr('stroke-width', 1)
            .attr("points", points.join(', '));

        graph.selectAll("circle")
            .data(this.data)
            .enter()
                .append('circle')
                .attr("cx", (item, i) => this.getXPointCoordinate(item, i))
        		.attr("cy", (item, i) => this.getYPointCoordinate(item, i))
        		.attr("r", 4)
        		.attr("fill", this.color)
        		.style("cursor", "pointer")
                .on("click", (item) => {
                    console.log(item)
                })
                .on("mouseover", (item) => {
                    let tooltip = this.diagram.tooltip.getInstance();
                    tooltip.transition()
                        .text(item)
                        .style("left", (d3['event']['pageX']) + "px")
                        .style("top", (d3['event']['pageY'] - 28) + "px")
                        .duration(200)
                        .style("opacity", .9);
                    })
                .on("mouseout", (d) => {
                    let tooltip = this.diagram.tooltip.getInstance();
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });
    }

    getXPointCoordinate(item, i) {
        return this.diagram.getInnerWidth() / this.data.length * (i + 1);
    }
    getYPointCoordinate(item, i) {
        return this.diagram.getInnerHeight() - item / 80 * this.diagram.getInnerHeight();
    }
}

export {Graph};
