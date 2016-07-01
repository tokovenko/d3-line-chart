import {Scale} from './Scale';
import {Diagram} from './Diagram';

abstract class Axis {
    protected _axis;
    protected _scale;

    constructor(scale: Scale) {
        this._scale = scale;
        this._axis = Diagram.d3
            .svg
            .axis()
            .scale(this._scale.getInstance());
        this.setOrient();
    }

    getInstance() {
        return this._axis;
    }

    abstract getTransform();

    abstract setOrient();
}

export {Axis};
