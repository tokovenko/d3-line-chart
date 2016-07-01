import {Diagram} from './Diagram';

abstract class Scale {
    public _scale;
    public diagram: Diagram;

    constructor(diagram: Diagram) {
        this._scale = Diagram.d3.scale.linear();
        this.diagram = diagram;
        this.setRange();
    }

    getInstance() {
        return this._scale;
    }
    
    setDomain(maximum) {
        this._scale.domain([0, maximum]);
    }

    abstract setRange();
}

export {Scale};
